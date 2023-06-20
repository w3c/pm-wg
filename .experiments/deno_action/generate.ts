const HTML_content = `
<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <title>W3C Publishing Maintenance Working Group — Meeting Minutes</title>
        <link rel="stylesheet" type="text/css" href="https://www.w3.org/People/Ivan/StyleSheets/mystyle.css">
        <!-- <link rel="stylesheet" type="text/css" href="https://www.w3.org/StyleSheets/base.css"> -->
        <link rel="Help" href="https://www.w3.org/Help/">
        <style>
            h4, h5, h6 {
                border-bottom: 0px solid #ccc !important;
            }
        </style>
    </head>
    <body>
         <header>
            <p><a href="https://www.w3.org/"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt=W3C border=0 height=48 width=72></a></p>
        </header>
    
    
        <h1>Publishing Maintenance Working Group — Meeting Minutes</h1>

        <p>These are the references of meeting minutes of the <a href="https://www.w3.org/2023/06/pmwg-charter.html">Publishing Maintenance Working Group</a> calls. For further details on the 
        Working Group, its resources, joining instructions, etc., see the <a href="https://www.w3.org/groups/wg/pm/">Working Group Home page</a>.</p>

        <div id="list-of-calls">
            %%%GENERATED_CONTENT%%%
        </div>

        <footer>
            <p class="copyright">Copyright © %%%YEAR%%% W3C <sup>®</sup> <a href="https://www.w3.org/Consortium/Legal/2002/ipr-notice-20021231">Usage policies apply</a>.</p>
        </footer>
    <body>
</html>
`

async function getTOC(fname: string, url: string): Promise<string> {
    const empty = "<h4>(No agenda)</h4>"
    const cleanup_toc = (nav: string): string => {
        return nav
            // The TOC title should not be a h2
            .replace("<h2>Contents</h2>", "")
            // ??? wbr
            // References should not be relative
            .replace(/href="#/g,`href="./${fname}#`)
            ;
    }

    // Get the file content
    const response = await fetch(url);
    const data = (await response.text()).split('\n');

    // Extract the TOC interval from the text
    const nav_begin_i = data.indexOf("<nav id=toc>");
    if (nav_begin_i === -1) {
        // console.log(">>> no nav");
        return empty;
    } else {
        const nav_begin = data.slice(nav_begin_i);
        const nav_end_i = nav_begin.indexOf("</nav>");
        if (nav_end_i === -1) {
            // console.log(">>> wrong nav");
            return empty;
        } else {
            const nav = nav_begin.slice(0,nav_end_i + 1);
            // console.log(nav);
            return `${cleanup_toc(nav.join("\n"))}`;
        }

    }
}

// deno-lint-ignore no-explicit-any
async function getOneMinute(file: any): Promise<string> {
    let retval = "";
    const humanDate = (new Date(file.name.replace(/.html$/,''))).toDateString();
    retval += `<li><h3><a href="./${file.name}">${humanDate}</a></h3>\n`;
    retval += "<details><summary>Agenda</summary>"
    retval += (await getTOC(file.name, file.download_url));
    retval += "</details>";
    return retval;
}

// deno-lint-ignore-file no-explicit-any no-explicit-any no-explicit-any
async function main(): Promise<void> {
    const response = await fetch('https://api.github.com/repos/w3c/pm-wg/contents/.experiments/minutes');
    // const response = await fetch('https://api.github.com/repos/w3c/pm-wg/contents/minutes');
    const data = await response.json();

    const sorted_data = data.sort((a,b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        else return 0;
    })

    // remove the index file, if it is there:
    const final_data = sorted_data.filter((f: any) => {
        return f.name !== "index.html"
    });

    // Create the 'year boxes'
    const years: { [key: string]: any[] } = {};

    for (const file of final_data) {
        const year = file.name.split('-')[0];
        if (!(year in years)) {
            years[year] = [];
        }
        years[year].push(file);
    }

    let htmlString = '<ul>';
    for (const year of Object.keys(years).reverse()) {
        htmlString += `<li><h2>Minutes in ${year}</h2><ul>`;
        // deno-lint-ignore no-explicit-any
        const minute_promises: Promise<string>[] = years[year].map((f:any) => getOneMinute(f));
        const minutes_status = await Promise.allSettled(minute_promises);
        const rejected: string[] = [];
        for (const m of minutes_status) {
            if (m.status === "fulfilled") {
                htmlString += m.value
            } else {
                rejected.push(m.reason);
            }
        }
        if (rejected.length > 0) {
            console.error(`Some minutes could not be read:\n${rejected}`);
        }
        htmlString += `</ul></li>`
    }
    htmlString += '</ul>';

    const final_content = HTML_content
        .replace("%%%GENERATED_CONTENT%%%",htmlString)
        .replace("%%%YEAR%%%",(new Date()).toISOString().split('-')[0])
        ;
    Deno.writeTextFileSync("index.html", final_content);
}

await main();
