# Assets Guide

## 1. Purpose

This document defines how visual and static assets are managed across the Doman Samaneh corporate website.

The website represents the company **دومان سامانه** and its product portfolio:

* GammaDesk
* ZED EAM
* Landa
* Gamma.Kernel

Assets must preserve the company's professional, technical, trustworthy, and enterprise-oriented identity.

The goal is to reuse authentic company assets consistently rather than creating artificial or inconsistent replacements.

---

## 2. Source of Truth

The following priority must be followed when selecting or modifying assets:

1. Official company assets
2. Official product assets
3. `docs/brand.md`
4. `docs/design-system.md`
5. `docs/assets.md`
6. Existing website assets
7. New assets created specifically for the website, only when necessary

If an official asset exists, do not replace it with a generated or redesigned version.

---

## 3. Official Brand Assets

The following assets are considered authoritative:

* Doman Samaneh logo
* Doman Samaneh wordmark
* Company favicon
* Official product logos
* Official product icons
* Official customer logos
* Official certification logos
* Official screenshots
* Official company photographs
* Official product illustrations

Do not:

* redraw the company logo
* redesign product logos
* distort logos
* change logo proportions
* apply arbitrary effects to logos
* generate fake company/customer/certification logos
* replace real product screenshots with generic SaaS mockups
* invent product capabilities through imagery

If an asset is missing, use a neutral layout or placeholder rather than inventing an official-looking asset.

---

# 4. Asset Directory Structure

Use the following structure:

```text
public/
├── images/
│   ├── brand/
│   │   ├── logo.svg
│   │   ├── logo-dark.svg
│   │   └── favicon.svg
│   │
│   ├── products/
│   │   ├── gamma-itsm/
│   │   │   ├── logo.svg
│   │   │   ├── hero.webp
│   │   │   ├── dashboard.webp
│   │   │   ├── screenshots/
│   │   │   └── features/
│   │   │
│   │   ├── zed-eam/
│   │   │   ├── logo.svg
│   │   │   ├── hero.webp
│   │   │   ├── dashboard.webp
│   │   │   ├── screenshots/
│   │   │   └── features/
│   │   │
│   │   ├── landa/
│   │   │   ├── logo.svg
│   │   │   ├── hero.webp
│   │   │   ├── dashboard.webp
│   │   │   ├── screenshots/
│   │   │   └── features/
│   │   │
│   │   └── gamma-kernel/
│   │       ├── logo.svg
│   │       ├── hero.webp
│   │       ├── screenshots/
│   │       └── features/
│   │
│   ├── customers/
│   ├── certifications/
│   └── company/
│
├── fonts/
│   └── vazirmatn/
│
└── favicon/
```

The exact directory structure may be adapted to the existing Astro project if an equivalent organization already exists.

Do not duplicate the same asset in multiple directories.

Prefer referencing one canonical asset from multiple pages.

---

# 5. Company Assets

Company-level assets belong under:

```text
public/images/brand/
public/images/company/
```

Examples:

* company logo
* company photographs
* office photographs
* team photographs
* corporate illustrations
* company presentation imagery

Company assets should be usable across:

* Homepage
* About Us
* History
* Mission & Vision
* Areas of Activity
* Why Us
* Contact
* Company-level articles

---

# 6. Product Assets

Each product is a first-class entity.

Products:

```text
GammaDesk
ZED EAM
Landa
Gamma.Kernel
```

Each product should have its own asset namespace.

Example:

```text
public/images/products/gammadesk/
public/images/products/zed-eam/
public/images/products/landa/
public/images/products/gamma-kernel/
```

Product assets may include:

* product logo
* hero image
* dashboard screenshot
* feature screenshots
* product UI screenshots
* diagrams
* product-specific illustrations
* promotional imagery
* documentation imagery

Product assets must never be confused with company-level assets.

---

# 7. Product Logos

Use the official product logo whenever available.

Product names must remain exactly:

* **GammaDesk**
* **ZED EAM**
* **Landa**
* **Gamma.Kernel**

Do not create alternative spellings such as:

* Gamma Helpdesk
* Gamma Help Desk
* Gamma Kernel
* Zed
* ZED
* Landa Accounting

unless explicitly required by a documented SEO/content rule.

The visual identity of each product may have its own accent color, but all products must remain visually connected to the Doman Samaneh corporate identity.

---

# 8. Screenshots

Real product screenshots are preferred over decorative graphics.

Screenshots should be used to demonstrate actual functionality.

Recommended uses:

* Product hero
* Product overview
* Feature pages
* Product capabilities
* Product comparisons
* Articles
* Documentation
* Product-specific landing pages

Screenshots should:

* represent the current product UI where possible
* be high resolution
* be cropped intentionally
* preserve important UI context
* have meaningful filenames
* include appropriate alternative text

Avoid using screenshots merely as decoration when they do not communicate product value.

---

# 9. Screenshot Naming

Use descriptive lowercase filenames.

Preferred:

```text
incident-management.webp
problem-management.webp
asset-dashboard.webp
maintenance-work-order.webp
invoice-dashboard.webp
inventory-management.webp
```

Avoid:

```text
IMG001.webp
screen1.png
final-final2.png
new-image.png
Screenshot_2026.png
```

If multiple versions are required, use meaningful suffixes:

```text
dashboard.webp
dashboard-mobile.webp
dashboard-dark.webp
dashboard-detail.webp
```

---

# 10. Image Formats

Prefer modern web-friendly formats.

Recommended priority:

1. SVG for logos, icons, and simple vector graphics
2. WebP for photographs and screenshots
3. AVIF when the build pipeline supports it reliably
4. PNG only when transparency or compatibility requires it
5. JPEG only when appropriate for photographic content

Do not convert an asset if conversion causes visible quality loss or removes required transparency.

---

# 11. Image Optimization

All production images should be optimized.

Requirements:

* avoid unnecessarily large dimensions
* avoid unnecessarily large file sizes
* use responsive image sizes where appropriate
* use lazy loading for below-the-fold images
* prioritize loading of important hero images
* provide explicit dimensions where possible to reduce layout shift

Do not sacrifice visual quality for aggressive compression.

---

# 12. Accessibility

Every meaningful image must have appropriate alternative text.

Examples:

```html
<img
  src="/images/products/gammadesk/dashboard.webp"
  alt="داشبورد سامانه GammaDesk"
/>
```

Decorative images should use an empty alt attribute:

```html
<img src="..." alt="" />
```

Do not use filenames as alternative text.

Alt text should describe the meaningful content or purpose of the image.

---

# 13. Logos of Customers and Certifications

Customer and certification assets must only be used when they are official and approved for website presentation.

Store them separately:

```text
public/images/customers/
public/images/certifications/
```

Do not:

* invent customer logos
* recreate customer logos
* alter certification logos
* imply a certification that the company does not hold
* imply a customer relationship that does not exist

Customer logos should normally be presented in a restrained and professional manner.

---

# 14. Company Photography

Company photography should prioritize authenticity.

Preferred:

* real team photographs
* real office photographs
* real events
* real product development environments
* real customer/project imagery where authorized

Avoid generic stock photography whenever a real company asset is available.

If stock imagery is necessary, it must support the message and should not imply a false customer, employee, office, or product environment.

---

# 15. Generated Images

Generated imagery may be used only for decorative or conceptual purposes.

Generated imagery must not represent:

* official company logos
* official product logos
* real customers
* certifications
* real product UI
* fake customer testimonials
* fake employees
* fake offices presented as real
* unsupported product functionality

When real product screenshots are available, they always take priority over generated UI imagery.

---

# 16. Icons

Prefer:

1. Existing official icons
2. Consistent icon libraries already used by the project
3. Simple SVG icons designed within the existing design system

Icons should communicate meaning and should not be added merely to fill empty space.

Avoid mixing multiple unrelated icon styles.

Do not introduce a new icon library without a clear reason.

---

# 17. Font

The primary Persian website font is:

**Vazirmatn**

The font should preferably be served locally.

Recommended structure:

```text
public/fonts/vazirmatn/
```

Use the appropriate font weights required by the design system.

