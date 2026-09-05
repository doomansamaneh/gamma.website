# Architecture

## Overview

This is a static corporate website for the company and its products.

The website must be designed as a **multi-product corporate website** from the beginning.

GammaItsm is currently the primary product, but the architecture must allow additional products to be added without restructuring the website.

The website should be deployable as generated static assets without requiring a runtime backend.

The architecture should prioritize:

- Maintainability
- Performance
- SEO
- Accessibility
- Clear content structure
- Reusability
- Minimal client-side JavaScript
- Easy addition of future products

---

## Technology

- Astro
- TypeScript
- HTML
- CSS
- Markdown / MDX

Do not introduce additional frameworks or libraries unless there is a clear requirement.

Astro should remain the primary application and rendering framework.

---

## Rendering

Prefer Astro static generation.

Pages should be generated as static HTML whenever possible.

Interactive components should use client-side JavaScript only when necessary.

Prefer:

```text
HTML + CSS
```

over:

```text
JavaScript
```

for interactions that can be implemented without JavaScript.

If a future requirement needs a more complex interactive component, use an Astro-compatible UI framework only for that isolated component rather than introducing a framework for the entire website.

---

## Website Architecture

The website has four major conceptual areas:

```text
Company
│
├── Products
│   ├── GammaItsm
│   ├── Product 2
│   ├── Product 3
│   └── ...
│
├── Resources
│   ├── Articles
│   ├── Videos
│   ├── ITIL Guide
│   └── FAQ
│
├── Company
│   ├── Customers
│   ├── History
│   ├── Mission & Vision
│   ├── Areas of Activity
│   ├── Why Us
│   ├── Certifications
│   └── Product Screenshots
│
└── Contact
```

GammaItsm must not be treated as the root entity of the website.

It is a product owned and developed by the company.

---

## Suggested Project Structure

```text
src/

├── components/
│   ├── common/
│   ├── navigation/
│   ├── products/
│   ├── content/
│   └── sections/
│
├── layouts/
│
├── pages/
│   ├── index.astro
│   ├── products/
│   ├── resources/
│   ├── company/
│   └── contact/
│
├── content/
│   ├── products/
│   ├── features/
│   ├── articles/
│   ├── faq/
│   └── ...
│
├── data/
│   ├── company.ts
│   ├── navigation.ts
│   └── ...
│
├── styles/
│
└── types/

public/

├── images/
├── icons/
├── fonts/
└── favicon/
```

The exact structure may evolve as the project grows, but the separation between presentation, content, and structured data should be preserved.

---

## Products

Products are first-class entities in the website.

The architecture must support multiple products.

Each product may have:

- Name
- Description
- Logo
- Hero content
- Features
- Benefits
- Screenshots
- Videos
- Documentation
- Related articles
- FAQ
- CTA
- Contact / Demo action

Example:

```text
/products/GammaItsm
/products/GammaItsm/features
/products/GammaItsm/features/incident-management
/products/GammaItsm/features/problem-management

/products/product-2
/products/product-2/features/...
```

Adding a new product should primarily require adding content and configuration, not changing the core architecture.

---

## Features

Features belong to a product.

Do not create a global feature hierarchy that assumes all features belong to GammaItsm.

Example:

```text
Product
└── GammaItsm
    └── Features
        ├── Incident Management
        ├── Problem Management
        ├── Change Management
        └── ...
```

Features should be independently addressable pages when they provide meaningful standalone content.

Feature pages may link to:

- Related features
- Parent product
- Related articles
- ITIL documentation
- Videos
- FAQ
- Demo / Contact

This internal linking structure should be intentional and SEO-friendly.

---

## Components

Create reusable components for recurring UI patterns.

Examples:

- Header
- Footer
- Navigation
- Hero
- Section
- FeatureCard
- ProductCard
- CTA
- Breadcrumb
- FAQ
- LogoCloud
- ArticleCard
- VideoCard
- ScreenshotGallery
- RelatedContent

Components should be designed around reusable patterns rather than individual pages.

Do not create components for trivial one-off markup unless reuse is expected.

Product-specific components are acceptable when the pattern is genuinely specific to a product.

Avoid creating excessive abstraction.

---

## Layouts

Layouts should provide consistent page-level structures.

Examples:

```text
BaseLayout
├── SEO metadata
├── Header
├── Main content
└── Footer

ProductLayout
├── BaseLayout
├── Product navigation/context
└── Product content

ArticleLayout
├── BaseLayout
└── Article content
```

Use layouts to enforce consistency rather than duplicating page-level structures.

---

## Content

Marketing content should be separated from presentation whenever practical.

