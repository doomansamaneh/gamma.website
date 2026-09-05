# Build ZED EAM Product & Module Pages

## Objective

Extend the Doman Samaneh corporate website so that ZED EAM has:

1. One main product overview page.
2. Separate dedicated pages for each ZED EAM module/subsystem.
3. A scalable information architecture where new modules can be added later without redesigning the architecture.
4. Links to the dedicated ZED ecosystem website where deeper product information is available:

`https://zedcore.ir/`

The corporate website should provide the **high-level product positioning and module overview**.

`zedcore.ir` should be treated as the **specialized product destination** for deeper ZED information whenever appropriate.

Do NOT turn the Doman corporate website into a full technical/product documentation website.

---

# 1. IMPORTANT: Inspect the Existing ZED Product First

Before creating any pages:

Inspect the existing project and identify all real ZED EAM modules/subsystems.

Look for:

- ZED source code if available in the project
- existing product documentation
- menu structures
- domain models
- modules
- bounded contexts
- namespaces
- database schemas
- existing screenshots
- existing UI
- terminology
- product descriptions
- existing ZED website references

Do NOT invent module names.

Do NOT assume that a generic EAM module list is the actual ZED architecture.

The module list must be based on actual ZED information available in the project or from:

`https://zedcore.ir/`

If information is unavailable, create the architecture so modules can easily be added later, but do not fabricate content.

---

# 2. Information Architecture

The desired structure is:

```text
دومان سامانه
    │
    └── محصولات
          │
          └── ZED EAM
                │
                ├── معرفی ZED EAM
                │
                ├── ماژول‌ها / زیرسیستم‌ها
                │       │
                │       ├── Module A
                │       ├── Module B
                │       ├── Module C
                │       ├── Module D
                │       └── ...
                │
                └── سایت تخصصی ZED
                        ↓
                  https://zedcore.ir/
```

Main product:

`/products/zed-eam/`

Module pages:

`/products/zed-eam/modules/[module-slug]/`

Use the existing project's URL conventions if they differ.

Do not create unnecessary nested URLs if the project already has a better established routing convention.

---

# 3. Main ZED EAM Page

The existing ZED EAM page should remain the **overview page**.

Its responsibility is:

- Explain what ZED EAM is.
- Explain the EAM positioning.
- Explain the overall value proposition.
- Introduce the major modules.
- Give a high-level view of the product architecture.
- Link to individual module pages.
- Provide a link to the specialized ZED website.

It should NOT contain every detail of every module.

---

# 4. ZED Module Navigation

Create a dedicated ZED module navigation component.

Example:

```text
ZED EAM

معرفی
ماژول‌ها
────────────
مدیریت دارایی
نگهداری و تعمیرات
...
────────────
سایت تخصصی ZED
```

The exact modules must come from the real ZED product structure.

The navigation must be reusable across:

- ZED overview
- module pages
- potentially future ZED pages

Do not duplicate the module list in multiple `.astro` files.

---

# 5. Module Data Model

Create a centralized data structure.

For example:

```text
src/data/products/zed-eam/
├── index.ts
└── modules.ts
```

The exact location should follow the existing project architecture.

Each module should have a structure similar to:

```ts
{
  slug: "...",
  name: "...",
  shortDescription: "...",
  description: "...",
  href: "/products/zed-eam/modules/...",
  icon: "...",
  features: [...],
  screenshots: [...],
  externalUrl: "https://zedcore.ir/..."
}
```

Only include fields that are actually needed.

Important:

The data model must allow adding a new module by adding data rather than rewriting the page architecture.

---

# 6. Module Pages

Every module must have its own page.

Each page should answer:

1. این زیرسیستم چیست؟
2. چه مسئله‌ای را حل می‌کند؟
3. چه فرآیندی را مدیریت می‌کند؟
4. مهم‌ترین قابلیت‌های آن چیست؟
5. این زیرسیستم چگونه با ZED EAM ارتباط دارد؟
6. چه اطلاعات یا خروجی‌هایی ارائه می‌دهد؟
7. برای چه کاربران/واحدهایی کاربرد دارد؟
8. برای اطلاعات بیشتر کاربر را به کجا هدایت کنیم؟

---

# 7. Standard Module Page Structure

All module pages should follow a common structural pattern.

However, the content of each page must be specific to that module.

Recommended structure:

### 1. Breadcrumb

```text
خانه / محصولات / ZED EAM / [نام ماژول]
```

### 2. Hero

Include:

- ZED EAM identifier
- module name
- clear H1
- short description
- primary CTA if appropriate
- link to deeper information on ZED Core

Example pattern:

```text
ZED EAM

[نام زیرسیستم]

[یک توضیح کوتاه و دقیق درباره مسئله‌ای که این زیرسیستم حل می‌کند]

آشنایی بیشتر
```

Do not use generic marketing copy.

---

# 8. Module Introduction

Explain the purpose of the module.

Focus on the business/process problem.

Do not immediately dump a feature list.

Example structure:

```text
این زیرسیستم چه مسئله‌ای را حل می‌کند؟

[2–3 short paragraphs]
```

Keep the text concise and enterprise-oriented.

---

# 9. Capabilities

Create a section:

`قابلیت‌های [نام ماژول]`

Group capabilities logically.

Do NOT create 20 identical cards.

Prefer 3–6 meaningful capability groups.

For example:

```text
مدیریت اطلاعات
    ...

مدیریت فرآیند
    ...

گزارش‌ها
    ...
```

The exact groups must be derived from the actual module.

---

# 10. Process / Workflow

Where applicable, explain the business workflow.

For example:

```text
ثبت درخواست
      ↓
بررسی
      ↓
ارجاع
      ↓
اجرا
      ↓
ثبت نتیجه
      ↓
اختتام
```

Use diagrams only when they accurately represent the real process.

Do NOT create fictional workflows simply to make the page visually interesting.

---

# 11. Screenshots

Inspect the project for real ZED screenshots.

If screenshots are available:

Use them.

Possible presentation:

- large primary screenshot
- supporting screenshots
- screenshot gallery
- annotated areas only where useful

Do NOT:

- fabricate screens
- generate fake dashboards
- invent numbers
- distort screenshots
- add fake UI elements

If screenshots are unavailable, use a restrained visual treatment instead.

---

# 12. Integration With ZED EAM

Every module page should show where it sits within the overall ZED architecture.

For example:

```text
ZED EAM
   │
   ├── Module A
   │
   ├── Module B
   │
   └── Module C
```

Highlight the current module.

This helps users understand that the module is not an isolated application.

Do not expose technical architecture unless the module genuinely requires it.

---

# 13. Relationship Between Modules

Where meaningful, show related modules.

For example:

`ماژول‌های مرتبط`

with 2–4 related modules.

Each item should link to its own page.

Do not recommend unrelated modules simply to fill space.

---

# 14. ZED Core External Link

This is an important part of the architecture.

Use:

`https://zedcore.ir/`

as the specialized ZED destination.

The corporate page should not attempt to replace ZED Core.

Possible CTA:

`اطلاعات بیشتر درباره ZED`

Link:

`https://zedcore.ir/`

If a specific module has a dedicated page on ZED Core and the URL is known and verified, link directly to that page.

Do NOT invent deep URLs.

If the exact external URL is unknown, link to:

`https://zedcore.ir/`

---

# 15. External Link Behavior

External ZED links should be visually distinguishable from internal navigation.

For example:

`مشاهده جزئیات در سایت ZED ↗`

Use:

```html
target="_blank" rel="noopener noreferrer"
```

only if that matches the site's existing external-link convention.

Do not force a new tab if the site's existing UX intentionally keeps external navigation in the same tab.

Follow the existing project convention.

---

# 16. CTA Strategy

Use two levels of CTA.

### Internal CTA

For corporate visitors:

`درخواست دمو`

→ existing Doman Samaneh demo/contact route.

### External CTA

For users who want deeper product information:

`مشاهده سایت تخصصی ZED`

→

`https://zedcore.ir/`

The two CTAs serve different purposes.

Do not make the external link compete visually with the main corporate CTA.

---

# 17. Main ZED Page Module Section

The main ZED EAM page must contain a dedicated module section.

Suggested heading:

`زیرسیستم‌های ZED EAM`

Supporting text:

`ZED EAM مجموعه‌ای از زیرسیستم‌های مرتبط را برای مدیریت دارایی‌ها و فرآیندهای سازمانی در اختیار قرار می‌دهد.`

Then display the real modules.

Each module item should contain:

- module name
- one-sentence description
- `مشاهده زیرسیستم ←`

Clicking it opens:

`/products/zed-eam/modules/[slug]/`

Do not put every module's detailed features on this page.

---

# 18. Module Cards

Do not make all cards visually identical generic SaaS cards.

The module list should feel like an enterprise software architecture.

Possible visual treatment:

