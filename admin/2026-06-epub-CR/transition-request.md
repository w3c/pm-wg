# Document title, URLs, estimated publication date
- EPUB 3.4
    - URL: https://www.w3.org/TR/epub-34/
    - Long URL: https://www.w3.org/TR/2026/CR-epub-34-20260721/
    - Editor's Draft: https://w3c.github.io/epub-specs/epub34/authoring/?specStatus=CR&publishDate=2026-07-21
    - Estimated Publication date: 2026-07-21
- EPUB 3.4 Reading Systems
    - URL: https://www.w3.org/TR/epub-rs-34/
    - Long URL: https://www.w3.org/TR/2026/CR-epub-rs-34-20260721/
    - Editor's Draft: https://w3c.github.io/epub-specs/epub34/rs/?specStatus=CR&publishDate=2026-07-21
    - Estimated Publication date: 2026-07-21
- EPUB Accessibility 1.2
    - URL: https://www.w3.org/TR/epub-a11y-12/
    - Long URL: https://www.w3.org/TR/2026/CR-epub-a11y-12-20260721/
    - Editor's Draft: https://w3c.github.io/epub-specs/epub34/a11y/?specStatus=CR&publishDate=2026-07-21
    - Estimated Publication date: 2026-07-21


# Abstract

- https://www.w3.org/TR/2026/CR-epub-34-20260721/#abstract
- https://www.w3.org/TR/2026/CR-epub-rs-34-20260721/#abstract
- https://www.w3.org/TR/2026/CR-epub-a11y-12-20260721/#abstract

# Status

- https://www.w3.org/TR/2026/CR-epub-34-20260721/#sotd
- https://www.w3.org/TR/2026/CR-epub-rs-34-20260721/#sotd
- https://www.w3.org/TR/2026/CR-epub-a11y-12-20260721/#sotd

# Link to group's decision to request transition

- https://w3c.github.io/pm-wg/minutes/2026-06-25.html#46dd

# Changes

- https://www.w3.org/TR/2026/CR-epub-34-20260721/#change-log
- https://www.w3.org/TR/2026/CR-epub-rs-34-20260721/#change-log
- https://www.w3.org/TR/2026/CR-epub-a11y-12-20260721/#change-log


# Requirements satisfied

The charter [scope](https://www.w3.org/2025/02/pmwg-charter.html#scope) listed, as main in-scope items, the following items relevant to this CR request

- Introduction of a new layout formats for WebToons (under the name of "roll" layout), see [issue 2791 ](https://github.com/w3c/epub-specs/issues/2791) and related PR-s
- A11y improvements, see the [change section of the A11y spec](https://www.w3.org/TR/2026/CR-epub-a11y-12-20260721/#change-log)
- Simplification of fixed layout properties (see issues/pr [2847](https://github.com/w3c/epub-specs/issues/2847), [2841](https://github.com/w3c/epub-specs/issues/2841), [2844](https://github.com/w3c/epub-specs/pull/2844))

Also looking optional features listed in the scope:

- Make explicit that wasm can be used in EPUB (see [issue 2649](https://github.com/w3c/epub-specs/pull/2649))
- Looking at allowing non-XHTML syntax in EPUB: this has been discussed with the community and, finally, decided not to do (see final [discussion and resolution](https://w3c.github.io/pm-wg/minutes/2025-11-11-f2f.html#0d10) at TPAC)
- New media type has been added to the accepted list: [AVIF](https://github.com/w3c/epub-specs/issues/2794) and [JPEG-XL](https://github.com/w3c/epub-specs/issues/2896)
- Discussions on the submission of EPUB to ISO, which has been [resolved positively](https://w3c.github.io/pm-wg/minutes/2026-05-07.html#5d99). The current [agreement](https://w3c.github.io/pm-wg/minutes/2026-04-30.html#5ef9) is that this CR, if accepted and published, will be submitted to ISO as is for an informal review by SC34

# Dependencies met (or not)
There were no major dependencies.

# Wide Review

For horizontal reviews:

- A11y: [link](https://github.com/w3c/a11y-request/issues/164) (originally 2026-03-30, re-opened 2026-05-27) [resolution (2026-06-24)](https://github.com/w3c/a11y-request/issues/164#issuecomment-4788314140)
- I18N: [link](https://github.com/w3c/i18n-request/issues/296) (2026-02-12) [resolution (2026-06-04)](https://github.com/w3c/i18n-request/issues/296#issuecomment-4622953684)
- Privacy: [link](https://github.com/w3cping/privacy-request/issues/209) (2026-04-10)[ resolution (2026-06-15)](https://github.com/w3cping/privacy-request/issues/209#issuecomment-4712364165)
- Security: [link](https://github.com/w3c/security-request/issues/130) (2026-04-10), _declaring timeout_
- TAG: [link](https://github.com/w3ctag/design-reviews/issues/1216) (2026-04-01) [resolution (2026-04-16)](https://github.com/w3ctag/design-reviews/issues/1216#issuecomment-4224209028)

The horizontal reviews lead to a number of resulted minor or editorial updates, see the aforementioned change logs.

# Issues addressed

- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-EPUB3
- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-ReadingSystems
- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-Accessibility

There are a number of open issues, mostly around multiple rendition and media overlays, that are considered as being beyond the current charter; that will be the topic of a new charter, currently under discussion.

# Formal Objections

None.

# Implementation
[TODO: any preliminary implementation information? exit criteria? minimum CR duration?]

The exit criteria of the Working Group are described in:

- https://w3c.github.io/epub-specs/epub34/reports/exit_criteria.html

with links to the report documents that will, eventually, contain the results of testing. There are a number of [tests](https://w3c.github.io/epub-tests/index.html) available (most of them inherited from EPUB 3.3, but new ones have been added for EPUB 3.4 features), new are being added.

There are numerous EPUB 3 Reading System implementations on the market, some major ones are also represented on the Working Group (Google, Apple, Kobo, EDRLab, Colibrio, Kadokawa, Voyager, etc.). Many have already contributed tests results for EPUB 3.3 (which are, technically, valid though incomplete test results for EPUB 3.4). We expect most of these will contribute to the test results to include results on the new features.

There is a strong cooperation between the Working Group and the developers of [epubcheck](https://www.w3.org/publishing/epubcheck/), that already has a beta version of an EPUB 3.4 checker. This is particularly important, because epubcheck is used by virtually all publishers before releasing a new publication.

The minimal CR period goes until 2026-10-19.

# Patent disclosures

https://www.w3.org/groups/wg/epub/ipr


# Additional note on CR exit

The [Working Group's charter](https://www.w3.org/2020/12/epub3-wg-charter.html) has a very strong clause on backward compatibility:

> It is a primary goal of the new EPUB version to remain backward compatible with EPUB 3.3 (i.e., existing conformant EPUB 3.3 would remain conformant EPUB 3.4 documents).

What this means that the usual CR approach, whereby if a feature does not get the right number of implementation per the exit criteria must be removed from the specification, cannot be applied in this case, except for features that did not exist prior to EPUB 3.3 (e.g., roll layout). Instead, the specification includes a separate section  on [obsolete features](https://www.w3.org/TR/epub-34/#app-obsolete).

---

Cc @sueneu @mattgarrish @shiestyle @reidmore-online
