# SEO Strategy

## 1. Primary Objective

Build long-term organic search visibility for **دومان سامانه** and its product portfolio while maintaining high-quality, useful, and trustworthy content.

The website represents a software company with multiple products:

- GammaItsm
- ZED EAM
- Landa
- Gamma.Kernel

SEO must therefore support both:

- company-level searches
- product-level searches
- feature-level searches
- educational/resource searches

GammaItsm is currently an important product, but the SEO architecture must not make the entire website appear to belong exclusively to GammaItsm.

---

# 2. SEO Principles

SEO must follow these principles:

- Search intent first
- Useful content first
- Technical correctness
- Clear information architecture
- Strong internal linking
- Unique content
- Fast performance
- Semantic HTML
- Accessible content
- No keyword stuffing

Do not create pages only for search engines.

Every indexable page must provide meaningful value to a user.

---

# 3. Technical SEO

Every indexable page must include:

- unique `<title>`
- unique meta description
- canonical URL
- Open Graph metadata
- Twitter/X metadata where appropriate
- semantic HTML
- correct heading hierarchy
- sitemap
- robots.txt
- appropriate language declaration
- correct RTL/LTR direction
- index/follow directives where appropriate

The generated HTML must be crawlable without requiring client-side JavaScript.

---

# 4. Page Titles

Titles must describe the actual page.

Titles should be concise, natural, and useful.

Do not append the same long marketing phrase to every page.

Examples:

```text
GammaItsm | سامانه مدیریت خدمات فناوری اطلاعات
مدیریت رخداد | GammaItsm
نرم افزار مدیریت دارایی سازمانی | ZED EAM
نرم افزار حسابداری آنلاین لاندا | Landa
Gamma.Kernel | Enterprise .NET Framework
```

The exact title should be optimized based on the actual content and search intent of each page.

---

# 5. Meta Descriptions

Every indexable page should have a unique meta description.

Meta descriptions must:

- describe the actual page
- communicate the primary value
- be written for users
- avoid keyword stuffing
- avoid repeating the same text across pages

Do not generate meaningless descriptions solely to satisfy a character count.

---

# 6. Canonical URLs

Every indexable page must have a canonical URL.

Canonical URLs must use the preferred public URL.

Avoid duplicate URLs caused by:

- query parameters
- tracking parameters
- alternate routes
- trailing slash inconsistencies
- duplicate content paths

The canonical URL must represent the primary version of the page.

---

# 7. URL Structure

URLs must be:

- lowercase
- stable
- descriptive
- readable
- based on English slugs
- independent of Persian text
- independent of implementation details

Recommended structure:

```text
/products
/products/GammaItsm
/products/GammaItsm/features
/products/GammaItsm/features/incident-management

/products/zed-eam
/products/zed-eam/features

/products/landa
/products/landa/features

/products/gamma-kernel

/resources/articles
/resources/articles/article-slug
/resources/videos
/resources/videos/video-slug
/resources/itil
/resources/itil/topic-slug
/resources/faq

/company/about
/company/customers
/company/history
/company/mission
/company/areas
/company/why-us
/company/certifications

/contact
```

Do not create URLs based on the current visual navigation alone.

URLs should represent the underlying business/content structure.

---

# 8. Multi-Product SEO

Each product is an independent SEO entity.

The four products are:

- GammaItsm
- ZED EAM
- Landa
- Gamma.Kernel

Each product should have:

- unique title
- unique description
- unique landing page
- unique keywords/search intent
- product-specific content
- product-specific internal links
- appropriate structured data

Do not create nearly identical product pages with only the product name changed.

Each product page must communicate its actual purpose, audience, capabilities, and value.

---

# 9. Product Feature SEO

Features belong to their products.

For example:

```text
/products/GammaItsm/features/incident-management
/products/GammaItsm/features/problem-management
```

A feature page should contain meaningful information such as:

- what the feature does
- who needs it
- key capabilities
- practical use cases
- screenshots where appropriate
- related features
- related articles
- related videos
- relevant ITIL resources
- product CTA

Do not create thin feature pages containing only a title and a few marketing sentences.

---

# 10. Content SEO

Content must satisfy search intent.

Prefer:

- useful explanations
- specific terminology
- real use cases
- product expertise
- technical credibility
- practical examples
- clear comparisons where appropriate
- authoritative company knowledge

