# Implement GammaDesk Product Page in Astro

## Objective

صفحه محصول **GammaDesk** را در سایت شرکتی «دومان سامانه» پیاده‌سازی کن.

GammaDesk یکی از محصولات دومان سامانه است و صفحه آن باید یک **Product Landing Page حرفه‌ای، Enterprise، کامل و قابل توسعه** باشد.

هدف صفحه این نیست که صرفاً یک معرفی کوتاه از GammaDesk باشد.

هدف این است که کاربر بتواند:

1. در چند ثانیه بفهمد GammaDesk چیست.
2. ارزش و کاربرد اصلی محصول را درک کند.
3. تمام حوزه‌های اصلی قابلیت‌های محصول را ببیند.
4. هر قابلیت مهم را به صفحه اختصاصی خودش دنبال کند.
5. تصاویر و محیط واقعی محصول را ببیند.
6. ارتباط GammaDesk با ITIL را بفهمد.
7. منابع آموزشی و محتوای مرتبط را پیدا کند.
8. در نهایت برای Demo یا تماس اقدام کند.

---

# 1. قبل از هر تغییر — Audit

قبل از نوشتن یا تغییر کد:

* ساختار فعلی پروژه Astro را بررسی کن.
* `AGENTS.md` را بخوان.
* `run.md` را بخوان.
* تمام فایل‌های زیر `docs/` را بخوان، مخصوصاً:

  * `docs/architecture.md`
  * `docs/brand.md`
  * `docs/design-system.md`
  * `docs/content-model.md`
  * `docs/navigation.md`
  * `docs/assets.md`
  * `docs/seo.md`
  * `docs/localization.md`
  * `docs/roadmap.md`
* Header و Footer فعلی را بررسی کن.
* Layoutهای موجود را بررسی کن.
* Componentهای موجود را بررسی کن.
* سیستم Typography و CSS فعلی را بررسی کن.
* assetهای موجود را بررسی کن.
* اگر محتوای قبلی GammaDesk وجود دارد، آن را پیدا و بررسی کن.
* اگر Screenshot واقعی GammaDesk وجود دارد، از همان استفاده کن.

### مهم

قبل از پیاده‌سازی، ابتدا مشخص کن:

* چه چیزی از قبل وجود دارد؟
* چه چیزی باید reuse شود؟
* چه چیزی باید اضافه شود؟
* چه چیزی نباید تغییر کند؟

**نسخه فعلی سایت را بدون دلیل بازنویسی نکن.**

---

# 2. Product Identity

محصول:

**GammaDesk**

نام فارسی در صورت نیاز:

**گاما دسک**

GammaDesk باید به‌عنوان یک محصول مستقل از شرکت نمایش داده شود، اما همچنان زیر برند:

**دومان سامانه**

قرار دارد.

GammaDesk نباید به‌عنوان خود شرکت معرفی شود.

ساختار مفهومی:

```text
دومان سامانه
    │
    ├── GammaDesk
    ├── ZED EAM
    ├── Landa
    └── Gamma.Kernel
```

---

# 3. URL

صفحه اصلی محصول:

```text
/products/gammadesk
```

اگر این URL از قبل وجود دارد، آن را حفظ کن.

اگر URL دیگری در Version 1 وجود دارد:

* آن را بررسی کن.
* بدون دلیل URL را تغییر نده.
* در صورت تغییر URL، redirect مناسب در نظر بگیر.
* redirect chain ایجاد نکن.

---

# 4. Page Architecture

صفحه GammaDesk باید این ساختار کلی را داشته باشد:

```text
Hero
↓
Product Navigation
↓
Why GammaDesk
↓
Capabilities Overview
↓
Feature Explorer
↓
ITIL / Service Management
↓
Product Screenshots / Tour
↓
Integrations
↓
Resources
↓
FAQ
↓
Final CTA
```

---

# 5. Hero

Hero باید اولین و مهم‌ترین بخش صفحه باشد.

ساختار:

```text
GammaDesk

راهکار جامع مدیریت خدمات فناوری اطلاعات

[توضیح کوتاه درباره محصول]

[درخواست دموی GammaDesk]
[مشاهده قابلیت‌ها]

                         [Screenshot واقعی محصول]
```

### Hero Rules

