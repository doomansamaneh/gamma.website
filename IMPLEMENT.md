# Full Website Design & UX Review — Doman Samaneh

## Objective

Perform a complete design, UX, content presentation, layout, responsive, accessibility, and consistency review of the entire Astro website for **دومان سامانه**.

The website already has a working design direction and component architecture.

**Do NOT rebuild the website from scratch.**

First inspect the entire existing project and understand its current architecture, components, design tokens, pages, assets, content, and navigation.

Then identify inconsistencies and improve the site systematically.

The goal is to make the website feel like a **mature enterprise software company website**, not a generic SaaS template.

---

# 1. Brand Identity — Preserve and Enforce

The primary company identity is:

**دومان سامانه**

Products:

- GammaDesk
- ZED EAM
- Landa
- Gamma.Kernel

Brand colors:

```text
Primary Orange: #EF3F23
Dark:           #231F20
White:          #FFFFFF
```

Persian typography:

**Vazirmatn**

Use the existing official logos and assets.

Never:

- redraw logos
- distort logos
- recolor official logos
- crop logos incorrectly
- invent product logos
- invent customer logos
- invent certifications
- invent statistics
- invent awards
- invent customer names
- invent contact information

Use the official assets as the source of truth.

---

# 2. First: Audit the Entire Website

Before changing anything, inspect:

- all pages
- all layouts
- all components
- all CSS
- all design tokens
- navigation
- footer
- responsive behavior
- product pages
- company pages
- resource pages
- contact pages
- CTA patterns
- typography
- spacing
- buttons
- cards
- sections
- breadcrumbs
- forms
- images
- logos
- SEO metadata
- accessibility

Create a mental map of the existing system before modifying it.

Do not make isolated page-specific fixes that contradict the global design system.

---

# 3. Global Design Direction

The design should communicate:

- Enterprise
- Professional
- Technical
- Reliable
- Mature
- Secure
- Modern
- Minimal
- Trustworthy

The design should NOT look:

- like a generic SaaS template
- overly colorful
- playful
- gaming-inspired
- startup-like
- overloaded with gradients
- overloaded with cards
- overly rounded
- glassmorphic
- dependent on decorative illustrations

Prefer:

- strong typography
- whitespace
- hierarchy
- alignment
- restrained use of orange
- clear section rhythm
- subtle borders
- simple grids
- high-quality spacing
- strong visual hierarchy

---

# 4. Layout Philosophy

Review every page for unnecessary multi-column layouts.

### Important rule

Do NOT use two columns simply because there is enough horizontal space.

Use two-column layouts only when they improve comprehension.

For informational sections, prefer:

```text
eyebrow
heading
description
content
```

with a clear vertical reading flow.

### Homepage

The homepage should generally feel vertically structured.

Preferred structure:

```text
Hero
↓
Products
↓
From Problem to Solution
↓
Trust / Company Context
↓
CTA
↓
Footer
```

The Hero may remain two-column because the product ecosystem visual provides a genuine reason for the split.

The following sections should generally use a single central content flow unless there is a strong UX reason otherwise.

---

# 5. Homepage Review

Review the homepage carefully.

Current Hero concept:

- Company eyebrow
- Main H1
- Description
- CTA buttons
- Product ecosystem visual

Keep this direction.

The Hero visual should communicate the relationship between:

- GammaDesk
- ZED EAM
- Landa
- Gamma.Kernel

Use official product logos.

Do not use:

- stock images
- generic laptops
- fake dashboards
- generic SaaS illustrations
- excessive floating cards
- neon effects
- 3D objects

---

## Homepage Products Section

The products section should clearly communicate the four products.

Keep the layout simple.

Cards should not become overly decorative.

Each product should communicate:

- logo
- name
- short description
- appropriate link

GammaDesk can have stronger visual emphasis because it is currently the primary enterprise product, but the company architecture must remain:

**Doman Samaneh → Products**

not:

**GammaDesk → Other Products**

---

## Homepage "From Problem to Solution"

Use:

