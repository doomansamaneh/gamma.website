# Website Roadmap

## 1. Roadmap Objective

Transform the current Astro Version 1 implementation into a production-ready corporate website for **دومان سامانه**.

The website must represent the company as a multi-product software company:

```text
دومان سامانه
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

The roadmap is incremental.

The agent must improve the existing implementation rather than unnecessarily rebuilding the project from scratch.

---

# Phase 0 — Audit Existing Version

Before making major changes, inspect the current Version 1 implementation.

Review:

* project structure
* Astro configuration
* TypeScript configuration
* existing pages
* components
* layouts
* CSS
* assets
* fonts
* navigation
* responsive behavior
* SEO metadata
* existing content
* existing URLs

Identify:

* what should be kept
* what should be improved
* what should be moved
* what should be merged
* what should be removed
* what needs to be created

Do not rewrite working code simply because a different implementation is possible.

The first objective is to understand the existing implementation.

---

# Phase 1 — Foundation

Establish the technical foundation of the website.

Tasks:

* Configure Astro
* Configure TypeScript
* Establish project structure
* Establish centralized design tokens
* Establish global CSS
* Configure RTL/Persian defaults
* Configure Vazirmatn
* Create base layout
* Create Header
* Create Footer
* Create responsive navigation
* Establish reusable UI components
* Establish asset conventions
* Establish content conventions

The foundation must follow:

* `architecture.md`
* `brand.md`
* `assets.md`
* `design-system.md`
* `localization.md`

---

# Phase 2 — Information Architecture

Implement the company-first information architecture.

Primary navigation:

```text
Products
Resources
Company
Contact
Request Demo
```

Products:

```text
GammaDesk
ZED EAM
Landa
Gamma.Kernel
```

GammaDesk:

```text
Overview
Features
Screenshots
Resources
Request Demo
```

Resources:

```text
Articles
Videos
ITIL Guide
FAQ
```

Company:

```text
About Us
Customers
History
Mission & Vision
Areas of Activity
Why Us
Certifications
```

There must not be a generic top-level "Features" section.

Features belong to their respective products.

---

# Phase 3 — Corporate Homepage

Build the homepage as a **Doman Samaneh corporate homepage**, not a GammaDesk-only homepage.

The homepage should communicate:

1. Who is Doman Samaneh?
2. What does the company build?
3. What products are available?
4. Why should the visitor trust the company?
5. What resources are available?
6. What should the visitor do next?

The homepage should prominently present the product portfolio:

```text
GammaDesk
ZED EAM
Landa
Gamma.Kernel
```

GammaDesk may receive greater visual emphasis if appropriate, but the homepage must clearly establish Doman Samaneh as the parent company.

Use authentic company/product assets.

Do not invent product capabilities.

---

# Phase 4 — Product Architecture

Create reusable product architecture.

Every product is a first-class entity.

Required products:

### GammaDesk

Enterprise IT service management / help desk platform.

### ZED EAM

Enterprise Asset Management platform.

### Landa

Cloud accounting platform for small and medium-sized businesses.

### Gamma.Kernel

Open-source software framework/library.

Each product should have:

* product identity
* logo
* description
* hero
* benefits
* capabilities
* screenshots
* related resources
* CTA
* SEO metadata

Do not force identical content or layout where the products have different purposes.

Reuse components, not content.

---

# Phase 5 — Product Feature Architecture

Features must belong to products.

Example:

```text
GammaDesk
└── Features
    ├── Incident Management
    ├── Problem Management
    └── ...
```

Feature pages should be independently addressable where useful.

Example:

```text
/products/gammadesk/features/incident-management
```

Feature pages should support:

* feature description
* business value
* capabilities
* screenshots
* related features
* related articles
* related videos
* ITIL resources where applicable
* FAQ where applicable
* Request Demo CTA

Avoid thin pages created solely for SEO.

---

# Phase 6 — Resources

Implement the resource architecture.

## Articles

```text
/resources/articles
/resources/articles/[slug]
```

## Videos

```text
/resources/videos
/resources/videos/[slug]
```

## ITIL Guide

```text
/resources/itil
/resources/itil/[slug]
```

## FAQ

```text
/resources/faq
```

Resources should be reusable across products where appropriate.

For example:

```text
ITIL Article
    ↓
ITIL Guide
    ↓
