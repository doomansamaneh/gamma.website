# Design System

## Purpose

This design system defines the visual language and interaction principles for the company website and its products.

The website must present a consistent corporate identity while allowing individual products to have their own visual accents.

GammaItsm is currently the primary product, but the design system must support additional products in the future.

---

## Brand Personality

The company website should feel:

- Professional
- Enterprise
- Technical
- Reliable
- Modern
- Secure
- Mature
- Trustworthy

The visual language should communicate the confidence expected from a company providing software solutions to organizations and enterprise customers.

Avoid designs that feel:

- Playful
- Childish
- Consumer-oriented
- Overly promotional
- Template-based
- Trend-driven without a business purpose

---

## Brand Architecture

The visual identity has two levels:

```text
Company Brand
│
├── GammaItsm
│   └── Product Accent
│
├── Product 2
│   └── Product Accent
│
└── Future Products
    └── Product Accent
```

The company brand should provide the common visual foundation.

Individual products may use their own accent colors or visual elements, but they must remain visually compatible with the corporate identity.

Do not design the entire website around GammaItsm-specific colors if doing so would make future products difficult to introduce.

---

## Visual Principles

1. Strong typography
2. Generous whitespace
3. Clear visual hierarchy
4. Restrained use of color
5. Consistent spacing
6. Subtle interaction effects
7. Minimal decoration
8. Strong alignment and visual rhythm
9. Consistent component behavior
10. Content should remain the primary focus

Visual elements should support communication rather than compete with it.

---

## Design Tokens

Global design values must be centralized using CSS variables.

Define and maintain tokens for:

- Brand colors
- Product accent colors
- Semantic colors
- Typography
- Font sizes
- Font weights
- Line heights
- Spacing
- Border radius
- Shadows
- Container widths
- Breakpoints
- Transitions

All reusable components must consume these tokens instead of defining arbitrary values repeatedly.

Example:

```css
:root {
  /* Brand */
  --color-brand: #ef3f23;
  --color-brand-hover: #d9361c;
  --color-brand-subtle: #fff1ed;
  --color-brand-dark: #231f20;

  /* Core */
  --color-white: #ffffff;
  --color-black: #000000;

  /* Text */
  --color-text-primary: #231f20;
  --color-text-secondary: #666666;
  --color-text-muted: #888888;

  /* Background */
  --color-background: #ffffff;
  --color-surface: #f7f7f7;
  --color-surface-dark: #231f20;

  /* Border */
  --color-border: #e5e5e5;

  /* Semantic */
  --color-success: ...;
  --color-warning: ...;
  --color-error: ...;
  --color-info: ...;

  /* Product accents */
  --color-GammaItsm-accent: #ef3f23;
  --color-zed-accent: ...;
  --color-landa-accent: ...;
  --color-gamma-kernel-accent: ...;

  /* Typography */
  --font-family-sans: "Vazirmatn", sans-serif;

  --font-size-xs: ...;
  --font-size-sm: ...;
  --font-size-md: ...;
  --font-size-lg: ...;
  --font-size-xl: ...;
  --font-size-2xl: ...;
  --font-size-3xl: ...;

  --font-weight-regular: ...;
  --font-weight-medium: ...;
  --font-weight-semibold: ...;
  --font-weight-bold: ...;

  --line-height-tight: ...;
  --line-height-normal: ...;
  --line-height-relaxed: ...;

  /* Spacing */
  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;
  --space-xl: ...;
  --space-2xl: ...;

  /* Radius */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  /* Shadows */
  --shadow-sm: ...;
  --shadow-md: ...;

  /* Layout */
  --container-max-width: ...;

  /* Transitions */
  --transition-fast: ...;
  --transition-normal: ...;
}
```

### Token Rules

- Do not hardcode the same visual value repeatedly across components.
- Do not introduce new brand colors inside individual components.
- If a new reusable visual value is required, first determine whether it belongs in the global design token system.
- Product-specific colors must be defined centrally as product accent tokens.
- Components must reference semantic tokens rather than raw color values wherever practical.
- Keep the token system small, intentional, and maintainable.
- Do not create tokens for every individual pixel value.
- Avoid unnecessary token duplication.