Avoid:

- keyword stuffing
- duplicated pages
- doorway pages
- meaningless SEO text
- artificial keyword variations
- automatically generated low-value pages

---

# 11. Persian SEO

The current website is Persian-first.

Use:

```html
<html lang="fa-IR" dir="rtl"></html>
```

Persian content must use natural Persian language.

Important terminology must remain consistent.

For example:

**کسب و کار**

must be written with a space, not:

**کسب‌وکار**

Persian and English product names should be written consistently:

- GammaItsm
- ZED EAM
- Landa
- Gamma.Kernel
- دومان سامانه

Do not create unnecessary variations of product names for SEO purposes.

---

# 12. Future English SEO

The architecture must remain ready for a future English version.

English pages should use:

```text
en
```

or an equivalent documented language structure.

The content architecture must not require rewriting the application architecture when English is introduced.

Persian and English should have:

- separate metadata
- appropriate language attributes
- appropriate canonical URLs
- appropriate alternate language relationships where implemented

Do not create English pages until English content is actually available.

---

# 13. Heading Structure

Use semantic heading hierarchy.

Normally:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
      └── H3
```

Every important indexable page should normally have one clear primary H1.

Do not use headings only for visual styling.

Do not skip heading levels without a structural reason.

---

# 14. Structured Data

Use Schema.org structured data where genuinely applicable.

Potential schemas include:

- Organization
- WebSite
- SoftwareApplication
- Product
- Article
- BreadcrumbList
- FAQPage
- VideoObject

Structured data must accurately represent visible page content.

Never add structured data simply because it may improve search appearance.

Never:

- invent ratings
- invent reviews
- invent prices
- invent FAQs
- mark hidden content as visible
- claim unsupported features
- claim certifications that are not displayed and valid

---

# 15. Organization Schema

The company should be represented as:

**دومان سامانه**

The Organization schema should be used on appropriate company-level pages and/or the site-wide organization identity.

Product entities should remain distinct from the company entity.

The hierarchy is:

```text
دومان سامانه
├── GammaItsm
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

Do not model GammaItsm as the parent organization.

---

# 16. Breadcrumbs

Deep pages should provide breadcrumbs.

Example:

```text
خانه
→ محصولات
→ GammaItsm
→ قابلیت‌ها
→ مدیریت رخداد
```

Breadcrumbs should:

- reflect the actual information architecture
- use valid URLs
- be visible to users
- support BreadcrumbList structured data where appropriate

---

# 17. Internal Linking

Internal linking is a major part of the site's SEO strategy.

Pages should link naturally to related content.

Examples:

```text
GammaItsm
    ↓
GammaItsm Features
    ↓
Incident Management
    ↓
ITIL Guide
    ↓
Related Articles
    ↓
Request Demo
```

A feature page may link to:

- related features
- relevant articles
- relevant videos
- ITIL topics
- FAQ
- product page
- demo/request page

Avoid artificial networks of links.

Links must help users understand the subject and navigate the site.

---

# 18. Cross-Product Linking

Products should remain separate entities while still being connected through the company website.

For example:

A company-level article about enterprise software may naturally reference:

- GammaItsm
- ZED EAM

An SME accounting article may naturally reference:

- Landa

A technical engineering article may naturally reference:

- Gamma.Kernel

Do not force cross-links where there is no genuine relationship.

---

# 19. Articles

Articles should primarily target real user questions and search intent.

Each article should have:

- unique title
- unique description
- appropriate H1
- meaningful body content
- relevant internal links
- relevant product relationships where applicable
- appropriate image metadata
- publication/update information where useful

Articles should not exist solely to target isolated keywords.

---

# 20. ITIL Guide

The ITIL Guide is an educational resource.

It should be treated as a knowledge resource rather than a GammaItsm feature.

ITIL pages may naturally link to relevant GammaItsm functionality where appropriate.

Example:

```text
ITIL Incident Management
        ↓
GammaItsm Incident Management
        ↓
Request Demo
```

Do not turn educational pages into disguised product advertisements.

The primary purpose of ITIL content should remain educational.

---

# 21. FAQ SEO

FAQ structured data should only be used when the FAQ content is genuinely visible on the page and qualifies for the relevant search-engine guidelines.

