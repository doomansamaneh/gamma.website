# Website Implementation Instructions

You are the implementation agent for the corporate website of **دومان سامانه**.

The repository contains Version 1 of the website. Your job is to improve and evolve the existing implementation incrementally.

**Do not rewrite the project blindly.**

---

## 1. Read the Documentation First

Before modifying anything, read these files in this exact order:

1. `AGENTS.md`
2. `docs/architecture.md`
3. `docs/brand.md`
4. `docs/design-system.md`
5. `docs/localization.md`
6. `docs/content-model.md`
7. `docs/navigation.md`
8. `docs/assets.md`
9. `docs/seo.md`
10. `docs/roadmap.md`

These documents are the source of truth.

Do not begin implementation until you have read them.

If a relevant file exists under `tasks/`, read that task as well.

---

## 2. Audit Version 1 Before Making Changes

Before changing code, inspect the existing project.

Identify:

* Astro architecture
* project structure
* routes
* pages
* layouts
* components
* content
* content collections
* images
* logos
* icons
* fonts
* existing design tokens
* existing CSS
* navigation
* SEO metadata
* existing JavaScript
* external dependencies
* reusable components
* existing URLs
* valuable existing content
* existing functionality that already works

Determine what should be:

* Keep
* Improve
* Move
* Merge
* Remove
* Create

Do not replace working code without a reason.

Do not perform a full rewrite simply because another implementation would be cleaner.

---

## 3. Company Architecture

The website represents:

**دومان سامانه**

The company is the root entity.

The website is NOT a GammaDesk-only website.

The current product portfolio is:

```text
دومان سامانه
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

GammaDesk is currently the primary product and may receive stronger visibility.

However, GammaDesk must never become the architectural root.

The architecture must allow additional products to be added later without changing the global information architecture.

---

## 4. Products

Treat every product as a first-class entity.

### GammaDesk

Enterprise IT service management / ITSM platform.

### ZED EAM

Enterprise Asset Management platform.

### Landa

Cloud accounting software for small and medium-sized businesses.

### Gamma.Kernel

Open-source software framework/library and engineering project.

Do not invent product capabilities, features, customers, statistics, certifications or claims.

Use authoritative existing content whenever available.

---

## 5. Navigation

Primary navigation:

* Products
* Resources
* Company
* Contact Us
* Request Demo

There must NOT be a top-level `Features` navigation item.

Features belong to products.

Example:

```text
Products
└── GammaDesk
    └── Features
        └── Incident Management
```

Products:

```text
Products
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

Resources:

```text
Resources
├── Articles
├── Videos
├── ITIL Guide
└── FAQ
```

Company:

```text
Company
├── About Us
├── Customers
├── History
├── Mission & Vision
├── Areas of Activity
├── Why Us
└── Certifications
```

---

## 6. URL Structure

Use these URLs where practical.

### Products

```text
/products
/products/gammadesk
/products/gammadesk/features
/products/gammadesk/features/[slug]

/products/zed-eam
/products/zed-eam/features

/products/landa
/products/landa/features

/products/gamma-kernel
```

### Resources

```text
/resources/articles
/resources/articles/[slug]

/resources/videos
/resources/videos/[slug]

/resources/itil
/resources/itil/[slug]

/resources/faq
```

### Company

```text
/company/about
/company/customers
/company/history
/company/mission
/company/areas
/company/why-us
/company/certifications
```

### Contact

```text
/contact
```

Preserve existing URLs whenever practical.

If a URL must change:

1. Identify the old URL.
2. Identify the new URL.
3. Implement an appropriate redirect.
4. Avoid redirect chains.
5. Do not redirect unrelated pages to the homepage.

Do not introduce unnecessary URL complexity.

---

## 7. Content Architecture

Products are first-class entities.

Features belong to products.

Articles, videos and FAQs may be associated with:

* company
* product
* feature

Avoid content duplication.

Prefer structured relationships.

A feature may reference:

* related features
* articles
* videos
* ITIL content
* FAQs
* screenshots
* demo CTA

Content should be separated from presentation whenever practical.

---

## 8. Brand

The company name is:

**دومان سامانه**

The brand is based primarily on:

* Orange
* Black
* White and neutral supporting colors

Use centralized design tokens.

Do not hardcode brand colors throughout components.

Do not assume an exact orange hex value unless it is explicitly defined in the project documentation or official assets.

Official logos and assets are authoritative.

Never:

* redraw official logos
* distort logos
* invent logos
* invent customer logos
* invent certifications
* invent product screenshots
* invent company statistics
* invent business claims

---

## 9. Typography

The primary Persian font is:

**Vazirmatn**

Use the local font assets when available.

Current language:

```text
fa-IR
```

Current direction:

```text
RTL
```

Use:

```html
<html lang="fa-IR" dir="rtl">
```

Use CSS logical properties where possible:

* `margin-inline`
* `padding-inline`
* `inset-inline`
* `border-inline`

Keep the implementation ready for future English/LTR content.

In Persian website content, always use:

**کسب و کار**

not:

**کسب‌وکار**

---

## 10. Visual Design

Follow:

`docs/design-system.md`

The website should communicate:

* Professional
* Enterprise
* Technical
* Reliable
* Modern
* Secure
* Mature
* Trustworthy

Avoid:

* generic SaaS templates
* excessive gradients
* neon colors
* excessive glassmorphism
* excessive shadows
* excessive rounded cards
* decorative animations
* visual clutter
* gaming-style orange/black design

Do not make every section a collection of cards.

Use:

* typography
* whitespace
* hierarchy
* alignment
* spacing
* restrained color
* authentic product imagery

as primary design tools.

If an existing design pattern works, reuse it.

---

## 11. Company and Product Branding

The company has one coherent visual identity.

Products may have their own accent colors or visual characteristics.

GammaDesk may receive stronger visual emphasis.

However:

**Do not make the entire website visually dependent on GammaDesk.**

The architecture must support:

```text
Company Brand
    ↓
Product Identity
    ↓
Feature Identity
```

while maintaining overall consistency.

---

## 12. Assets

Before creating any asset:

1. Inspect existing assets.
2. Check official company assets.
3. Check official product assets.
4. Reuse existing assets where appropriate.
5. Create new assets only when necessary.

Prefer:

* real product screenshots
* official logos
* authentic company imagery
* meaningful diagrams

Do not create fake:

* product interfaces
* customers
* certifications
* awards
* employees
* statistics

Follow `docs/assets.md`.

---

## 13. Components

Create reusable components when meaningful repetition exists.

Examples:

* Header
* Navigation
* Footer
* Button
* Hero
* Section
* Card
* ProductCard
* FeatureCard
* ArticleCard
* CTA
* Breadcrumb
* FAQ
* VideoCard
* ScreenshotGallery
* Form controls

Do not create abstractions for trivial one-off markup.

Prefer simple and maintainable components.

---

## 14. Astro and JavaScript

Astro static generation is the default.

Prefer:

```text
HTML + CSS
```

over JavaScript whenever possible.

Before adding JavaScript, ask:

> Can this be implemented with HTML and CSS?

If yes, use HTML/CSS.

Use JavaScript only when there is a genuine interaction requirement.

Use Astro Islands only when client-side interaction is actually required.

Do not turn the website into an SPA.

Avoid unnecessary:

* state management
* client-side rendering
* hydration
* dependencies
* third-party scripts

---

## 15. Homepage

The homepage represents the company first.

It should communicate:

1. Who دومان سامانه is
2. What the company builds
3. The product portfolio
4. GammaDesk
5. ZED EAM
6. Landa
7. Gamma.Kernel
8. Why customers should trust the company
9. Relevant resources
10. A clear call to action

GammaDesk should receive strong visibility because it is currently the primary product.

However:

**Do not turn the homepage into a giant list of GammaDesk features.**

The company and product portfolio come first.

---

## 16. GammaDesk

GammaDesk has its own product area.

At minimum:

```text
/products/gammadesk
/products/gammadesk/features
/products/gammadesk/features/[slug]
```

The GammaDesk product page should communicate, where authoritative content exists:

* what GammaDesk is
* who it is for
* business value
* major capabilities
* screenshots
* related resources
* demo CTA

