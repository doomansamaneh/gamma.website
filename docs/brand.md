# Brand Guidelines — Doman Samaneh

## 1. Company Identity

### Company Name

**دومان سامانه**

The website represents **دومان سامانه** as the company.

The company name must not be replaced by a product name.

**GammaDesk is a product of دومان سامانه, not the company itself.**

### English Company Name

Use:

**Doman Samaneh**

When an English version of the website is introduced, use "Doman Samaneh" consistently unless an official English legal/brand name is provided later.

---

# 2. Company Positioning

دومان سامانه is a software technology company that designs, develops and delivers software products.

The company has multiple products and technology projects serving different markets and use cases.

The website must communicate the company as a **product-oriented software company**, not as a single-product vendor.

The current product portfolio includes:

1. GammaDesk
2. ZED EAM
3. Landa
4. Gamma.Kernel

The relationship is:

```text
دومان سامانه
│
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

This hierarchy must be reflected consistently throughout the website.

---

# 3. Products

## GammaDesk

**GammaDesk** is an enterprise IT Service Management (ITSM) platform.

It is designed for organizations that need structured IT service management and ITIL-aligned processes.

GammaDesk is currently the primary enterprise product of دومان سامانه.

Typical capabilities include:

* Incident Management
* Problem Management
* Change Management
* Service Request Management
* Knowledge Management
* Asset Management
* ITIL-related processes and capabilities

GammaDesk must have its own product identity and product area.

---

## ZED EAM

**ZED EAM** is an Enterprise Asset Management platform.

ZED EAM is an independent product of دومان سامانه.

It must never be presented as a GammaDesk module or feature.

Use the product name consistently as:

**ZED EAM**

---

## Landa

**Landa** is cloud accounting software for small and medium-sized businesses.

Landa is an independent product of دومان سامانه.

It must never be presented as a GammaDesk or ZED EAM module.

Use the product name consistently as:

**Landa**

---

## Gamma.Kernel

**Gamma.Kernel** is an open-source software framework/library developed by دومان سامانه.

It represents the company's software engineering and open-source technology work.

Gamma.Kernel is an independent technology project/product.

Use the name consistently as:

**Gamma.Kernel**

Where appropriate, link to its GitHub repository and technical documentation.

---

# 4. Brand Architecture

The company brand is the common visual and conceptual foundation.

Products may have their own secondary visual identity, but they remain part of the دومان سامانه ecosystem.

The hierarchy is:

```text
Company Brand
      ↓
دومان سامانه
      ↓
Product Identity
      ↓
GammaDesk / ZED EAM / Landa / Gamma.Kernel
```

Do not create four visually unrelated brands.

Do not make GammaDesk's visual identity dominate the entire company website.

The company website must feel coherent even when moving between products.

---

# 5. Primary Brand Colors

The primary company colors are:

* **Orange**
* **Black**

These are the core brand colors of دومان سامانه.

The website must use orange and black as the foundation of its visual identity.

Do not replace the primary brand palette with generic SaaS blue, purple or green.

---

## Orange

Orange is the primary brand accent.

Use orange selectively for:

* Primary CTA buttons
* Important links
* Active navigation states
* Highlights
* Key UI accents
* Icons where appropriate
* Product/company emphasis
* Interactive states

Orange should provide energy and recognition without overwhelming the interface.

Avoid using orange for large amounts of body text.

---

## Black

Black is a primary brand and structural color.

Use black for:

* Primary text
* Strong headings
* Navigation
* Brand elements
* High-contrast sections
* Important visual anchors

Black may also be used as a background for selected sections when it improves visual hierarchy.

Do not make the entire website black.

---

## Supporting Colors

The primary palette may be supported by:

* White
* Neutral grays
* Light surfaces
* Borders
* Subtle status colors

Supporting colors exist to improve usability and readability.

They must not compete with the orange/black brand identity.

---

# 6. Color System

Do not hardcode brand colors throughout components.

Brand colors must be centralized in the design token system.

Use semantic tokens such as:

```css
--color-brand-primary
--color-brand-primary-hover
--color-brand-dark
--color-background
--color-surface
--color-text
--color-text-muted
--color-border
```

The exact color values should be defined centrally.

If the brand orange is changed later, the change should normally require updating the design tokens rather than individual components.

---

# 7. Product Accent Colors

Products may use secondary accent colors when necessary.

However:

**Orange and black remain the company-level brand foundation.**

Product-specific colors must:

* remain visually compatible with the company brand
* not replace the company colors
* not create unrelated visual systems
* be used consistently within that product area

The product color hierarchy should be:

```text
Doman Samaneh
Orange + Black
      ↓
Product identity
      ↓