```text
[Module Number / Icon]

نام زیرسیستم

توضیح کوتاه

مشاهده زیرسیستم →
```

Use subtle borders and typography.

Avoid:

- huge shadows
- excessive border radius
- gradients
- glassmorphism
- colorful backgrounds
- decorative illustrations

---

# 19. Module Page Template

Implement one reusable module page template.

Conceptually:

```astro
<ZedEamModulePage
  module={module}
/>
```

or use an equivalent Astro/content architecture appropriate to the existing project.

The important requirement is:

**Do not create separate hand-written page structures for every module.**

The page template should provide the common structure.

Module-specific content should come from data.

---

# 20. Recommended Components

Reuse existing components wherever possible.

If they do not already exist, create:

```text
src/components/zed-eam/
├── ZedEamHero.astro
├── ZedEamModuleGrid.astro
├── ZedEamModuleNav.astro
├── ZedEamModuleHero.astro
├── ZedEamModuleCapabilities.astro
├── ZedEamModuleWorkflow.astro
├── ZedEamModuleScreenshots.astro
├── ZedEamRelatedModules.astro
├── ZedEamExternalCTA.astro
└── ZedEamCTA.astro
```

Do not create duplicates if equivalent generic components already exist.

For example, if the project already has:

`FeatureGrid.astro`

reuse it.

---

# 21. Dynamic Routes

If the project architecture supports Astro dynamic routes, prefer:

```text
src/pages/products/zed-eam/modules/[slug].astro
```

The page should:

1. Load the module data.
2. Generate the appropriate module page.
3. Return 404 for an unknown module.
4. Generate appropriate SEO metadata.
5. Generate breadcrumbs.
6. Render the reusable module template.

Do not duplicate page files for every module.

---

# 22. SEO

Each module must have its own SEO metadata.

Example:

Title:

`[نام ماژول] | ZED EAM | دومان سامانه`

Description:

A unique description specifically written for that module.

Do not use the same description for all modules.

Each module page must have:

- one H1
- meaningful H2 hierarchy
- canonical URL if the existing SEO architecture supports it
- appropriate Open Graph metadata if already implemented
- descriptive image alt text

Avoid keyword stuffing.

---

# 23. URL Architecture

Target structure:

```text
/products/zed-eam/
/products/zed-eam/modules/
/products/zed-eam/modules/module-a/
/products/zed-eam/modules/module-b/
/products/zed-eam/modules/module-c/
```

The `/modules/` index page is optional.

If implemented, it should simply introduce and organize all ZED modules.

Do not create a page merely because the URL structure allows it.

---

# 24. `/modules/` Index Page

If useful, create:

`/products/zed-eam/modules/`

with:

Hero:

`زیرسیستم‌های ZED EAM`

Then:

- module categories
- module grid
- short descriptions
- links to individual module pages

This page acts as the directory for the ZED subsystem architecture.

---

# 25. Relationship With ZED Core

Clearly distinguish the two websites.

### Doman Samaneh

Purpose:

**Company + portfolio + high-level product positioning**

### ZED Core

Purpose:

**Dedicated ZED product website + deeper product information**

Therefore:

Doman ZED pages should NOT become enormous.

Use them to:

- establish trust
- explain the product
- explain each subsystem
- support SEO
- direct interested visitors to ZED Core

Use ZED Core for:

- detailed product information
- extensive feature explanations
- deeper documentation
- product-specific resources
- detailed product marketing

---

# 26. Visual Design

Follow the existing Doman Samaneh design system.

Brand colors:

```text
Orange: #EF3F23
Dark:   #231F20
White:  #FFFFFF
```

Use Vazirmatn.

Use orange primarily for:

- CTA
- active states
- links
- small accents
- selected module indicators

Do not make the entire ZED section orange.

---

# 27. ZED Product Identity

ZED should have its own visual personality within the company system.

It should feel:

- industrial
- enterprise
- structured
- technical
- reliable
- operational
- data-oriented

But it must remain visually related to:

- GammaDesk
- Landa
- Gamma.Kernel

Do not introduce an unrelated color system.

---

# 28. Mobile

On mobile:

- module navigation should collapse cleanly
- module list becomes one column
- breadcrumbs should remain readable
- screenshots must not overflow
- external ZED CTA must remain obvious
- no horizontal scrolling
- no desktop-style mega layouts

---

# 29. Accessibility

All module pages must have:

- semantic headings
- accessible navigation
- keyboard-accessible links
- visible focus states
- meaningful alt text
- correct RTL behavior
- adequate contrast

