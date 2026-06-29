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

The horizontal reviews led to a number of minor or editorial updates, see the aforementioned change logs.

# Issues addressed

- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-EPUB3
- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-ReadingSystems
- https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20label%3ASpec-Accessibility

Several technical issues remain unresolved, primarily concerning multiple renditions and media overlays. These are beyond the current charter and will be the topic of a new charter, which is currently under discussion.

# Formal Objections

None.

# Implementation
[TODO: any preliminary implementation information? exit criteria? minimum CR duration?]

The exit criteria of the Working Group are described in:

- https://w3c.github.io/epub-specs/epub34/reports/exit_criteria.html

with links to the results of testing. There are a number of [tests](https://w3c.github.io/epub-tests/index.html) available. Most of them inherited from EPUB 3.3, and new ones have been added for EPUB 3.4 features.

There are multiple current EPUB 3 reading system implementations. Developers represented within the Working Group include Apple, Colibrio, EDRLab, Google, Kadokawa, Kobo, and Voyager. Several of these organizations have contributed test results for EPUB 3.3. These existing results remain valid. However, additional testing is required to verify implementation of EPUB 3.4 features. The Working Group aims to secure testing contributions for these new features from all participating reading systems.

There is a strong cooperation between the Working Group and the developers of [epubcheck](https://www.w3.org/publishing/epubcheck/). There is already a beta version of an EPUB 3.4 checker. This is particularly important, because epubcheck is used by virtually all publishers before releasing a new publication.

The minimal CR period goes until 2026-10-19.

# Patent disclosures

https://www.w3.org/groups/wg/epub/ipr


# Additional note on CR exit

The [Working Group's charter](https://www.w3.org/2020/12/epub3-wg-charter.html) has a very strong clause on backward compatibility:

> It is a primary goal of the new EPUB version to remain backward compatible with EPUB 3.3 (i.e., existing conformant EPUB 3.3 would remain conformant EPUB 3.4 documents).

Consequently, the standard Candidate Recommendation (CR) process—which requires the removal of features that fail to meet the minimum implementation criteria—cannot be applied to legacy features. This exception does not apply to features introduced after EPUB 3.3 (for example, the roll layout type). To preserve backward compatibility, legacy features that lack the required number of implementations are retained and listed in a dedicated annex on [obsolete features](https://www.w3.org/TR/epub-34/#app-obsolete). 

---

Cc @sueneu @mattgarrish @shiestyle @reidmore-online