Optional product-specific accent
```

---

# 8. Typography

## Primary Persian Font

The primary Persian font is:

**Vazirmatn**

Vazirmatn must be used as the primary Persian typeface throughout the website.

Prefer serving the font locally from the project rather than depending on an external font CDN.

Suggested asset location:

```text
public/fonts/vazirmatn/
```

Use the required font weights according to the design system.

---

## Typography Requirements

Typography must support:

* Persian
* Latin
* Mixed Persian/Latin text
* Product names
* Technical terminology
* Numbers
* URLs
* Code-like identifiers

Product names such as:

* GammaDesk
* ZED EAM
* Landa
* Gamma.Kernel

must render correctly alongside Persian text.

Do not force Latin product names into a Persian-only typography treatment that makes them difficult to read.

---

# 9. Persian Language

The current website is Persian-first.

Use:

```text
fa-IR
RTL
```

Persian pages must use:

```html
<html lang="fa-IR" dir="rtl">
```

The site must use natural Persian typography and spacing.

In Persian website content, always write:

**کسب و کار**

Do NOT write:

**کسب‌وکار**

unless this rule is explicitly changed later.

---

# 10. English Readiness

The current implementation does not require complete English content.

However, the architecture and design must remain compatible with future English pages.

Do not create a design that only works correctly in RTL.

Components should support both:

```text
RTL
LTR
```

Use CSS logical properties where appropriate.

---

# 11. Brand Personality

دومان سامانه should feel:

* Professional
* Enterprise
* Technical
* Reliable
* Modern
* Secure
* Mature
* Confident
* Trustworthy

The brand should communicate technical competence without appearing overly complex.

---

# 12. Visual Character

The visual identity should feel like an established software technology company.

Prefer:

* Strong typography
* Clear hierarchy
* Generous whitespace
* Structured layouts
* High-quality screenshots
* Authentic product imagery
* Real company assets
* Restrained use of color
* Consistent components
* Subtle visual details

Avoid:

* Generic SaaS templates
* Excessive gradients
* Neon colors
* Excessive glassmorphism
* Excessive rounded cards
* Excessive shadows
* Excessive animations
* Decorative UI without purpose
* Gaming-style orange/black treatment
* Overly playful visual language

The goal is:

**Enterprise technology with a strong and confident brand identity.**

---

# 13. Logo

The official دومان سامانه logo is the authoritative company logo.

If an official logo asset exists in the project:

* use it
* do not redraw it
* do not replace it
* do not distort it
* do not change its proportions
* do not apply arbitrary effects

Recommended location:

```text
public/images/brand/
```

Possible assets:

```text
logo.svg
logo-dark.svg
favicon.svg
```

The actual available assets in the project take precedence over these example filenames.

---

# 14. Product Logos

Each product should use its official logo when available.

Recommended structure:

```text
public/images/products/
├── gammadesk/
├── zed-eam/
├── landa/
└── gamma-kernel/
```

Do not create artificial product logos.

Do not replace official product logos with text unless an official logo is unavailable.

---

# 15. Official Visual Assets

The following are considered authoritative company/product assets when supplied:

* Company logo
* Product logos
* Product screenshots
* Application screenshots
* Customer logos
* Certification images
* Official photographs
* Official product illustrations

Do not replace these with stock imagery.

Do not generate fake application screenshots.

Do not invent certifications, customer logos or company achievements.

If an official asset exists, prefer it over a placeholder or generated image.

---

# 16. Photography and Imagery

When new imagery is required, prefer:

1. Authentic company/product imagery
2. Real application screenshots
3. Purposeful illustrations
4. High-quality professional photography
5. Stock photography only when genuinely useful

Avoid generic images that make the website look like a template.

Images should support the message rather than simply fill empty space.

---

# 17. Product Presentation

Products should be visually presented as independent products belonging to the same company.

The homepage should introduce:

* GammaDesk
* ZED EAM
* Landa
* Gamma.Kernel

GammaDesk may receive greater prominence because it is currently the primary enterprise product.

However, the other products must have equal architectural status.

---

# 18. Naming Rules

Always use the following product names exactly:

```text
GammaDesk
ZED EAM
Landa
Gamma.Kernel
```

Do not use inconsistent variations such as:

```text
Gamma Desk
Gamma Helpdesk
Zed
ZED
Landa Accounting
Gamma Kernel
GammaKernel
```

unless a specific context explicitly requires a descriptive phrase.

The company name is:

```text
دومان سامانه
```

and should not be replaced with:

```text
GammaDesk
Gamma
Doman
Doman System
```

unless specifically referring to the product or an official English company name.

---

# 19. Brand Voice

The written brand voice should be:

* Professional
* Clear
* Confident
* Technical when appropriate
* Business-oriented
* Trustworthy
* Evidence-based

Avoid:

* exaggerated marketing claims
* empty superlatives
* aggressive sales language
* unnecessary buzzwords
* vague claims without evidence

Prefer explaining:

* what the product does
* who it is for
* what problem it solves
* how it works
* why it is useful
* evidence of experience and capability

---

# 20. Brand Consistency Rule

Before introducing a new visual pattern, ask:

> Can an existing brand or design-system pattern solve this problem?

Prefer consistency over novelty.

Do not introduce a new color, typography style, card style, button style or visual language for an individual page unless there is a clear reason.

---

# 21. Agent Rules

When implementing the website:

1. Treat this document as the authoritative source for brand identity.
2. Do not invent company branding.
3. Do not change the company name.
4. Do not replace the orange/black brand foundation.
5. Do not change the primary Persian font from Vazirmatn.
6. Do not invent product names.
7. Do not merge products into each other.
8. Do not treat GammaDesk as the company.
9. Do not replace official assets with generated or stock assets.
10. Centralize brand colors in design tokens.
11. Keep product identities compatible with the company identity.
12. Do not modify brand rules while implementing individual pages unless explicitly instructed.

---

# 22. Source of Truth

For brand-related decisions, use this priority:

```text
1. Official assets supplied in the project
2. This brand.md
3. docs/design-system.md
4. Other project documentation
5. Existing implementation
```

If the existing implementation conflicts with this document, update the implementation rather than changing the brand rules.

---

# Core Brand Principle

**دومان سامانه is the brand.**

**GammaDesk, ZED EAM, Landa and Gamma.Kernel are products/projects of دومان سامانه.**

The visual identity is built on:

**Orange + Black + Strong Typography + Clarity + Enterprise Trust**