* H1 فقط یک مورد باشد.
* H1 نباید با `<br>` دستی شکسته شود.
* wrapping باید طبیعی باشد.
* در Desktop تا حد امکان یک خط یا حداکثر دو خط متعادل باشد.
* در Mobile شکست طبیعی مجاز است.
* از `white-space: nowrap` استفاده نکن.
* Screenshot واقعی GammaDesk را در صورت وجود استفاده کن.
* تصویر تزئینی را جایگزین Screenshot واقعی نکن.
* اگر Screenshot واقعی وجود ندارد، placeholder ساختاری مناسب ایجاد کن و تصویر جعلی از UI محصول تولید نکن.

### CTA

CTA اصلی:

**درخواست دموی GammaDesk**

CTA ثانویه:

**مشاهده قابلیت‌ها**

CTAها باید به مسیرهای واقعی سایت متصل باشند.

لینک جعلی ایجاد نکن.

---

# 6. Product Navigation

بلافاصله بعد از Hero یک navigation مخصوص GammaDesk ایجاد کن.

در Desktop ترجیحاً sticky شود.

موارد:

```text
معرفی
قابلیت‌ها
ITIL
تصاویر محیط
یکپارچه‌سازی
منابع
سوالات متداول
درخواست دمو
```

### Behavior

* Smooth scroll در صورت مناسب بودن.
* Active section در صورت امکان.
* Mobile-friendly.
* بدون JavaScript غیرضروری.
* اگر برای active section از JS استفاده می‌کنی، بسیار محدود و progressive enhancement باشد.

---

# 7. Why GammaDesk

یک بخش کوتاه برای توضیح اینکه GammaDesk چه مسئله‌ای را حل می‌کند.

هدف این بخش:

**Feature list نباشد.**

به جای:

```text
Incident
SLA
Workflow
...
```

روی ارزش محصول تمرکز کن:

* مدیریت متمرکز خدمات فناوری اطلاعات
* استانداردسازی فرایندهای Service Desk
* کنترل درخواست‌ها و رخدادها
* مدیریت SLA
* گردش کار
* گزارش‌گیری و کنترل عملکرد
* ایجاد دید مدیریتی نسبت به خدمات IT

اما فقط مواردی را بنویس که واقعاً توسط محصول پشتیبانی می‌شوند.

**هیچ قابلیت یا ادعای تجاری جدیدی اختراع نکن.**

---

# 8. Capabilities Overview

این مهم‌ترین بخش صفحه است.

همه قابلیت‌های GammaDesk باید در قالب **دسته‌بندی‌های منطقی** نمایش داده شوند.

از لیست طولانی ۳۰ یا ۴۰ موردی پرهیز کن.

دسته‌بندی اولیه پیشنهادی:

## Service Management

* Incident Management
* Service Request Management
* Problem Management
* Change Management
* Service Catalog
* Knowledge Management

## SLA & Service Level

* SLA Management
* Service Level Monitoring
* Escalation
* Service Performance

## Workflow & Automation

* Workflow
* Business Rules
* Notifications
* Automation
* Approval

## Asset & Configuration

* Asset Management
* Configuration Management
* CMDB
* Relationships

## Organization & Access

* Users
* Organizations
* Roles
* Permissions
* Departments

## Reporting & Dashboard

* Dashboards
* Reports
* KPI
* Operational Reporting
* Management Reporting

## User Interaction

* Self Service Portal
* Request Registration
* Notifications
* Communication Channels

## Integration

* API
* Email
* Directory Services
* External Systems

### بسیار مهم

این موارد فقط **نمونه ساختار** هستند.

قبل از اضافه کردن هر Feature:

* Repository
* Content
* Existing GammaDesk information
* Documentation
* Existing pages

را بررسی کن.

اگر Feature واقعاً وجود ندارد، آن را اضافه نکن.

---

# 9. Feature Card Design

هر Capability Card باید شامل:

```text
[Icon]

عنوان قابلیت

توضیح کوتاه ۱ تا ۲ خطی

مشاهده جزئیات →
```

باشد.

کارت‌ها:

* ساده
* Enterprise
* خوانا
* بدون Shadow سنگین
* بدون Glassmorphism
* بدون Gradient تزئینی
* بدون animation غیرضروری

باشند.

از یک design pattern مشترک برای Feature Cardها استفاده کن.

---

# 10. Feature Explorer

بعد از Capability Overview یک بخش تعاملی یا نیمه‌تعاملی ایجاد کن که به کاربر کمک کند قابلیت‌های GammaDesk را بهتر کشف کند.

مثلاً:

