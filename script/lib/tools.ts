import { MiniDOM } from './minidom.ts';

/** GitHub API URL to get to the minutes in a specific WG */
const APIUrl: string  = "https://api.github.com/repos/w3c/{wg}/contents/minutes";

/** URL of the GitHub pages for a specific WG */
const HTMLUrl: string = "https://w3c.github.io/{wg}/{path}";

type URL = string;

/** The data extracted from the minutes that is supposed to be displayed */
interface DisplayedData {
    /** The URL of the minutes */
    url: URL;
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
 * Get the URLs of all the minutes for a given WG.
 * 
 * This is a GitHub specific version. The goal is to be able, in time, to 
 * exchange that against the W3C specific API.
 * 
 * @param wg
 * @returns 
 */
async function getMinutes(wg: string): Promise<URL[]> {
    // This is the final GitHUb API URL
    const apiUrl = APIUrl.replace("{wg}", wg);

    const ghResponse = await fetch(apiUrl);
    if (!ghResponse.ok) {
        console.error(`Error: ${ghResponse.statusText} (${ghResponse.status}) for "${apiUrl}"`);
        return [];
    }   

    // deno-lint-ignore no-explicit-any
    const response = (await ghResponse.json()) as any[];
    
    // remove the index files, if they are there:
    const final_data = response.filter((f: { name: string; }): boolean => !ignoredFiles.includes(f.name));

    // deno-lint-ignore no-explicit-any
    return final_data.map((entry: any): URL => HTMLUrl.replace("{wg}", wg).replace("{path}", entry.path));
}

/* **************************************************************************************** */
/*                     Handling the Data content of a single minutes file                   */
/* **************************************************************************************** */

/**
 * Extract a list of entries from the content of a minutes file, using a CSS selector.
 * 
 * @param entry
 * @param content 
 * @param selector - CSS selector to get to the list of entries
 * @returns 
 */
function extractListEntries(entry: URL, content: MiniDOM, selector: string): string[] {
    // There is only one cleanup operation for now, but it could be extended
    const cleanupData = (nav: string): string => {
        return nav
            // References should not be relative
            .replace(/href="#/g, `target="_blank" href="${entry}#`)
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


/**
 * Get all TOCs and resolutions with the respective date; one block each that can 
 * be displayed in the generated HTML
 * 
 * @param minutes 
 * @returns 
 */
async function getAllData(minutes: URL[]): Promise<DisplayedData[]> {
    // Get the data for a single entry
    const retrieveDisplayData = async (entry: URL): Promise<DisplayedData> => {
        // Get the minutes file as a text
        const response   = await (await fetch(entry)).text();
        // Parse the (HTML) text into a MiniDOM
        const content    = new MiniDOM(response);

        // Find the date of the minutes
        const date_title = content.querySelector("header h2:first-of-type")?.textContent;
        const date       = new Date(date_title ?? "1970-01-01");

        return {
            url : entry,
            date: date,
            toc: extractListEntries(entry, content, "nav#toc ol li"),  
            res: extractListEntries(entry, content, "div#ResolutionSummary ol li"), 
        };
    }

    // Gather all the Promises for a parallel execution
    const promises = minutes.map(retrieveDisplayData);

    // Some of the promises might have failed, so we need to filter out the failed ones
    // but we want to display everything we can...
    const results = await Promise.allSettled(promises);
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
 * @param wg 
 * @returns 
 */
export async function getGroupedData(wg: string): Promise<GroupedData> {
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
    const minutes: URL[]           = await getMinutes(wg);
    // For each of the minutes, get the content.
    const display: DisplayedData[] = await getAllData(minutes);
    return groupDisplayedDataByYear(display);
}
