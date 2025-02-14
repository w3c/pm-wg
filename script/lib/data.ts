import { MiniDOM } from './minidom.ts';
import * as fs     from 'node:fs/promises';

type FileName = string;

/** The data extracted from the minutes that is supposed to be displayed */
interface DisplayedData {
    /** The File name of the minutes */
    fname: FileName;
    /** Date of the minutes */
    date: Date;
    /** Array of TOC entries (can be HTML) */
    toc: string[];
    /** Array of Resolution entries entries (can be HTML) */
    res: string[];
}

/** The data regrouped per years */
export type GroupedData = Map<number, DisplayedData[]>;

/** Files names that must be ignored in the directory of minutes, if there */
const ignoredFiles: string[] = ["index.html", "resolutions.html"];

/**
 * Get the file names of all the minutes for a given WG.
 * The file names are relative to the directory.
 * 
 * 
 * @param directory
 * @returns 
 */
async function getMinutes(directory: string): Promise<FileName[]> {
    return (await fs.readdir(directory))
        .filter(file => !ignoredFiles.includes(file))   
        .map(file => `${directory}/${file}`);
}


/**
 * Get all TOCs and resolutions with the respective date; one block each that can 
 * be displayed in the generated HTML
 * 
 * @param minutes 
 * @returns 
 */
async function getAllData(minutes: FileName[]): Promise<DisplayedData[]> {
    /*
     * Extract a list of <li> entries from the content of a minutes file, using a CSS selector.
     */
    const extractListEntries = (fname: FileName, content: MiniDOM, selector: string): string[] => {
        // There is only one cleanup operation for now, but it could be extended if needed
        const cleanupData = (nav: string): string => {
            return nav
                // References should not be relative
                .replace(/href="#/g, `target="_blank" href="${fname}#`)
                ;
        };

        const resLines: NodeListOf<Element> = content.querySelectorAll(selector);

        if (resLines.length === 0) {
            return [];
        } else {
            return Array.from(resLines)
                // Get the HTML line corresponding to an 'li' element
                .map((line: Element) => line.innerHTML)
                // Cleanup each the line before returning it
                .map(cleanupData);
        }
    }

    // Get the data for a single entry; the Promises are collected in an array
    // for a parallel execution via Promise.allSettled.
    const retrieveDisplayData = async (fname: FileName): Promise<DisplayedData> => {
        // Get the minutes file as a text
        const response = await fs.readFile(fname, "utf-8");
        // Parse the (HTML) text into a MiniDOM
        const content  = new MiniDOM(response);

        // Find the date of the minutes
        const date_title :string | null | undefined  = content.querySelector("header h2:first-of-type")?.textContent;
        const date       = new Date(date_title ?? "1970-01-01");

        return {
            fname : fname,
            date  : date,
            toc   : extractListEntries(fname, content, "#toc ol li"),  
            res   : extractListEntries(fname, content, "#ResolutionSummary ol li"), 
        };
    }

    // Gather all the Promises for a parallel execution
    const promises: Promise<DisplayedData>[] = minutes.map(retrieveDisplayData);

    // Some of the promises might have failed, so we need to filter those out.
    // But we want to display everything we can...
    const results : PromiseSettledResult<DisplayedData>[] = await Promise.allSettled(promises);
    const output = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);

    // Sorting the output by date before returning it
    return output.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        else return 0;
    });    
}


/**
 * Main entry point to get the Data grouped by year. The data themselves are arrays of strings, in HTML format.
 * 
 * @param directory 
 * @returns 
 */
export async function getGroupedData(directory: string): Promise<GroupedData> {
    const groupDisplayedDataByYear = (data: DisplayedData[]): GroupedData => {
        const groups: GroupedData = new Map<number, DisplayedData[]>();
        for (const entry of data) {
            const year = entry.date.getFullYear();
            if (!groups.has(year)) {
                groups.set(year, []);
            }
            groups.get(year)?.push(entry);
        }
        return groups;
    }

    // Get the references to all the minutes
    const minutes: FileName[]      = await getMinutes(directory);
    // For each of the minutes, get the content.
    const display: DisplayedData[] = await getAllData(minutes);
    return groupDisplayedDataByYear(display);
}