```text
مدیریت خدمات
مدیریت SLA
Workflow
دارایی و CMDB
گزارش‌ها
کاربران و سازمان
پرتال
یکپارچه‌سازی
```

با انتخاب هر دسته، قابلیت‌های مربوط به آن نمایش داده شوند.

### Implementation

اولویت:

1. CSS/HTML
2. Astro
3. JavaScript فقط در صورت نیاز

از Framework سنگین برای این interaction استفاده نکن.

اگر interaction بدون JS قابل پیاده‌سازی است، همان روش را ترجیح بده.

### Accessibility

* keyboard accessible
* focus visible
* aria مناسب
* reduced motion
* بدون وابستگی به hover

---

# 11. Feature Pages

قابلیت‌های مهم باید قابلیت ایجاد صفحه مستقل داشته باشند.

ساختار:

```text
/products/gammadesk/features
/products/gammadesk/features/[feature]
```

مثال:

```text
/products/gammadesk/features/incident-management
/products/gammadesk/features/problem-management
/products/gammadesk/features/change-management
/products/gammadesk/features/sla-management
/products/gammadesk/features/asset-management
/products/gammadesk/features/workflow
```

### نکته

در این Task لازم نیست برای همه Featureها محتوای کامل تولید کنی.

اما architecture باید طوری باشد که ایجاد این صفحات بعداً ساده باشد.

اگر Content Collections یا content model فعلی وجود دارد، از همان استفاده کن.

---

# 12. Feature Detail Page Template

برای Feature Page یک template reusable طراحی کن.

ساختار پیشنهادی:

```text
Breadcrumb
↓
Hero
↓
Problem
↓
GammaDesk Solution
↓
Key Capabilities
↓
Screenshot
↓
Benefits
↓
Related Features
↓
Related Articles
↓
FAQ
↓
CTA
```

این Template باید برای تمام Featureهای GammaDesk قابل reuse باشد.

---

# 13. ITIL Section

بخش جداگانه‌ای برای:

**GammaDesk و ITIL**

ایجاد کن.

هدف:

توضیح رابطه GammaDesk با IT Service Management و ITIL.

فرایندهای واقعی و supported را نمایش بده.

مثلاً:

```text
Incident Management
Problem Management
Change Management
Service Request Management
Service Level Management
...
```

اما:

**ITIL را Feature GammaDesk معرفی نکن.**

ITIL یک framework / practice framework است.

GammaDesk یک محصول ITSM است که می‌تواند برای پیاده‌سازی و مدیریت فرایندهای مرتبط با ITIL استفاده شود.

---

# 14. ITIL Resources

در بخش ITIL لینک به منابع آموزشی مرتبط بده:

```text
راهنمای ITIL
مقالات ITIL
مقالات Service Management
```

از لینک‌های ساختگی استفاده نکن.

اگر صفحات هنوز وجود ندارند:

* structure را آماده کن
* لینک را فقط در صورت وجود صفحه فعال قرار بده

---

# 15. Screenshots / Product Tour

یک بخش اختصاصی:

**محیط GammaDesk**

ایجاد کن.

هدف:

کاربر واقعاً ببیند محصول چه شکلی است.

ترجیحاً:

```text
Dashboard
Incident
Service Desk
SLA
Workflow
Reports
```

### Rules

* فقط Screenshot واقعی استفاده کن.
* تصاویر باید optimized باشند.
* WebP/AVIF در صورت مناسب بودن.
* alt text مناسب فارسی.
* Lazy loading برای تصاویر خارج از viewport.
* تصویر Hero می‌تواند eager/high priority باشد.
* از تصویر stock به‌عنوان screenshot محصول استفاده نکن.

اگر Screenshotهای واقعی در repository وجود دارند، ابتدا آنها را پیدا کن.

---

# 16. Screenshot Gallery

Gallery باید:

* responsive باشد.
* keyboard accessible باشد.
* روی Mobile usable باشد.
* از modal سنگین فقط در صورت نیاز استفاده کند.
* JavaScript حداقلی داشته باشد.

اگر gallery ساده با لینک/تصویر قابل پیاده‌سازی است، از راهکار ساده استفاده کن.

---

# 17. Integrations

اگر GammaDesk دارای Integration است، بخش:

**یکپارچه‌سازی**

ایجاد کن.

مثلاً:

```text
Email
Directory Services
API
SMS
Monitoring
External Systems
```