Do not create artificial FAQ blocks solely to gain additional search snippets.

Avoid repeating the same questions across multiple pages unless the context genuinely differs.

---

# 22. Images

Every meaningful image must have descriptive alt text.

Example:

```html
<img
  src="/images/products/GammaItsm/dashboard.webp"
  alt="داشبورد سامانه GammaItsm"
/>
```

Decorative images should use:

```html
alt=""
```

Do not use filenames as alt text.

Alt text must describe the meaningful purpose or content of the image.

---

# 23. Image SEO

Images should:

- use descriptive filenames
- be optimized
- use modern formats where appropriate
- have appropriate dimensions
- avoid unnecessary file size
- support responsive layouts

Example:

```text
incident-management.webp
asset-dashboard.webp
invoice-dashboard.webp
```

Avoid:

```text
IMG001.jpg
image2.png
final-final.png
```

---

# 24. Performance and SEO

Performance is part of SEO and user experience.

Avoid unnecessary:

- JavaScript
- third-party libraries
- large images
- web fonts
- tracking scripts
- client-side rendering

Prefer Astro's static rendering model.

Interactive functionality should be introduced only where it provides real user value.

Use Astro Islands only where interaction is actually required.

---

# 25. JavaScript

JavaScript must not be required for:

- primary navigation
- reading page content
- basic SEO metadata
- core product information
- important internal links

Avoid turning static content into client-rendered content without a clear reason.

---

# 26. Sitemap

Generate a valid XML sitemap containing only canonical, indexable URLs.

Do not include:

- redirects
- noindex pages
- duplicate URLs
- development pages
- internal utility pages
- irrelevant query-string URLs

The sitemap should be automatically generated from the site's actual content structure where possible.

---

# 27. Robots.txt

Provide a valid `robots.txt`.

It should:

- allow search engines to crawl public content
- reference the sitemap
- avoid blocking important CSS/JS/assets required for rendering
- avoid exposing unnecessary internal routes

Do not use robots.txt as a substitute for `noindex`.

---

# 28. Redirects and Existing URLs

The existing website may already have indexed URLs.

When replacing or restructuring the old website:

- identify important existing URLs
- preserve URLs where practical
- create 301 redirects when URLs change
- do not intentionally break valuable indexed pages
- avoid redirect chains
- map old URLs to the most relevant new destination

Never redirect every old URL to the homepage unless there is genuinely no relevant destination.

SEO migration is part of the implementation plan.

---

# 29. Duplicate Content

Avoid duplicate or near-duplicate pages.

Do not create multiple pages targeting the same search intent with minimal wording changes.

If two pages have essentially the same purpose:

- merge them, or
- establish one canonical page, or
- change the content strategy so each page serves a distinct intent.

---

# 30. SEO and Content Ownership

The agent may improve:

- HTML semantics
- metadata structure
- internal linking
- accessibility
- technical SEO
- image metadata
- structured data implementation

The agent must not invent business claims, customer relationships, certifications, pricing, product capabilities, or performance claims.

Business facts must come from authoritative company content.

---

# 31. SEO Validation

Before considering an SEO-related task complete, validate:

- build succeeds
- pages generate valid HTML
- title exists
- meta description exists
- canonical exists
- language and direction are correct
- headings are structurally valid
- internal links work
- images have appropriate alt attributes
- sitemap is generated
- robots.txt exists
- structured data matches visible content
- no unintended duplicate routes were introduced

---

# 32. SEO Change Scope

When an agent is working on a specific SEO task, modifications must remain within the task scope.

For example:

> Optimize GammaItsm Incident Management SEO.

The agent must not automatically:

- rewrite unrelated product pages
- change company navigation
- modify unrelated content
- change the global brand
- redesign the website
- alter unrelated URLs

unless the root cause proves that the change is necessary.

---

# 33. Final Principle

**Build for users first, search engines second, and long-term trust always.**

SEO for Doman Samaneh is not about producing the largest number of indexed pages.

It is about building a clear, technically strong, authoritative website where:

```text
Company
   ↓
Products
   ↓
Features
   ↓
Useful Resources
   ↓
Relevant Internal Links
   ↓
User Conversion
```

Every page should have a clear purpose, a clear audience, and a clear relationship to the rest of the website.