Prefer Markdown/MDX for:

- Blog posts
- Articles
- ITIL guides
- Documentation
- Long-form content
- Product feature descriptions where appropriate

Prefer structured data for:

- Products
- Product metadata
- Navigation
- Company information
- Feature metadata
- Categories
- Content relationships

Content should not be hardcoded into reusable UI components.

---

## Content Relationships

Content should support meaningful relationships.

Examples:

```text
Product
   ↓
Features
   ↓
Articles
   ↓
ITIL Guide
   ↓
Related Features
```

A feature page should be able to reference related content.

An article should be able to reference related products or features.

This allows the website to build a strong internal linking structure naturally.

---

## JavaScript

JavaScript must be treated as an optimization target.

Before adding client-side JavaScript, ask:

> "Can this be implemented with HTML and CSS?"

If yes, prefer HTML/CSS.

Do not build the website as a client-side SPA.

Do not add JavaScript merely for visual effects.

Interactive components should be isolated and loaded only when required.

---

## Styling

The website must use a centralized design system.

Do not define arbitrary colors, spacing, typography, border radii, shadows, or component styles independently on individual pages.

Design tokens should be centralized and reusable.

The visual identity of the company and individual products should be separated where appropriate.

For example:

```text
Company Brand
    │
    ├── GammaItsm
    │      └── Product Accent
    │
    ├── Product 2
    │      └── Product Accent
    │
    └── Future Products
           └── Product Accent
```

Product-specific colors must not break the overall corporate visual identity.

The detailed visual rules belong in `design-system.md`.

---

## SEO

SEO must be considered part of the architecture, not added at the end.

Every meaningful page should support:

- Unique title
- Meta description
- Canonical URL
- Open Graph metadata
- Semantic HTML
- Proper heading hierarchy
- Internal linking
- Sitemap inclusion
- Appropriate structured data where applicable

URLs should be:

- Stable
- Human-readable
- Lowercase
- Descriptive
- Consistent

Avoid unnecessary query parameters for primary content pages.

---

## Accessibility

Accessibility is a first-class requirement.

The website should:

- Use semantic HTML
- Provide meaningful heading hierarchy
- Provide accessible navigation
- Provide descriptive alternative text for meaningful images
- Maintain sufficient contrast
- Support keyboard navigation
- Avoid interaction patterns that require a mouse
- Respect reduced-motion preferences where relevant

Do not use visual design as a substitute for semantic structure.

---

## Performance

Performance is a core architectural requirement.

Prefer:

- Static HTML
- Optimized images
- Modern image formats where appropriate
- Local fonts where practical
- Minimal JavaScript
- Minimal third-party scripts
- Lazy loading for non-critical media
- Avoiding unnecessary client-side hydration

Do not sacrifice performance for decorative animations or unnecessary dependencies.

---

## External Services

Do not add external services unless there is a clear business requirement.

Any external script must be justified by:

1. Its business value
2. Its technical necessity
3. Its performance impact
4. Its privacy implications
5. Its effect on reliability

The website should remain functional if a non-essential third-party service becomes unavailable.

---

## Security

The production website should have no unnecessary server-side attack surface.

Prefer a static deployment without:

- PHP
- WordPress
- MySQL
- Runtime application servers
- Server-side CMS

Secrets, API keys, credentials, and private configuration must never be committed to the repository.

Public content and configuration must not contain sensitive information.

---

## Maintainability

Prefer simple solutions over clever solutions.

Do not introduce abstractions, dependencies, or frameworks without a clear benefit.

The project should be understandable to another experienced developer joining the project later.

When multiple solutions are possible, prefer the one with:

- Less code
- Fewer dependencies
- Less JavaScript
- Clearer ownership
- Easier maintenance
- Better long-term stability

---

## Architectural Principle

The most important architectural rule is:

> **Build a company website that currently presents GammaItsm, rather than building a GammaItsm website that may later contain other products.**

Future products must fit naturally into the existing architecture without requiring a fundamental redesign.

Do not implement pages as large monolithic Astro files.

Each page must be composed from meaningful, reusable sections/components.

Separate:

page composition
reusable UI components
product-specific components
content/data
styling/design tokens

A page file should primarily describe the page structure and composition, not contain large amounts of markup or business/content data.

Components must be designed so that individual sections can be modified, reordered, replaced, or reused without rewriting the entire page.

Avoid both extremes:

monolithic page files
excessive fragmentation into meaningless micro-components.

Prefer semantic, meaningful components such as ProductHero, FeatureGrid, ScreenshotGallery, FAQSection, CTASection, etc.