فقط موارد واقعی را نمایش بده.

برای هر Integration:

* نام
* توضیح کوتاه
* در صورت وجود مستندات → لینک

هیچ Logo یا Integration جعلی نساز.

---

# 18. Resources

بخش:

**منابع GammaDesk**

شامل:

* مقالات
* ویدئوها
* راهنمای ITIL
* FAQ
* مستندات

باشد.

از Content Collectionهای موجود استفاده کن.

اگر Article یا Video به GammaDesk مرتبط است، رابطه را در data/content model حفظ کن.

از duplicate content جلوگیری کن.

---

# 19. FAQ

یک FAQ اختصاصی برای GammaDesk ایجاد کن.

سؤالات باید واقعی و کاربردی باشند.

مثلاً موضوعات:

* GammaDesk چیست؟
* GammaDesk برای چه سازمان‌هایی مناسب است؟
* GammaDesk چه فرایندهای ITSM را پوشش می‌دهد؟
* آیا GammaDesk از SLA پشتیبانی می‌کند؟
* آیا Workflow دارد؟
* آیا امکان Integration وجود دارد؟
* آیا Portal دارد؟

اما پاسخ‌ها باید بر اساس اطلاعات واقعی محصول باشند.

**پاسخ یا قابلیت ساختگی تولید نکن.**

اگر FAQ واقعی در پروژه وجود دارد، همان را reuse کن.

FAQ باید semantic و accessible باشد.

در صورت مناسب بودن، Schema مربوط به FAQ را مطابق `docs/seo.md` اضافه کن.

---

# 20. Final CTA

در پایان صفحه:

```text
GammaDesk را از نزدیک ببینید

برای آشنایی با امکانات GammaDesk و بررسی نیازهای سازمان خود،
برای دریافت Demo با ما در ارتباط باشید.

[درخواست دموی GammaDesk]
[تماس با ما]
```

متن نهایی را با لحن برند دومان سامانه هماهنگ کن.

---

# 21. Breadcrumb

برای صفحه محصول:

```text
خانه
/
محصولات
/
GammaDesk
```

برای Feature:

```text
خانه
/
محصولات
/
GammaDesk
/
قابلیت‌ها
/
Incident Management
```

از Breadcrumb component موجود استفاده کن.

---

# 22. SEO

Page باید SEO-ready باشد.

برای GammaDesk:

* title اختصاصی
* meta description اختصاصی
* canonical
* Open Graph
* semantic HTML
* یک H1
* H2/H3 hierarchy صحیح
* sitemap inclusion
* robots قابل index
* breadcrumb schema
* Product / SoftwareApplication schema در صورت مناسب بودن

### مهم

Schema نباید اطلاعاتی را ادعا کند که روی صفحه وجود ندارد.

از:

* Rating جعلی
* Review جعلی
* قیمت جعلی
* تعداد مشتری جعلی
* Award جعلی
* Certification جعلی

استفاده نکن.

---

# 23. Internal Linking

صفحه GammaDesk باید به شکل طبیعی به این بخش‌ها لینک بدهد:

```text
/products
/products/gammadesk/features
/resources/articles
/resources/videos
/resources/itil
/resources/faq
/contact
```

و Feature Pageها نیز باید به:

* GammaDesk
* Features
* Related Features
* Articles
* Videos
* ITIL
* FAQ
* Demo

لینک داشته باشند.

---

# 24. Brand / Visual Design

بر اساس:

`docs/brand.md`

و:

`docs/design-system.md`

طراحی باید:

* Enterprise
* Professional
* Technical
* Modern
* Trustworthy
* Mature

باشد.

رنگ اصلی برند:

**Orange + Black**

اما استفاده از Orange باید کنترل‌شده باشد.

Orange را برای:

* CTA
* Accent
* Active state
* مهم‌ترین highlightها

استفاده کن.

کل صفحه را نارنجی نکن.

از موارد زیر پرهیز کن:

* Neon
* Glassmorphism
* Gradient-heavy design
* Shadow-heavy cards
* Excessive rounded corners
* Decorative animations
* Generic SaaS template appearance

---

# 25. Typography

فونت اصلی:

**Vazirmatn**

در صورت وجود نسخه local در پروژه، همان را استفاده کن.

Persian:

```text
fa-IR
RTL
```

Mixed Persian/English content باید درست render شود.

برای عبارت‌های Latin مانند:

```text
GammaDesk
ITSM
ITIL
SLA
CMDB
API
```

