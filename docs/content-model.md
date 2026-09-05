# Content Model

## Overview

The website is a company-level corporate website that presents multiple products and services.

GammaItsm is currently the primary product, but the content model must support additional products without requiring a structural redesign.

Content should be separated from presentation whenever practical.

The content model should make relationships between:

- Company
- Products
- Product Features
- Articles
- Videos
- ITIL Guides
- FAQs
- Customers
- Certifications
- Screenshots
- Contact and Demo Requests

explicit and maintainable.

---

## Core Entities

### Company

The company is the root business entity of the website.

Company-level content may include:

- Name
- Logo
- Short description
- Long description
- Mission
- Vision
- Goals
- History
- Areas of activity
- Customers
- Certifications
- Contact information
- Social links
- Company-level calls to action

Company content must not be tied specifically to GammaItsm.

---

## Product

A product is a first-class entity.

Each product should be able to have its own:

- Name
- Slug
- Short description
- Full description
- Logo
- Hero content
- Product accent
- Benefits
- Features
- Screenshots
- Videos
- Documentation
- FAQs
- Related articles
- Related resources
- CTA
- Demo request

Example:

```yaml
name: GammaItsm
slug: GammaItsm
description: Enterprise IT service management platform
```

Future products should follow the same model.

---

## Product Feature

Features belong to products.

A feature must never exist as an unqualified global feature when it is actually a product capability.

Example:

```text
Product
└── GammaItsm
    ├── Incident Management
    ├── Problem Management
    ├── Change Management
    └── Service Request Management
```

Each feature may contain:

- Name
- Slug
- Short description
- Full description
- Benefits
- Capabilities
- Screenshots
- Related features
- Related articles
- Related videos
- Related ITIL documentation
- FAQ
- CTA

Features may have their own standalone pages.

---

## Articles

Articles are company-level resources unless explicitly associated with a product.

An article may optionally reference:

- One product
- Multiple products
- One or more features
- ITIL concepts
- Other articles

Suggested fields:

```yaml
title:
slug:
description:
publishedAt:
updatedAt:
author:
category:
tags:
product:
features:
cover:
content:
```

Articles should be designed for:

- SEO
- Knowledge sharing
- Thought leadership
- Product education
- Internal linking

---

## Videos

Videos are reusable content resources.

A video may be associated with:

- Company
- Product
- Feature
- Article
- ITIL topic

Examples:

- GammaItsm product introduction
- Incident Management tutorial
- ITIL training
- Product demonstration

Video metadata should include:

- Title
- Description
- Thumbnail
- URL or video source
- Duration
- Product
- Feature
- Category
- Publication date

---

## ITIL Guide

ITIL content should be modeled as a knowledge resource rather than as a GammaItsm feature.

ITIL topics may link to relevant GammaItsm features.

Example:

```text
ITIL Guide
└── Incident Management
    ├── ITIL explanation
    ├── Related GammaItsm feature
    ├── Related articles
    └── Related videos
```

This allows the website to educate users independently of the product while naturally connecting concepts to GammaItsm.

---

## FAQ

FAQs may exist at different levels:

### Company FAQ

General questions about the company.

### Product FAQ

Questions about a specific product.

### Feature FAQ

Questions about a specific product feature.

The FAQ model should support:

```yaml
question:
answer:
product:
feature:
category:
order:
```

Avoid duplicating the same FAQ across multiple pages.

---

## Customers

Customers are company-level content.

Customer information may include:

- Name
- Logo
- Industry
- Short description
- Case study
- Products used

A customer may use multiple company products.

Therefore customer relationships should not assume that a customer belongs to GammaItsm only.

---

## Certifications

Certifications are company-level unless a certification explicitly belongs to a product.

Suggested fields:

```yaml
name:
issuer:
description:
image:
year:
url:
```

---

## Screenshots

Screenshots should be reusable assets associated with products or features.

Suggested metadata:

```yaml
title:
description:
image:
product:
feature:
order:
alt:
```

Screenshots should provide real evidence of the product rather than decorative imagery.

---

## Relationships

The content model should explicitly support relationships.

Typical relationships:

```text
Company
 ├── Products
 │    └── Product
 │         ├── Features
 │         ├── Screenshots
 │         ├── Videos
 │         ├── FAQs
 │         └── Articles
 │
 ├── Customers
 ├── Certifications
 ├── Articles
 ├── Videos
 └── ITIL Guide
```

Cross-content relationships are encouraged when they improve navigation and user understanding.

Examples:

```text
Incident Management
    ↓
GammaItsm Incident Management
    ↓
Related Article
    ↓
Related Video
    ↓
Request Demo
```

---

## Content Ownership

Content should have clear ownership.

### Company-level

- Company information
- History
- Mission and vision
- Customers
- Certifications
- General articles
- General contact information

### Product-level

- Product description
- Product benefits
- Product features
- Product screenshots
- Product videos
- Product FAQs

### Feature-level

- Feature explanation
- Feature capabilities
- Feature screenshots
- Related resources
- Feature FAQs

---

## Content Storage

Use Astro content collections or equivalent structured content for content that benefits from:

- Schema validation
- Type safety
- Markdown/MDX
- Frontmatter
- Relationships
- Static generation

Suggested structure:

```text
src/content/
├── products/
├── features/
├── articles/
├── videos/
├── it il/
├── faqs/
├── customers/
└── certifications/
```

Company configuration and global structured data may live under:

```text
src/data/
├── company/
├── navigation/
└── site/
```

The exact implementation may evolve with the project.

---

## Slugs

Slugs must be:

- lowercase
- URL-safe
- stable
- descriptive
- independent from display titles

Examples:

```text
/products/GammaItsm
/products/GammaItsm/features/incident-management
/resources/articles/incident-management
/resources/itil/incident-management
```

Changing a title must not unnecessarily change its URL.

---

## Content Reuse

Do not duplicate content simply because it appears on multiple pages.

Prefer:

- References
- Shared content
- Components
- Structured relationships
- Related-content queries

For example, a GammaItsm feature should be defined once and referenced from:

- Product page
- Feature listing
- Related articles
- ITIL pages
- Navigation
- Search

---

## SEO Content Requirements

Every indexable content entity should support:

- SEO title
- Meta description
- Canonical URL when required
- Open Graph metadata
- Structured data when appropriate
- Descriptive slug
- Proper heading hierarchy
- Internal links

SEO metadata should be separate from visual presentation.

---

## Content Principles

1. Company content must remain company-level.
2. Products are first-class entities.
3. Features belong to products.
4. Resources should be reusable and cross-linked.
5. Avoid content duplication.
6. Prefer structured relationships over hardcoded links.
7. Content should remain independent from UI components.
8. Every public content page should have a clear purpose.
9. Content should support SEO and internal linking.
10. The model must allow new products without architectural changes.

---

## Core Principle

The content model must represent the business structure, not the current website structure.

The company is the root entity.

Products are independent entities.

GammaItsm is the current primary product, not the definition of the website.