Do not use unrelated Persian fonts unless explicitly approved.

The website must remain RTL and Persian-first.

---

# 18. Favicon and Browser Assets

Company favicon assets should be maintained separately from normal page imagery.

Recommended:

```text
public/favicon/
```

Include appropriate favicon formats if required by the Astro implementation.

The favicon must represent the company brand and should not be replaced with a product logo unless explicitly required.

---

# 19. Asset References

Components should reference canonical assets rather than copying files.

For example:

```text
/products/gammadesk/dashboard.webp
```

should remain the single source for that screenshot.

If the same screenshot is needed on multiple pages, reference the same asset.

Do not create:

```text
dashboard.webp
dashboard-copy.webp
dashboard-home.webp
dashboard-feature.webp
```

when they are actually the same image.

---

# 20. Responsive Images

Important images should support responsive layouts.

Consider:

* desktop
* tablet
* mobile

For complex screenshots, a mobile-specific crop may be preferable to simply shrinking the desktop image.

Example:

```text
dashboard.webp
dashboard-mobile.webp
```

Only create a separate mobile asset when it materially improves the user experience.

---

# 21. Asset Selection by Page Type

### Homepage

Prioritize:

* company identity
* product portfolio
* strongest GammaDesk imagery
* selected ZED EAM imagery
* selected Landa imagery
* Gamma.Kernel identity
* company credibility assets

Do not make the homepage visually belong exclusively to GammaDesk.

### Product Pages

Prioritize:

* product logo
* product hero
* actual product UI
* key capabilities
* relevant screenshots
* product-specific resources

### Feature Pages

Prioritize:

* feature-specific screenshots
* diagrams where useful
* related product imagery

### Articles

Use only imagery relevant to the article topic.

### Company Pages

Prioritize:

* authentic company imagery
* customer logos
* certifications
* company history visuals

---

# 22. Asset and Brand Consistency

The visual system must consistently communicate:

**دومان سامانه**

with the primary corporate identity:

**Orange + Black + Strong Typography + Clarity + Enterprise Trust**

Product-specific visual accents are allowed, but they must not visually disconnect the product from the company.

The website should feel like one software company with multiple products, not four unrelated websites.

---

# 23. Asset Rules for Agents

When modifying the website:

### MUST

* reuse existing official assets
* preserve official logos
* use Vazirmatn for Persian content
* use descriptive filenames
* optimize production images
* provide meaningful alt text
* keep product assets separated
* preserve the company/product hierarchy
* reuse canonical assets
* inspect existing assets before creating new ones

### MUST NOT

* invent official logos
* invent customer logos
* invent certifications
* replace real screenshots with fake UI
* delete existing official assets without explicit reason
* duplicate assets unnecessarily
* introduce random stock imagery
* change logo proportions
* create a new visual identity for individual pages
* use arbitrary fonts
* add decorative imagery that conflicts with the enterprise brand

---

# 24. Before Creating a New Asset

Before creating or requesting a new asset, the agent must check:

1. Does the asset already exist?
2. Is there an official version?
3. Can an existing asset be reused?
4. Can the requirement be solved through layout/CSS instead?
5. Is a new asset genuinely necessary?

If an official asset is missing, the agent should prefer a clean layout without the asset rather than inventing an official-looking replacement.

---

# 25. Asset Changes Must Be Minimal

An agent working on a specific page must not reorganize, rename, delete, replace, or optimize unrelated assets unless the task explicitly requires it.

Asset changes should be limited to the scope of the task.

For example:

If the task is:

> Fix the GammaDesk hero image on the product page.

The agent must not automatically:

* replace all product images
* rename the entire asset directory
* redesign all product cards
* change company logos
* change fonts
* modify unrelated pages

unless the root cause proves that such changes are necessary.

---

# 26. Final Principle

**Authentic assets first. Reuse before creation. Company identity before decoration.**

The website must present Doman Samaneh as a professional software company with a coherent portfolio of products.

Visual assets should strengthen:

* trust
* product understanding
* technical credibility
* enterprise maturity
* brand recognition

They should never become decoration that competes with the actual products and content.