از wrapping مناسب استفاده کن.

---

# 26. Responsive Design

سه breakpoint اصلی را بررسی کن:

### Desktop

صفحه کامل با:

* Hero دو ستونه
* Product Navigation
* Capability Grid
* Screenshot Gallery

### Tablet

Gridها adaptive شوند.

### Mobile

همه بخش‌ها:

* تک ستونه یا دو ستونه مناسب
* بدون horizontal overflow
* touch-friendly
* readable

باشند.

به‌خصوص:

* Hero H1
* Mega/Product navigation
* Feature Explorer
* Gallery
* CTA

را تست کن.

---

# 27. Performance

Astro static-first باقی بماند.

هدف:

```text
Minimal JavaScript
Minimal Client Hydration
Optimized Images
Fast Initial Render
Semantic HTML
```

برای interactionهای کوچک از JS سبک استفاده کن.

هیچ UI framework جدیدی فقط برای این صفحه اضافه نکن.

---

# 28. Component Architecture

اگر componentهای موجود مناسب هستند، reuse کن.

در صورت نیاز componentهای reusable ایجاد کن، مثلاً:

```text
ProductHero
ProductNav
CapabilitySection
CapabilityCard
FeatureExplorer
FeatureGroup
ScreenshotGallery
IntegrationGrid
ResourceSection
ProductFAQ
ProductCTA
```

اما:

**برای هر بخش component جدید نساز مگر اینکه واقعاً reusable یا معماری را بهتر کند.**

---

# 29. Content Architecture

محتوا و presentation را جدا نگه دار.

Featureها ترجیحاً data-driven باشند.

مثلاً conceptually:

```text
feature:
  title
  slug
  shortDescription
  category
  product
  icon
  heroImage
  description
  benefits
  relatedFeatures
  relatedArticles
  relatedVideos
```

از hard-code کردن Feature Cardهای زیاد در HTML اصلی صفحه پرهیز کن.

اگر Content Collections موجود است، از آن استفاده کن.

---

# 30. Assets

قبل از اضافه کردن asset جدید:

1. `public/images/`
2. product assets
3. existing GammaDesk assets
4. brand assets

را بررسی کن.

Logo:

**GammaDesk logo رسمی موجود در repository**

را استفاده کن.

هرگز:

* Logo را redraw نکن.
* نسبت logo را تغییر نده.
* رنگ logo را بدون دلیل تغییر نده.
* Logo جعلی نساز.

برای Screenshot نیز فقط تصاویر واقعی استفاده شود.

---

# 31. Do Not Invent

این قانون بسیار مهم است.

اگر اطلاعاتی در repository یا مستندات وجود ندارد، Agent نباید آن را به‌عنوان واقعیت تولید کند.

به‌خصوص:

* تعداد مشتریان
* تعداد کاربران
* سال تأسیس
* Certification
* استاندارد
* Integration
* Feature
* قیمت
* Award
* KPI
* Performance
* Security certification

نباید ساخته شود.

در صورت نبود اطلاعات، آن بخش را:

* حذف کن
* یا placeholder ساختاری مناسب ایجاد کن

ولی محتوای جعلی تولید نکن.

---

# 32. Homepage / Global Navigation

این Task فقط صفحه GammaDesk است.

Header و Navigation global را فقط در صورتی تغییر بده که برای اتصال صحیح صفحه لازم باشد.

ساختار اصلی Navigation باید حفظ شود:

```text
Products
Resources
Company
Contact Us
Request Demo
```

Products:

```text
GammaDesk
ZED EAM
Landa
Gamma.Kernel
```

GammaDesk نباید به root company تبدیل شود.

---

# 33. Validation Checklist

پس از پیاده‌سازی موارد زیر را بررسی کن.

## Structure

* [ ] `/products/gammadesk` فعال است.
* [ ] Header صحیح است.
* [ ] Footer صحیح است.
* [ ] Breadcrumb صحیح است.
* [ ] Product Navigation وجود دارد.
* [ ] تمام بخش‌های اصلی وجود دارند.

## Content

* [ ] GammaDesk به‌عنوان محصول دومان سامانه معرفی شده.
* [ ] Capabilities دسته‌بندی شده‌اند.
* [ ] Featureهای واقعی استفاده شده‌اند.
* [ ] ادعای ساختگی وجود ندارد.
* [ ] ITIL از Featureها تفکیک شده.
* [ ] Resources مرتبط وجود دارند.
* [ ] FAQ وجود دارد.

