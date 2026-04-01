# 3P Kemeny Homepage Redesign Design

## Context

This project is an Astro-based draft replacement for the current live `3p-kemeny.hu` Carrd site. The existing repo already contains:

- a single-page trilingual marketing site
- localized content in `src/data/site.ts`
- scraped source content and imagery in `scraped/`
- a newer `scraped/img-better/` asset set, including improved gallery images, an owner portrait, and a logo

The redesign should stay within the current site scope: a focused marketing website for a one-person chimney specialist business led by Róbert Papp.

## Design Goals

1. Present the business as a premium specialist practice, not a generic local trades page.
2. Make industrial and commercial track record visible enough to build trust without pretending the business is a larger contractor.
3. Keep the business visibly personal and owner-led.
4. Use the improved photography and green logo as primary visual assets.
5. Preserve a single-page structure that still supports SEO, localized content, and fast contact conversion.

## Non-Goals

- No expansion into a large multi-page brochure site.
- No direct contact form.
- No attempt to brand the business as a multi-person company.
- No dark-first visual system that conflicts with the green logo.
- No exhaustive image dump or uncurated gallery.

## Product Positioning

The site should frame 3P Kémény as:

- a premium craftsman-led chimney specialist
- personally accountable and directly reachable
- backed by unusually strong Hungary/Germany/Austria-adjacent project credibility

The trust model is not scale. The trust model is expertise, specificity, curated proof, and direct contact with the person doing the work.

## Primary Audiences

### Primary

- industrial and commercial prospects who need to see serious capability quickly
- local Hungarian homeowners evaluating trust and workmanship

### Secondary

- German-speaking prospects in Austria/Germany who need language comfort and proof of relevant experience
- English-speaking visitors who may still need a complete but less business-critical path

## Language Strategy

- Hungarian and German should be treated as the strongest business languages.
- English can remain complete, but it does not need equal strategic weight in visual emphasis or messaging priority.
- Localization should not be literal line-by-line duplication if stronger idiomatic phrasing exists in German or English.

## Recommended Design Direction

The approved direction is:

- premium craftsman first
- industrial proof second
- light mineral base palette
- green-led branding from the provided logo
- cooler slate support tones in proof-heavy sections

The desired feel is refined, credible, and personal. It should not read as rustic, generic luxury branding, or a hard industrial contractor site.

## Visual System

### Palette

- base: light mineral, off-white, stone, and warm neutral surfaces
- primary accent: logo green
- support accent: slate/steel tones for reference-heavy or technical sections

### Overall Style

- lighter backgrounds as the default
- clear visual hierarchy and generous whitespace
- premium editorial presentation rather than dense trade-directory styling
- photography used as proof, not as decoration

### Brand Fit

The existing darker amber-heavy draft should not define the redesign. The green logo is strong enough that the visual system should be rebuilt around it rather than forcing it into dark surfaces where it performs poorly.

## Page Architecture

The site should remain a single long homepage with anchored sections.

### Section Order

1. Hero
2. Owner / Trust section
3. Services
4. References
5. Gallery
6. Contact

### SEO Implication

This single-page structure is acceptable as long as the implementation delivers:

- strong heading hierarchy
- localized metadata
- clear section semantics
- fast performance
- strong location/service signals

## Section Requirements

### Hero

Purpose:
Establish premium specialist positioning immediately and drive direct contact.

Requirements:

- strong finished-work image
- concise headline
- short supporting paragraph
- phone CTA as the primary action
- email visible or near-immediately reachable as a secondary contact path
- industrial-grade credibility signaled early, but without leading with a corporate tone

### Owner / Trust Section

Purpose:
Turn the one-person-business reality into a strength.

Requirements:

- use the provided portrait of Róbert Papp
- introduce the owner by name
- explain the experience arc clearly
- include a small number of credibility anchors such as years of experience, German project background, and service area
- keep this section early, but not above the hero

### Services

Purpose:
Show capability breadth without looking like keyword stuffing.

Requirements:

- regroup the current long service list into a cleaner structure
- prioritize readability over exhaustiveness
- retain factual service scope from the current site
- give premium/proof-heavy services stronger framing than low-signal utility items

### References

Purpose:
Provide hard evidence of experience.

Requirements:

- highlight recognizable references in a cleaner format
- maintain the split between Hungarian and German-market work
- favor legibility and curation over dumping long raw lists
- support the message that the operator has handled serious work, without claiming enterprise scale today

### Gallery

Purpose:
Use photography as selected proof of workmanship and finish quality.

Requirements:

- use the improved `scraped/img-better/` assets as the main source pool
- include the stronger `work#.jpg` assets in the gallery set if they fit
- curate and sequence images intentionally
- prefer fewer stronger images over showing everything available
- design the gallery so new images can be added later without redesigning the page

### Contact

Purpose:
Convert interested visitors quickly.

Requirements:

- phone first
- email second
- no contact form
- restate service geography
- make Hungarian and German communication comfort clear

## Editorial Strategy

- Treat the scraped Carrd copy as source material, not final copy.
- Rewrite the hero and section intros substantially.
- Keep factual claims grounded and specific.
- Improve readability of the owner story.
- Clean up and normalize service labels and reference names where needed.
- Avoid vague luxury phrasing, generic AI-sounding polish, and inflated company language.

## Content and Data Implications

The current content model in `src/data/site.ts` is already centralized, which is good for planning. The redesign will likely require:

- new hero copy and possibly different hero data fields
- revised owner/trust content structure
- regrouped services data
- curated reference selections plus optional expanded lists
- curated gallery image list sourced from the better assets
- explicit email address content alongside phone details

This remains consistent with a content-driven Astro implementation and does not require moving away from the current centralized localization approach.

## Media Strategy

- prefer the `scraped/img-better/` set over the current public gallery assets
- treat the owner portrait as a core trust asset
- use images in support of credibility, not as filler backgrounds
- plan for some images to move into hero/supporting editorial layouts and others into the gallery

## UX Principles

- directness over friction
- specificity over generic trust badges
- curation over volume
- premium readability over crowded density
- visible human accountability over anonymous company voice

## Accessibility, Performance, and Quality Requirements

- preserve clear semantic heading structure
- ensure language switching remains understandable and consistent
- maintain strong text contrast even with the lighter palette
- keep image usage performance-conscious
- ensure the single-page experience works well on mobile and desktop

## Risks To Avoid

- making the site feel like a large industrial contractor brand
- leaning so personal that the industrial proof becomes secondary
- keeping too much of the scraped wording and structure
- overusing mediocre images just because they exist
- building around the old dark aesthetic instead of the green logo

## Planning Constraints

The implementation plan should assume:

- Astro remains the framework
- the site remains a single-page brochure experience
- multilingual support stays in place
- the redesign is primarily structural, editorial, and visual rather than feature-heavy
- no form backend or major application behavior is required

## Open Decisions Left For Planning

These are implementation choices, not unresolved product questions:

- final section-level component breakdown
- exact translation and copywriting pass order
- final curated image shortlist and placement
- exact navigation treatment and language-switcher emphasis
- exact SEO metadata refinements per locale

## Outcome

The redesign should result in a single-page site that feels materially more premium, more intentional, and more credible than the current draft while staying honest about the business model: one experienced specialist, direct contact, strong references, and high-trust workmanship.