### Eyebrow

`رویکرد ما`

### Heading

`از مسئله تا راهکار`

### Copy

`هر یک از محصولات دومان سامانه برای حل مسئله‌ای مشخص طراحی شده است؛ راهکارهایی مستقل که در کنار یکدیگر، تجربه و توانمندی ما در توسعه نرم‌افزارهای تخصصی را شکل می‌دهند.`

Prefer a centered single-column presentation.

Do not use unnecessary two-column layout here.

---

# 6. Navigation Review

Review the entire navigation.

Primary navigation:

- محصولات
- منابع
- شرکت
- تماس با ما
- درخواست دمو

Products:

- GammaDesk
- ZED EAM
- Landa
- Gamma.Kernel

Resources:

- مقالات
- ویدئوها
- راهنمای ITIL
- سوالات متداول

Company:

- درباره ما
- مشتریان
- ماموریت و چشم‌انداز
- چرا ما
- گواهی‌نامه‌ها

Navigation requirements:

- Only one dropdown can be open at a time.
- Products should use a professional mega-menu.
- Company should use a clean vertical dropdown.
- Dropdown triggers should have a visible chevron.
- Chevron should rotate when open.
- Clicking another menu closes the previous one.
- Clicking the active menu closes it.
- Clicking outside closes dropdown.
- Escape closes dropdown.
- Mobile navigation must remain simple and accessible.
- Use proper buttons and ARIA attributes.

Do not add unnecessary navigation items.

---

# 7. Footer Review

Footer must be globally consistent across all pages.

Use:

- company identity
- products
- company links
- resources
- contact
- request demo

Use the official Doman Samaneh logo.

Footer should be:

- dark
- minimal
- professional
- clearly structured
- easy to scan

Avoid excessive columns and unnecessary text.

Never invent:

- phone numbers
- email addresses
- addresses
- social links

Only use real existing information.

---

# 8. Product Pages

Review all product pages for consistency.

Every product page should have a predictable hierarchy:

```text
Product Hero
↓
Product Introduction
↓
Key Capabilities
↓
Features / Modules
↓
Product Screenshots or Visual Evidence
↓
Use Cases / Value
↓
FAQ when appropriate
↓
CTA
```

Do not force every product to have identical sections.

The structure should be consistent, but content should remain product-specific.

---

# 9. GammaDesk

GammaDesk is an enterprise ITSM / Help Desk product.

The page should communicate:

- enterprise maturity
- ITSM
- Help Desk
- ITIL-based design
- structured service management
- request and incident management
- workflows
- assets where applicable
- organizational configurability

Avoid unsupported claims.

Prefer:

`طراحی شده بر مبنای چارچوب ITIL`

over claims that could imply official ITIL certification unless certification is explicitly verified.

Review the existing Modules / Features section.

Improve:

- hierarchy
- spacing
- alignment
- module grouping
- arrow positioning
- visual rhythm
- excessive empty space

Do not turn it into a card-heavy SaaS section.

---

# 10. ZED EAM

Review the ZED EAM page with the same enterprise standard.

The design should communicate:

- Enterprise Asset Management
- asset lifecycle
- maintenance
- organizational assets
- operational visibility
- structured processes

Do not invent features that are not already present in the project/content.

---

# 11. Landa

Landa should remain visually part of the Doman Samaneh ecosystem but can have its own product identity.

Review:

- product positioning
- hierarchy
- CTA
- screenshots
- feature presentation
- responsive layout

Do not allow the Landa page to visually dominate the corporate site.

---

# 12. Gamma.Kernel

Gamma.Kernel is different from the other products.

Treat it as a technical/open-source project.

The page should emphasize:

- .NET
- Clean Architecture
- DDD
- CQRS
- extensibility
- developer experience
- technical architecture

Do not force Gamma.Kernel into the same visual structure as commercial enterprise products.

Use the existing official GitHub/project information only.

---

# 13. Company Pages

Review:

- About
- Customers
- Mission & Vision
- Why Us
- Certifications

