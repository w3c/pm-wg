# Document title, URLs, estimated publication date

- EPUB 3.3
- Canonical URL: https://www.w3.org/TR/epub-33/
- Version with proposed changes: https://www.w3.org/TR/2025/REC-epub-33-20250107/
- Editor's draft: https://www.w3.org/TR/epub-33/
- Estimated Publication date: 2025-03-27

# Abstract

EPUB® 3 defines a distribution and interchange format for digital publications and documents. The EPUB format provides a means of representing, packaging, and encoding structured and semantically enhanced web content — including HTML, CSS, SVG, and other resources — for distribution in a single-file container.

This specification defines the authoring requirements for EPUB publications and represents the third major revision of the standard.

# Status

See https://www.w3.org/TR/epub-33/#sotd

# Link to group's decision to request the update

See https://w3c.github.io/pm-wg/minutes/2024-10-04.html#2984

(Note: the resolution goes for three documents, but only one, ie EPUB 3.3, had changes that required the official update process.)

# Link to Last Call for Review of Proposed Amendments

See https://www.w3.org/2002/09/wbs/33280/epub-amendments/

# Wide Review of Proposed Amendments

- Privacy review request: https://github.com/w3cping/privacy-request/issues/144
- I18N review request: https://github.com/w3c/i18n-request/issues/242
- A11y review request: https://github.com/w3c/a11y-request/issues/92
- Security review request: https://github.com/w3c/security-request/issues/76
- TAG review request: https://github.com/w3ctag/design-reviews/issues/1006

# Issues addressed

The EPUB 3 Core issues' list: 

 https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20state%3Aopen%20label%3ASpec-EPUB3%20-label%3AStatus-Deferred%20-label%3AEditorial%20 
 
are all referring to issues that may become the subject of discussion for the upcoming EPUB 3.4 (under the new, current charter). None are relevant for the proposed corrections.

To make the transition request review easier, the proposed corrections are at:

- https://w3c.github.io/epub-specs/epub33/core/#sec-xhtml-svg
- https://w3c.github.io/epub-specs/epub33/core/#sec-svg-req
- https://w3c.github.io/epub-specs/epub33/core/#sec-svg-restrictions
- https://w3c.github.io/epub-specs/epub33/core/#app-viewport-meta-syntax

None of these changes are [category 1 features](https://w3c.github.io/epub-specs/epub33/reports/exit_criteria.html#epub-3.3-core); instead, they are [category 2 features](https://w3c.github.io/epub-specs/epub33/reports/exit_criteria.html#epub-3.3-core) with clarifications of normative texts. These clarifications primarily resolve issues that were reported in the process of authoring conforming EPUB publications.

# Link to internal AC Review results

https://www.w3.org/2002/09/wbs/33280/epub-amendments/results

TL;DR: 21 approval without comments, 4 abstentions. Most of the major stakeholder members (publishers, EPUB Reading system developers) have voted (positively).

# Formal Objections

None.

# Implementation

All changes are [category 2 features](https://w3c.github.io/epub-specs/epub33/reports/exit_criteria.html#epub-3.3-core). The [exit criteria for those features](https://w3c.github.io/epub-specs/epub33/reports/exit_criteria.html#exit-criteria-core) is based on the [EPUBCheck validator](https://www.w3.org/publishing/epubcheck/) which has been updated to ensure conformance with the new recommendations. (See the [EPUBCheck releases](https://github.com/w3c/epubcheck/releases).)

(It is worth emphasizing the importance of EPUBCheck in this industry: virtually all EPUB Distributer require the submitted EPUB publications to fully pass EPUBCheck. Hence the central role of EPUBCheck in the implementation strategy of EPUB.)

# Patent disclosures

https://www.w3.org/groups/wg/pm/ipr/