GammaDesk Feature
```

Do not duplicate the same content across multiple sections.

---

# Phase 7 — Company Pages

Implement company-level pages:

```text
/company/about
/company/customers
/company/history
/company/mission
/company/areas
/company/why-us
/company/certifications
```

These pages must represent **دومان سامانه**, not GammaDesk.

Use authentic company information and approved assets.

Do not invent:

* customers
* certifications
* company history
* statistics
* partnerships
* awards

---

# Phase 8 — Contact and Conversion

Implement:

```text
/contact
```

and a prominent:

```text
Request Demo
```

CTA.

The conversion experience should be simple and professional.

Avoid unnecessary form fields.

Product-specific demo requests should identify the relevant product when appropriate.

The CTA should work consistently across:

* homepage
* product pages
* feature pages
* relevant articles
* company pages

---

# Phase 9 — SEO

Implement the SEO strategy defined in `seo.md`.

Tasks:

* unique page titles
* unique meta descriptions
* canonical URLs
* Open Graph metadata
* Twitter/X metadata where appropriate
* semantic HTML
* heading hierarchy
* sitemap
* robots.txt
* Schema.org structured data
* BreadcrumbList
* appropriate product/application schema
* Article schema where applicable
* FAQPage only where genuinely applicable
* search-engine crawlability
* existing URL preservation
* 301 redirects where required

SEO must be implemented as part of the architecture rather than added as an afterthought.

---

# Phase 10 — SEO Migration

Because this website replaces an existing website, identify important existing URLs before removing or changing them.

Tasks:

* inventory existing public URLs
* identify valuable indexed pages
* map old URLs to new URLs
* preserve URLs where practical
* create 301 redirects where necessary
* avoid redirect chains
* avoid redirecting unrelated pages to the homepage
* verify important redirects

The migration must minimize unnecessary loss of existing search visibility.

---

# Phase 11 — Performance

Optimize the production website.

Tasks:

* optimize images
* use modern image formats
* optimize font loading
* use local Vazirmatn files
* minimize JavaScript
* minimize third-party dependencies
* lazy-load appropriate images
* prioritize critical content
* prevent layout shift
* optimize CSS
* review Astro Islands
* remove unnecessary client-side hydration

The website should remain primarily static and server-rendered/generated.

Do not introduce JavaScript without a clear user-facing reason.

---

# Phase 12 — Accessibility

Validate:

* keyboard navigation
* semantic HTML
* heading hierarchy
* accessible navigation
* visible focus states
* color contrast
* meaningful alt text
* decorative image handling
* form labels
* button/link semantics
* reduced-motion behavior
* mobile accessibility

Accessibility must be considered during implementation, not only during final testing.

---

# Phase 13 — Responsive Design

Validate the website at:

### Desktop

Large screens and common desktop resolutions.

### Tablet

Intermediate viewport sizes and touch interaction.

### Mobile

Small screens and touch-first navigation.

Check:

* navigation
* typography
* spacing
* cards
* images
* tables
* forms
* buttons
* CTA sections
* screenshots
* horizontal overflow

Do not create a separate mobile website.

Use responsive layouts from the same component system.

---

# Phase 14 — Content and Asset Audit

Before production release, audit:

### Content

* duplicate content
* incorrect product names
* outdated information
* inconsistent terminology
* missing descriptions
* placeholder text
* broken references

### Assets

* missing images
* broken images
* incorrect logos
* duplicated assets
* oversized images
* missing alt text
* incorrect product assets

Follow:

* `content-model.md`
* `assets.md`
* `brand.md`

---

# Phase 15 — Final Quality Review

Perform a complete production review.

Check:

* Desktop
* Tablet
* Mobile
* RTL
* Accessibility
* SEO
* Performance
* Internal links
* External links
* Broken links
* Missing images
* Missing assets
* Console errors
* Build errors
* Sitemap
* robots.txt
* Canonical URLs
* Structured data
* Metadata
* Redirects
* Production build

Run the final production build.

The project must build successfully without errors.

---

# Phase 16 — Production Readiness

Before release, verify:

* no development-only content remains
* no placeholder text remains
* no fake assets remain
* no fake company claims remain
* no debug output remains
* no unnecessary console errors remain
* all important routes are accessible
* all important assets load correctly
* metadata is complete
* sitemap is valid
* robots.txt is valid
* responsive layouts work
* production build succeeds

---

# Agent Working Rules

The roadmap is executed incrementally.

The agent must:

1. Audit before restructuring.
2. Reuse working code before replacing it.
3. Reuse existing assets before creating new ones.
4. Follow the documented company/product hierarchy.
5. Keep content separate from presentation.
6. Keep product-specific content separate from company content.
7. Preserve existing URLs where practical.
8. Make minimal-scope changes.
9. Validate the result after each significant phase.
10. Report what was changed and why.

The agent must not:

* rebuild the entire project unnecessarily
* redesign unrelated pages
* invent content
* invent assets
* invent product functionality
* change the brand identity without instruction
* introduce unnecessary dependencies
* create unnecessary JavaScript
* create duplicate content
* create duplicate assets
* modify unrelated files during a focused task

---

# Completion Principle

The website is considered complete when it is:

**Technically sound + visually consistent + content-rich + SEO-ready + fast + accessible + maintainable.**

The final website should communicate one clear idea:

```text
دومان سامانه
        ↓
A professional software company
        ↓
Multiple products
        ↓
Real capabilities
        ↓
Useful knowledge
        ↓
Enterprise trust
```

The website should not feel like a collection of unrelated product landing pages.

It should feel like one coherent technology company with a strong and growing product portfolio.