These pages should communicate **Doman Samaneh as the company**, not simply GammaDesk.

The hierarchy must remain:

```text
Doman Samaneh
    ↓
Products
    ├── GammaDesk
    ├── ZED EAM
    ├── Landa
    └── Gamma.Kernel
```

---

# 14. About Page

The About page should follow a logical narrative:

```text
Hero
↓
Company Introduction
↓
History / Formation
↓
Areas of Activity
↓
Products / Solutions
↓
Experience / Capabilities
↓
Customers / Trust
↓
CTA
```

History and areas of activity should be integrated into About.

Do not create unnecessary standalone pages such as:

- `/company/history`
- `/company/areas`

unless the existing project has a strong reason.

Use real historical information from the existing source material.

Do not migrate irrelevant legacy WordPress content.

In particular, do not migrate spam, suspicious links, unrelated posts, or obsolete website content.

---

# 15. Customers Page

The Customers page is company-level.

It should communicate real enterprise experience.

Use only verified customer information available in the project/source material.

Possible structure:

```text
Hero
↓
Customer Introduction
↓
Industries / Sectors
↓
Customer Logos / Names
↓
Enterprise Project Experience
↓
CTA
```

Do not invent logos.

Do not present unsupported customer-product relationships.

Do not copy old technical implementation details such as obsolete development tools into the customer page unless they are genuinely relevant.

---

# 16. Mission & Vision

Review the existing source content and redesign it as a concise corporate page.

Focus on:

- why the company exists
- what it values
- where it is going
- product philosophy
- long-term direction

Avoid generic corporate clichés.

---

# 17. Why Us

This page should answer:

**Why should an organization choose Doman Samaneh?**

Use evidence where available:

- experience
- enterprise projects
- product maturity
- domain expertise
- technical capability
- support
- configurability
- long-term development

Do not invent statistics.

Avoid empty claims such as:

- best company
- number one
- most powerful
- market leader

unless explicitly supported by verified evidence.

---

# 18. Resources

Review:

- Articles
- Videos
- ITIL Guide
- FAQ

Resources should feel like part of the same design system.

Avoid excessive card grids.

Use strong typography and clear metadata.

Article pages should prioritize readability.

---

# 19. CTA Consistency

Create a consistent CTA strategy.

Primary CTA:

`درخواست دمو`

Secondary CTA:

`تماس با ما`

Do not create many competing CTA styles.

CTA components should use the existing design tokens.

---

# 20. Typography

Review all typography globally.

Use:

**Vazirmatn**

Check:

- H1
- H2
- H3
- body
- captions
- buttons
- navigation
- metadata

Avoid:

- unnecessary uppercase transformations for Persian
- excessive font weights
- overly large headings
- awkward line breaks
- forced `<br>`
- `nowrap` on Persian headings

Headings should wrap naturally.

---

# 21. Spacing

Audit vertical spacing across every page.

Look specifically for:

- excessive empty areas
- sections that are too compressed
- inconsistent top/bottom padding
- inconsistent card padding
- inconsistent heading spacing
- orphaned content
- large visual gaps without purpose

Create a consistent section rhythm using the existing design tokens.

Do not solve spacing problems with random page-specific pixel values.

---

# 22. Cards

Reduce unnecessary card usage.

A card should exist only when it provides:

- grouping
- hierarchy
- interaction
- scanning benefit

Avoid:

- cards inside cards
- excessive shadows
- excessive rounded corners
- decorative cards
- every piece of text being placed inside a box

Prefer borders, whitespace, typography, and alignment.

---

# 23. Colors

Use the centralized design tokens.

Primary:

```text
#EF3F23
```

Dark:

```text
#231F20
```

Orange should be an accent, not the dominant background everywhere.

Avoid:

- neon orange
- large orange surfaces without purpose
- random gradients
- unrelated colors

If gradients are used, they must be extremely subtle and serve a real visual purpose.

---

# 24. Responsive Design

Test every page at:

- 320px
- 375px
- 768px
- 1024px
- 1280px
- 1440px+