---

## Color

The visual identity of Doman Samaneh is based primarily on **dark charcoal/black and the official brand orange-red**.

### Brand Colors

The primary brand color is:

```text
Brand Orange-Red: #EF3F23
```

The primary dark color is:

```text
Brand Dark: #231F20
```

White is used as the primary background and contrast color.

The official company and product logos are authoritative brand assets. Their colors, proportions, typography, and visual form must not be altered.

### Color Roles

The color system must have clear semantic roles:

- Primary brand
- Primary brand hover/active
- Primary brand subtle background
- Brand dark
- Product accent
- Background
- Surface
- Primary text
- Secondary text
- Muted text
- Border
- Success
- Warning
- Error
- Information

The brand orange-red is primarily an **accent and interaction color**, not a color that should dominate every section of the website.

Use it for elements such as:

- Primary CTAs
- Important links
- Active navigation states
- Selected states
- Small visual highlights
- Product highlights
- Icons or decorative accents where appropriate

Use dark/black and white/neutral surfaces as the primary structural colors.

Avoid making large portions of the website continuously orange unless a specific design section intentionally requires it.

### Product Accent Colors

Products may have their own accent color when their approved visual identity requires it.

Product accents must be implemented through centralized tokens:

```css
--color-GammaItsm-accent: #ef3f23;
--color-zed-accent: ...;
--color-landa-accent: ...;
--color-gamma-kernel-accent: ...;
```

Do not scatter product-specific hex values throughout components.

Do not invent product accent colors before the product's official visual identity has been established.

If a product does not require a distinct accent color, it may inherit the company brand color.

### Color Usage Rules

- Use color to communicate hierarchy, interaction, status, and brand identity.
- Maintain strong contrast and accessibility.
- Prefer restrained use of accent colors.
- Avoid excessive gradients.
- Avoid neon colors.
- Avoid multiple competing accent colors.
- Avoid decorative color usage without a clear purpose.
- Do not introduce arbitrary colors simply to make a section visually different.
- Product pages should feel visually related to the Doman Samaneh brand while retaining their own product identity where appropriate.
- The website should not look like an "orange SaaS template".
- Color should support typography, layout, content, and product identity rather than dominate them.

### Product Identity Principle

The hierarchy of visual identity is:

```text
Doman Samaneh
    ↓
Company Brand
Black / Dark Charcoal + Brand Orange-Red
    ↓
Product
Product-specific identity and accent
    ↓
Page
Section-specific visual treatment
```

Product colors must never override or disconnect the product from the parent Doman Samaneh brand.

## Typography

Typography is a major part of the visual identity.

Prioritize:

- Readability
- Strong hierarchy
- Appropriate line height
- Consistent font weights
- Excellent Persian and Latin rendering

Define a clear hierarchy for:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
```

Headings should be visually strong without becoming oversized or decorative.

Body text should remain comfortable to read on desktop and mobile.

---

## Layout

Use a responsive container with a consistent maximum width.

Prefer:

- CSS Grid
- Flexbox
- CSS variables
- Responsive typography
- Responsive spacing
- Fluid layouts

Avoid:

- Fixed-width layouts
- Excessive nested containers
- Arbitrary pixel positioning
- Layouts that depend on JavaScript

The layout should work naturally across:

- Mobile
- Tablet
- Laptop
- Large desktop screens

---

## Spacing

Use a consistent spacing scale.

Sections should have generous vertical rhythm.

Do not manually choose unrelated spacing values for every section.

Spacing should communicate hierarchy:

```text
Page
  ↓
Section
  ↓
Heading
  ↓
Content
  ↓
