# Navigation

## Overview

The website represents the company and its products.

Navigation must therefore be company-first and product-aware.

GammaDesk is currently the primary product, but the navigation must allow additional products to be added without redesigning the information architecture.

Navigation should remain simple, predictable, and scalable.

---

## Primary Navigation

Recommended top-level navigation:

```text
Products
Resources
Company
Contact Us
Request Demo
```

The logo links to the company homepage.

---

## Products

Products are the primary commercial entities.

```text
Products
├── GammaDesk
│   ├── Overview
│   ├── Features
│   │   ├── Incident Management
│   │   ├── Problem Management
│   │   ├── Change Management
│   │   └── ...
│   ├── Screenshots
│   ├── Resources
│   └── Request Demo
│
└── Other Products
```

The navigation must not assume GammaDesk is the only product.

When additional products are introduced, they should be added under `Products`.

---

## GammaDesk Navigation

GammaDesk should have a product-level navigation structure.

Recommended structure:

```text
GammaDesk
├── Overview
├── Features
├── Screenshots
├── Resources
└── Request Demo
```

The product page should provide access to its feature hierarchy.

---

## Feature Navigation

Features belong to products.

Do not expose product features as top-level company navigation items.

Incorrect:

```text
Home
Incident Management
Problem Management
Change Management
Products
Company
```

Correct:

```text
Home
Products
  └── GammaDesk
      └── Features
          ├── Incident Management
          ├── Problem Management
          └── Change Management
Company
Resources
Contact
```

This prevents the navigation from becoming dominated by one product.

---

## Resources

Resources are company-level knowledge and marketing content.

Recommended structure:

```text
Resources
├── Articles
├── Videos
├── ITIL Guide
└── FAQ
```

Resources may reference products and features.

For example:

```text
Resources
└── ITIL Guide
    └── Incident Management
        └── Related GammaDesk Feature
```

---

## Company

Company information belongs under a dedicated company section.

Recommended structure:

```text
Company
├── About Us
├── Our Customers
├── History
├── Mission & Vision
├── Areas of Activity
├── Why Us
└── Certifications
```

These pages must describe the company rather than GammaDesk specifically.

---

## Contact

Contact should be a dedicated top-level navigation item.

Possible content:

* Contact information
* Contact form
* Sales inquiry
* Support information
* Location
* Email
* Phone
* Social links

Support-specific navigation should not be confused with the corporate contact page.

---

## Request Demo

`Request Demo` should be a prominent CTA rather than a normal content page.

It may appear:

* In the header
* In product hero sections
* At the end of feature pages
* At the end of articles
* In the footer

The CTA should normally lead to a single consistent demo-request flow.

---

## URL Structure

URLs should reflect the information architecture.

### Company

```text
/
 /company
 /company/about
 /company/customers
 /company/history
 /company/mission
 /company/areas
 /company/why-us
 /company/certifications
```

### Products

```text
/products
/products/gammadesk
/products/gammadesk/features
/products/gammadesk/features/incident-management
/products/gammadesk/features/problem-management
/products/gammadesk/features/change-management
```

Future products should follow the same pattern:

```text
/products/product-name
/products/product-name/features
/products/product-name/features/feature-name
```

### Resources

```text
/resources
/resources/articles
/resources/articles/article-slug
/resources/videos
/resources/videos/video-slug
/resources/itil
/resources/itil/topic-slug
/resources/faq
```

---

## Breadcrumbs

All deep pages should provide breadcrumbs where useful.

Example:

```text
Home
› Products
› GammaDesk
› Features
› Incident Management
```

Breadcrumbs should reflect the actual content hierarchy.

They should not merely reproduce the visual menu.

---

## Internal Linking

Navigation is not limited to the header.

Pages should create meaningful contextual links.

Example:

```text
ITIL Incident Management
        ↓
GammaDesk Incident Management
        ↓
Related Features
        ↓
Related Articles
        ↓
Request Demo
```

A feature page should link to relevant:

* Related features
* Articles
* Videos
* ITIL topics
* FAQs
* Demo CTA

An article should link back to relevant products or features when appropriate.

---

## Active Navigation State

The current section should be visually identifiable.

Examples:

```text
Products       active
Resources
Company
Contact
```

Within a product:

```text
GammaDesk
├── Overview
├── Features       active
├── Screenshots
└── Resources
```

Active states must also be accessible and not rely solely on color.

---

## Mobile Navigation

Mobile navigation should preserve the information hierarchy.

Recommended behavior:

```text
Menu
├── Products
│   └── GammaDesk
│       └── Features
├── Resources
├── Company
├── Contact Us
└── Request Demo
```

Avoid exposing every feature as a first-level mobile menu item.

Use progressive disclosure for deep product hierarchies.

---

## Navigation Rules

1. Navigation must represent the company, not only GammaDesk.
2. Products are first-class navigation entities.
3. Product features belong under their product.
4. Company information belongs under Company.
5. Educational and marketing content belongs under Resources.
6. Avoid unnecessary top-level menu items.
7. Do not expose every feature in the global navigation.
8. Use breadcrumbs for deep content.
9. Use contextual internal linking extensively.
10. Keep navigation scalable for future products.
11. Keep URLs stable and predictable.
12. Navigation labels should be clear and user-oriented.
13. Avoid technical or internal terminology in public navigation.
14. The primary CTA should remain visually distinct.
15. Mobile navigation must preserve the same information architecture.

---

## Current Navigation

The initial implementation should use:

```text
Products
  └── GammaDesk
      └── Features

Resources
  ├── Articles
  ├── Videos
  ├── ITIL Guide
  └── FAQ

Company
  ├── About Us
  ├── Our Customers
  ├── History
  ├── Mission & Vision
  ├── Areas of Activity
  ├── Why Us
  └── Certifications

Contact Us

[Request Demo]
```

Additional products can be added later without changing the global information architecture.

---

## Core Principle

Build the navigation for the company we want to become, not only the product we currently have.

GammaDesk should have a strong and complete product presence while remaining one product inside the company's broader architecture.