Pay special attention to:

- navigation
- Hero
- headings
- product cards
- grids
- tables
- images
- CTA
- footer
- forms

Mobile should not simply be a compressed desktop version.

It should have deliberate spacing and hierarchy.

---

# 25. Accessibility

Review:

- semantic HTML
- heading hierarchy
- button vs link usage
- focus states
- keyboard navigation
- ARIA attributes
- color contrast
- alt text
- form labels
- interactive states

Do not sacrifice accessibility for visual effects.

---

# 26. Performance

Preserve Astro's static/content-first architecture.

Do not introduce unnecessary JavaScript.

Do not add large UI frameworks.

Avoid unnecessary dependencies.

Use:

- optimized images
- SVG logos
- lazy loading where appropriate
- minimal client-side JavaScript
- CSS instead of JavaScript when possible

---

# 27. Component Architecture

Improve components only when there is a real reuse benefit.

Use meaningful components such as:

```text
SiteHeader
SiteFooter
ProductHero
ProductLogo
FeatureGrid
FeatureList
ScreenshotGallery
FAQSection
SectionHeading
CTA
CustomerLogoGrid
```

Avoid meaningless micro-components such as:

```text
Title
Text
Description
Arrow
Wrapper
```

unless they genuinely improve reuse.

Keep content/data separate from presentation where practical.

---

# 28. SEO

Review every page for:

- unique title
- meta description
- one clear H1
- logical H2/H3 hierarchy
- canonical URL where appropriate
- descriptive URLs
- image alt text
- internal linking
- Open Graph metadata where existing architecture supports it

Do not keyword-stuff.

Persian content should remain natural.

Use:

`کسب و کار`

not:

`کسب‌وکار`

---

# 29. Important Constraint — Do Not Rewrite Content Blindly

The goal is not to replace all existing copy.

For each page:

1. Understand the current purpose.
2. Identify weak or repetitive content.
3. Preserve factual information.
4. Improve wording only where necessary.
5. Avoid invented claims.
6. Keep the company's actual history and product capabilities accurate.

---

# 30. Implementation Strategy

Work in this order:

### Phase 1 — Audit

Inspect the entire website.

Identify:

- visual inconsistencies
- layout problems
- duplicate patterns
- weak hierarchy
- responsive issues
- component duplication
- design-token violations
- content problems

### Phase 2 — Global System

Fix:

- tokens
- typography
- container
- spacing
- buttons
- links
- navigation
- footer
- common components

### Phase 3 — Homepage

Refine the homepage.

Do not radically redesign it.

### Phase 4 — Product Pages

Review all four products.

### Phase 5 — Company Pages

Review About, Customers, Mission, Why Us, Certifications.

### Phase 6 — Resources

Review Articles, Videos, ITIL and FAQ.

### Phase 7 — Contact / Demo

Review forms and CTA flow.

### Phase 8 — Responsive / Accessibility / SEO

Run a final global review.

---

# 31. Critical Rule

**Do not make the entire website visually identical.**

Consistency means:

- same design language
- same typography
- same spacing system
- same buttons
- same navigation
- same footer
- same brand identity

It does NOT mean every page must have:

- the same Hero
- the same card layout
- the same number of columns
- the same section structure

Each page should have a layout appropriate to its content.

---

# 32. Final Acceptance Criteria

The final website should feel:

**Corporate + Technical + Minimal + Mature + Trustworthy**

A visitor should immediately understand:

1. This is Doman Samaneh.
2. These are its four products.
3. Each product solves a different problem.
4. The company has real enterprise experience.
5. The website is structured and trustworthy.
6. There is a clear path to learn more or request a demo.

Before finishing, check every page for:

- alignment
- spacing
- typography
- responsive behavior
- navigation
- CTA consistency
- accessibility
- SEO
- design-token compliance
- unnecessary visual complexity

Do not finish after making only cosmetic changes.

Make the site feel like **one coherent enterprise product ecosystem**, while preserving the individual identity and purpose of each page.
