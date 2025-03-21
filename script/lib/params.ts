/** Location of the minutes, relative to the location of the script itself */
export const directory = "../minutes";

/** 
 * The title of the minutes files, depending on the file name. The convention
 * is to have the file name ending with a dash and the identifier of the meeting.
 * The values are the strings to generate the reference to the meeting (the "Meeting" word
 * is added automatically).
 */
export const filenameToTitle: { [key: string]: string; } = {
    "default" : "Regular Working Group",
    "a11y"    : "Accessibility Task Force",
    "ann"     : "EPUB Annotations Task Force",
    "dc"      : "Digital Comics Task Force",
    "f2f"     : "Face-to-Face",
};