## UX

* [ ] CTAها واضح هستند.
* [ ] Featureها قابل کشف هستند.
* [ ] Feature Explorer قابل استفاده است.
* [ ] Screenshotها قابل مشاهده هستند.
* [ ] Mobile navigation درست است.
* [ ] هیچ horizontal overflow وجود ندارد.

## Accessibility

* [ ] Semantic HTML
* [ ] H1 واحد
* [ ] Heading hierarchy
* [ ] Keyboard navigation
* [ ] Focus visible
* [ ] ARIA در موارد لازم
* [ ] Alt text
* [ ] Reduced motion

## SEO

* [ ] Title
* [ ] Meta description
* [ ] Canonical
* [ ] Open Graph
* [ ] Schema
* [ ] Breadcrumb
* [ ] Internal links
* [ ] Sitemap
* [ ] No accidental noindex

## Performance

* [ ] Minimal JS
* [ ] Optimized images
* [ ] Lazy loading
* [ ] No unnecessary dependencies
* [ ] No unnecessary hydration

---

# 34. Final Quality Rule

صفحه نهایی نباید شبیه یک:

**Generic SaaS Landing Page**

باشد.

باید حس یک:

**Enterprise Software Product**

را منتقل کند.

کاربر باید بعد از دیدن صفحه بتواند پاسخ این سؤال‌ها را پیدا کند:

```text
GammaDesk چیست؟

برای چه سازمانی است؟

چه مشکلاتی را حل می‌کند؟

چه حوزه‌هایی را پوشش می‌دهد؟

چه قابلیت‌هایی دارد؟

رابط کاربری آن چگونه است؟

چه ارتباطی با ITIL دارد؟

از چه سیستم‌هایی می‌تواند استفاده کند؟

از کجا درباره قابلیت‌ها بیشتر بخوانم؟

چطور Demo بگیرم؟
```

---

# 35. Execution Strategy

کار را یکباره و بدون بررسی انجام نده.

به این ترتیب اجرا کن:

### Phase 1

Audit existing project.

### Phase 2

Identify existing reusable components/assets/content.

### Phase 3

Implement Product Page skeleton.

### Phase 4

Implement Hero + Product Navigation.

### Phase 5

Implement Capability architecture.

### Phase 6

Implement Feature Explorer.

### Phase 7

Prepare Feature Page architecture.

### Phase 8

Implement ITIL section.

### Phase 9

Implement Screenshots/Gallery.

### Phase 10

Implement Integrations/Resources/FAQ.

### Phase 11

Implement final CTA.

### Phase 12

SEO + accessibility + performance.

### Phase 13

Responsive QA.

---

# 36. Final Report

در پایان گزارش بده:

```text
Implemented:
- ...

Created:
- ...

Modified:
- ...

Reused:
- ...

New components:
- ...

New routes:
- ...

SEO:
- ...

Accessibility:
- ...

Performance:
- ...

Known limitations:
- ...
```

همچنین اگر اطلاعات واقعی بعضی Featureها در repository پیدا نشد، دقیقاً اعلام کن کدام بخش‌ها نیاز به محتوای واقعی دارند.

## Final Principle

**GammaDesk Product Page باید یک Product Hub باشد، نه فقط یک Landing Page.**

صفحه اصلی GammaDesk باید تمام قابلیت‌های محصول را در سطح Overview قابل مشاهده کند، اما جزئیات هر قابلیت در صفحات مستقل قرار بگیرد.

معماری نهایی:

```text
GammaDesk
│
├── Overview
│
├── Capabilities
│   ├── Service Management
│   ├── SLA
│   ├── Workflow
│   ├── Asset & CMDB
│   ├── Organization
│   ├── Reporting
│   ├── Portal
│   └── Integration
│
├── Features
│   ├── Incident Management
│   ├── Problem Management
│   ├── Change Management
│   ├── SLA
│   ├── Asset Management
│   └── ...
│
├── ITIL
│
├── Screenshots
│
├── Integrations
│
├── Resources
│
├── FAQ
│
└── Request Demo
```

این معماری را مبنای توسعه آینده GammaDesk قرار بده و آن را طوری پیاده‌سازی کن که بعداً افزودن Featureهای جدید، Article، Video، FAQ و Screenshot بدون بازنویسی صفحه اصلی امکان‌پذیر باشد.