Feature pages should contain substantive content.

Where appropriate, feature pages should link to:

* related features
* articles
* videos
* ITIL content
* FAQs
* demo request

Do not create thin pages merely for SEO.

---

## 17. Other Products

ZED EAM, Landa and Gamma.Kernel are first-class products.

They do not need identical content depth.

If authoritative content is not available, do not invent it.

Build the architecture so each product can later receive:

* overview
* features
* screenshots
* resources
* FAQs
* documentation
* SEO metadata
* CTA

without changing the global architecture.

---

## 18. Resources

Resources include:

* Articles
* Videos
* ITIL Guide
* FAQ

ITIL is educational content.

Do NOT model ITIL as a GammaDesk feature.

ITIL content may reference GammaDesk where relevant.

Resources should support internal linking between:

* products
* features
* articles
* videos
* ITIL topics
* FAQs

Avoid duplicate content.

---

## 19. Company Pages

Company pages include:

* About Us
* Customers
* History
* Mission & Vision
* Areas of Activity
* Why Us
* Certifications

These are company-level entities.

Do not incorrectly attach company information to GammaDesk.

Use only authentic information.

Never invent:

* customers
* dates
* certifications
* awards
* employee counts
* revenue
* market share
* statistics

---

## 20. SEO

Follow:

`docs/seo.md`

Every indexable page should have appropriate:

* title
* meta description
* canonical URL
* heading hierarchy
* Open Graph metadata
* structured data where genuinely applicable
* semantic HTML

Use descriptive URLs.

Use meaningful internal linking.

Avoid:

* keyword stuffing
* duplicate metadata
* duplicate pages
* fake structured data
* invented ratings
* invented reviews
* invented prices
* invented claims

Each product is an independent SEO entity.

Feature pages should be indexable only when they provide meaningful content.

---

## 21. Accessibility

Accessibility is part of implementation.

Ensure:

* semantic HTML
* correct heading hierarchy
* keyboard navigation
* visible focus states
* accessible forms
* meaningful alt text
* sufficient contrast
* correct link/button semantics
* accessible navigation
* reduced-motion support

Do not rely on visual appearance alone to communicate information.

---

## 22. Performance

Optimize for:

* minimal JavaScript
* optimized images
* modern image formats
* local fonts
* minimal external dependencies
* fast loading
* Core Web Vitals

Do not introduce external services unless clearly required.

Do not add a library when HTML, CSS or Astro already provides the required functionality.

---

## 23. Existing Content

Evaluate existing content before removing it.

Classify content as:

* Keep
* Improve
* Move
* Merge
* Remove
* Create

Do not delete valuable content simply because the information architecture changes.

Preserve useful information while improving:

* structure
* hierarchy
* readability
* navigation
* SEO
* presentation

---

## 24. Minimal-Scope Rule

This is a critical rule.

**Default behavior is minimal-scope modification.**

If a task concerns one page, component or feature, do not modify unrelated files.

Modify files outside the obvious scope only when:

1. The task explicitly requires it, or
2. The root cause proves the additional change is necessary.

Do not:

* refactor unrelated code
* redesign unrelated pages
* rename unrelated components
* modify unrelated content
* change unrelated design tokens
* introduce unrelated architecture
* replace working implementations without reason

For a narrow task, execute only that task.

---

## 25. Implementation Order

Follow this order unless dependencies require otherwise.

### Phase 1 — Audit

Understand Version 1.

### Phase 2 — Foundation

Establish or refine:

* layouts
* design tokens
* typography
* Vazirmatn
* global styles
* RTL foundation
* reusable primitives
* Header
* Footer
* responsive navigation

### Phase 3 — Information Architecture

Implement:

* navigation
* routes
* content structure
* product structure
* resource structure
* company structure

### Phase 4 — Homepage

Build the company-oriented homepage.

Show all four products.

Give GammaDesk stronger visibility without making it the root entity.

### Phase 5 — Products

Implement:

* GammaDesk
* ZED EAM
* Landa
* Gamma.Kernel

Build GammaDesk more deeply first where authoritative content exists.

### Phase 6 — GammaDesk Features

Implement:

* feature index
* feature pages
* screenshots
* related resources
* cross-linking
* demo CTA

### Phase 7 — Resources

Implement:

* Articles
* Videos
* ITIL
* FAQ

### Phase 8 — Company

Implement:

* About
* Customers
* History
* Mission & Vision
* Areas of Activity
* Why Us
* Certifications

### Phase 9 — Contact

Implement:

* Contact
* Request Demo flow

Keep the implementation simple and accessible.

### Phase 10 — SEO

Implement and validate `docs/seo.md`.

### Phase 11 — Quality

Review:

* SEO
* accessibility
* performance
* responsive behavior
* RTL
* broken links
* duplicate content
* missing metadata
* console errors
* unnecessary JavaScript
* image optimization

---

## 26. Decision Rules

When making implementation decisions:

1. Follow the documentation.
2. Preserve valuable existing content.
3. Prefer simple solutions.
4. Prefer static HTML.
5. Prefer reusable patterns.
6. Avoid unnecessary dependencies.
7. Avoid unnecessary JavaScript.
8. Avoid over-engineering.
9. Reuse existing visual patterns.
10. Keep the architecture ready for future products.
11. Prefer semantic HTML.
12. Prefer accessibility by default.
13. Prefer performance by default.
14. Prefer authentic assets.
15. Never invent business facts.

If two approaches are possible, prefer the one that is:

* simpler
* more maintainable
* more accessible
* more performant
* easier to extend

---

## 27. Hard Constraints

Do NOT:

* turn the project into an SPA
* introduce a backend unless required
* introduce unnecessary CMS infrastructure
* introduce unnecessary state management
* add JavaScript for purely visual behavior
* redesign everything without auditing first
* remove content without evaluating it
* make GammaDesk the architectural root
* create a top-level Features navigation item
* invent business claims
* invent customers
* invent certifications
* invent statistics
* invent product screenshots
* replace official logos
* introduce unnecessary dependencies
* duplicate content merely to populate pages

---

## 28. Execution Behavior

Do not ask for permission for every small implementation decision.

Make reasonable engineering decisions yourself.

Ask for clarification only when a decision materially affects:

* business meaning
* company/product positioning
* information architecture
* SEO strategy
* irreversible content structure
* user-facing functionality

Otherwise proceed.

When the correct implementation is clear from the documentation, implement it directly.

---

## 29. Phase-Based Execution

Work incrementally.

After completing a meaningful phase:

1. Validate the implementation.
2. Run the appropriate build/checks.
3. Review changed files.
4. Report what was completed.
5. Report remaining work.
6. Do not silently expand the scope.

Do not implement the entire roadmap as one uncontrolled rewrite.

The goal is controlled evolution of Version 1.

---

## 30. Validation

Before considering a phase complete:

* Run the production build.
* Fix build errors.
* Check affected routes.
* Check internal links.
* Check responsive layouts.
* Check RTL behavior.
* Check accessibility basics.
* Check SEO metadata.
* Check image paths.
* Check image optimization.
* Check console errors.
* Check unnecessary JavaScript.
* Check that unrelated functionality was not broken.

Before final completion, additionally verify:

* all important routes
* navigation
* breadcrumbs
* canonical URLs
* sitemap
* robots.txt
* structured data
* broken links
* duplicate metadata
* missing alt text
* mobile navigation
* keyboard navigation
* reduced motion
* future product extensibility

Never claim a validation was performed unless it was actually performed.

---

## 31. Final Report

After implementation, report:

### Changed

What was changed.

### Created

New pages, routes, components, content structures and assets.

### Migrated

What was moved or reorganized.

### Removed

What was removed and why.

### Preserved

Important existing content and functionality that was retained.

### Technical Notes

Important architectural and implementation decisions.

### Validation

Build and quality checks that were actually performed.

### Remaining Work

Anything intentionally left for the next phase.

---

# Core Principle

**Build a company website that currently presents GammaDesk.**

**Do NOT build a GammaDesk website that happens to contain a company section.**

The company is:

**دومان سامانه**

The current product portfolio is:

**GammaDesk · ZED EAM · Landa · Gamma.Kernel**

Build the architecture so the company can grow without rebuilding the website.