Actions
```

Whitespace is part of the design, not unused space.

---

## Components

Components must share consistent:

- Border radius
- Shadows
- Spacing
- Typography
- Button styles
- Card styles
- Form styles
- Interaction states

Core components may include:

- Header
- Navigation
- Footer
- Button
- Link
- Hero
- Section
- Card
- ProductCard
- FeatureCard
- ArticleCard
- CTA
- Breadcrumb
- FAQ
- LogoCloud
- VideoCard
- ScreenshotGallery
- Form controls

Do not introduce a new visual style for every section.

A component should have one consistent visual language unless a clear semantic reason requires a variant.

---

## Buttons

Buttons should have a small number of consistent variants.

For example:

- Primary
- Secondary
- Outline
- Text / Ghost

Buttons must have clear:

- Hover state
- Focus state
- Active state
- Disabled state

Do not create unique button designs for individual pages.

---

## Cards

Cards should be visually restrained.

Use cards when they improve content organization.

Avoid wrapping every piece of content in a card.

Card variants should be limited and reusable.

Cards may use:

- Border
- Subtle shadow
- Surface contrast
- Minimal hover interaction

Avoid excessive shadows and decorative effects.

---

## Product Identity

Products may have a product-specific visual accent.

For example:

```text
Company
    └── Corporate Design Tokens

GammaItsm
    └── GammaItsm Accent Tokens

Product B
    └── Product B Accent Tokens
```

Product pages may emphasize their product identity more strongly than company pages.

However:

- Header structure must remain consistent
- Typography must remain consistent
- Layout principles must remain consistent
- Core components must remain consistent
- Accessibility standards must remain consistent

Changing product identity must not feel like navigating to a completely unrelated website.

---

## Hero Sections

Hero sections should communicate:

1. What the page/product is
2. Why it matters
3. What the visitor should do next

Avoid hero sections that are primarily decorative.

Use strong typography, clear hierarchy, meaningful imagery, and focused calls to action.

Do not overload heroes with multiple competing messages.

---

## Imagery

Images should support the product or company story.

Prefer:

- Real product screenshots
- Authentic company imagery
- Relevant professional photography
- Purposeful illustrations
- Clean technical visuals

Avoid generic stock imagery when it does not add meaning.

Product screenshots should be presented clearly and consistently.

Decorative images must not interfere with content readability or performance.

---

## Animation

Animation should be subtle and purposeful.

Use animation to:

- Communicate state changes
- Improve perceived continuity
- Provide feedback
- Add restrained visual polish

Avoid:

- Excessive parallax
- Continuous animations
- Distracting motion
- Large animated backgrounds
- Animation that delays content visibility
- Animation that exists only because it is visually impressive

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* reduce or disable non-essential motion */
}
```

---

## Interaction

Interactive elements must provide clear visual feedback.

States should be distinguishable:

```text
Default
Hover
Focus
Active
Disabled
```

Focus states must never be removed merely for visual reasons.

---

## Accessibility

Accessibility is a design requirement, not a final QA step.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Meaningful alt text
- Accessible forms
- Correct heading hierarchy
- Accessible navigation
- Appropriate link text
- Reduced-motion support

Do not communicate important information through color alone.

---

## Responsive Design

Design mobile-first.

The website must remain usable at small viewport sizes without requiring horizontal scrolling.

Responsive behavior should be intentional for:

- Navigation
- Typography
- Grid layouts
- Cards
- Images
- Forms
- Tables
- Hero sections
- CTA sections

Do not simply shrink desktop layouts for mobile.

---

## Dark Mode

Do not implement dark mode unless there is a clear product or brand requirement.

If dark mode is introduced later, it must be designed as a complete theme using the design-token system rather than individual component overrides.

---

## Performance

Visual design must not compromise performance.

Avoid unnecessary:

- Large background images
- Web fonts
- Animation libraries
- Icon libraries
- Client-side UI frameworks
- Third-party visual components

Prefer CSS-based effects where practical.

---

## Consistency Rule

When designing a new page, reuse existing components and patterns before creating new ones.

Before introducing a new visual pattern, ask:

> "Does an existing component already solve this problem?"

If yes, reuse or extend it.

If no, create a reusable component only when the pattern is likely to appear again.

---

## Design Maturity

The website should feel like a mature enterprise software company rather than a startup landing-page template.

Prefer:

- Clarity over decoration
- Consistency over novelty
- Substance over visual effects
- Trust over hype
- Product evidence over marketing exaggeration

The design should remain professional and credible even when viewed without animation or decorative effects.