External links should be identifiable to screen readers where appropriate.

---

# 30. Performance

Keep everything static-first.

Do not introduce JavaScript unless necessary.

Prefer:

- Astro static rendering
- CSS
- optimized images
- lazy-loaded screenshots
- reusable components

Do not add animation libraries.

---

# 31. Content Rules

This is critical.

Never invent:

- module capabilities
- integrations
- customer names
- statistics
- performance numbers
- certifications
- awards
- AI features
- IoT features
- mobile apps
- APIs
- ERP integrations

unless verified.

If the project contains a feature but it is not sufficiently documented, describe it conservatively.

For example:

Instead of:

`سیستم به صورت هوشمند بهترین زمان تعمیر را پیش‌بینی می‌کند`

use only such a claim if predictive functionality actually exists.

---

# 32. Terminology

Use consistent Persian terminology throughout ZED pages.

Prefer:

- دارایی
- تجهیزات
- نگهداری و تعمیرات
- دستورکار
- درخواست
- فعالیت
- گردش کار
- سوابق
- اطلاعات فنی
- چرخه عمر
- زیرسیستم
- ماژول

Do not randomly switch between English and Persian terminology.

Use English terminology in parentheses only where it helps technical clarity:

`مدیریت دارایی سازمانی (EAM)`

---

# 33. Cross Linking

Implement strong internal linking.

From ZED overview:

→ every module page

From each module page:

→ ZED overview
→ related modules
→ request demo
→ ZED Core

From other Doman pages:

→ ZED EAM where relevant

This creates a clear information architecture for both users and search engines.

---

# 34. External Website Link

The official external ZED destination is:

`https://zedcore.ir/`

Use it in:

- ZED overview
- module pages
- possibly the Products mega menu if appropriate

Do not overuse the external link.

The main corporate website must still feel complete even if the user never leaves it.

---

# 35. Do Not Duplicate ZED Core

Do not copy the entire content of ZED Core into the corporate website.

Instead:

1. Understand ZED Core.
2. Extract accurate high-level positioning.
3. Create concise corporate content.
4. Link to ZED Core for deeper information.

Avoid duplicate long-form content across both domains.

---

# 36. Final Page Hierarchy

The final architecture should look approximately like:

```text
ZED EAM
│
├── Overview
│
├── Modules
│   │
│   ├── Module 1
│   │   ├── Introduction
│   │   ├── Capabilities
│   │   ├── Workflow
│   │   ├── Screenshots
│   │   └── Related Modules
│   │
│   ├── Module 2
│   │   └── ...
│   │
│   ├── Module 3
│   │   └── ...
│   │
│   └── Module N
│
└── ZED Core
      ↓
  https://zedcore.ir/
```

---

# 37. Final Acceptance Criteria

The implementation is complete only when:

### Architecture

- ZED has a dedicated product page.
- ZED modules are represented as first-class content.
- Module data is centralized.
- Module pages use a reusable template.
- Adding a new module does not require copying an entire page.

### UX

- Users can discover all modules from the main ZED page.
- Users can navigate between related modules.
- Every module has its own URL.
- Users can easily reach ZED Core.
- Request Demo remains a clear corporate CTA.

### Content

- Module names are based on real ZED information.
- Capabilities are not fabricated.
- Content is concise but useful.
- Each module has a clear purpose.

### SEO

- Every module has unique metadata.
- Every module has one H1.
- Internal linking is implemented.
- URLs are clean and hierarchical.

### Design

- ZED belongs visually to Doman Samaneh.
- The page looks enterprise-grade.
- It does not look like a generic SaaS template.
- Screenshots, if available, are real.
- No fake statistics or fake UI.

### Technical

- Astro build succeeds.
- No broken imports.
- No broken links.
- No broken images.
- No console errors.
- Responsive behavior works.
- Unknown module URLs return 404.
- Existing pages remain unaffected.

---

# Final Instruction

Do not start by designing individual module pages one by one.

First:

1. Inspect the real ZED product structure.
2. Identify the actual modules/subsystems.
3. Build the centralized module data model.
4. Build the reusable module template.
5. Build the ZED module navigation.
6. Build the module index.
7. Generate the individual module routes.
8. Add links to `https://zedcore.ir/`.
9. Then refine the content and visuals of each module.

The architecture is more important than the first batch of page content.

The final result should allow Doman Samaneh to continuously add new ZED modules without restructuring the website.
