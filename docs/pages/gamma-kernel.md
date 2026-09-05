# Implement Gamma.Kernel Product Page in Astro

## Objective

در کنار صفحه GammaDesk، صفحه مستقل محصول **Gamma.Kernel** را نیز در سایت دومان سامانه پیاده‌سازی کن.

Gamma.Kernel یک محصول/پروژه فنی از دومان سامانه است و باید به‌عنوان یکی از چهار محصول اصلی شرکت نمایش داده شود.

ساختار Portfolio:

```text
دومان سامانه
│
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

Gamma.Kernel نباید در سایت صرفاً به‌عنوان یک پروژه GitHub کوچک یا لینک خارجی نمایش داده شود.

باید یک **Product / Technology Landing Page** مستقل و حرفه‌ای داشته باشد.

---

# 1. URL

صفحه:

```text
/products/gamma-kernel
```

اگر این URL از قبل وجود دارد، حفظ شود.

---

# 2. Positioning

Gamma.Kernel را به‌عنوان:

**چارچوب و هسته توسعه نرم‌افزارهای سازمانی مبتنی بر .NET**

معرفی کن.

پیام اصلی صفحه باید روی این مفاهیم باشد:

* .NET
* Clean Architecture
* Domain-Driven Design
* CQRS
* Enterprise Application Development
* Reusable Infrastructure
* Modular Architecture
* Developer Experience

اما فقط قابلیت‌هایی را بیان کن که واقعاً در repository و مستندات Gamma.Kernel وجود دارند.

**هیچ Feature فنی بدون بررسی repository اضافه نکن.**

---

# 3. Hero

Hero باید از GammaDesk متفاوت باشد.

ساختار پیشنهادی:

```text
Gamma.Kernel

Enterprise Application Framework for .NET

هسته‌ای برای ساخت نرم‌افزارهای سازمانی مدرن،
ماژولار و قابل توسعه با .NET

[مشاهده در GitHub]
[مشاهده مستندات]

             [Architecture / Code Visual]
```

CTA اصلی:

**مشاهده در GitHub**

CTA دوم:

**مستندات**

اگر Documentation هنوز وجود ندارد، لینک جعلی نساز.

---

# 4. Technical Identity

بعد از Hero یک بخش کوتاه برای معرفی Technical Foundation:

```text
.NET
Clean Architecture
DDD
CQRS
Dapper
SQL Server
MediatR / Mediator
...
```

فقط تکنولوژی‌ها و الگوهایی را نمایش بده که واقعاً در Gamma.Kernel استفاده شده‌اند.

اگر نسخه یا تکنولوژی خاصی در repository مشخص شده، همان اطلاعات را مبنا قرار بده.

---

# 5. Why Gamma.Kernel

این بخش نباید صرفاً Feature List باشد.

توضیح بده Gamma.Kernel چه مسئله‌ای را برای تیم‌های توسعه حل می‌کند.

محورهای احتمالی:

### Architecture

ایجاد ساختار معماری منظم و قابل توسعه برای نرم‌افزارهای سازمانی.

### Domain

کمک به پیاده‌سازی Domain Model و اصول DDD.

### CQRS

تفکیک Command و Query و ایجاد ساختار مشخص برای Application Layer.

### Infrastructure

ارائه abstraction و infrastructureهای reusable برای پروژه‌های سازمانی.

### Consistency

ایجاد الگوهای مشترک در پروژه‌های مختلف.

اما تمام این موارد را با repository واقعی تطبیق بده.

---

# 6. Architecture Section

یک بخش مهم با عنوان:

**Architecture**

ایجاد کن.

نمایش مفهومی:

```text
Presentation
      ↓
Application
      ↓
Domain
      ↓
Infrastructure
```

اگر معماری واقعی Gamma.Kernel متفاوت است، **معماری واقعی repository را نمایش بده، نه این نمونه را.**

می‌توانی از:

* Diagram
* Code structure
* Layer visualization
* Architecture cards

استفاده کنی.

این بخش باید یکی از قوی‌ترین بخش‌های صفحه باشد.

---

# 7. Core Concepts

قابلیت‌ها/مفاهیم Gamma.Kernel را دسته‌بندی کن.

مثلاً:

## Architecture

* Clean Architecture
* DDD
* CQRS

## Application

* Commands
* Queries
* Handlers
* Pipelines

## Domain

* Entities
* Value Objects
* Domain Services
* Domain Events

## Infrastructure

* Repository
* Unit of Work
* Persistence
* Audit

## Cross-Cutting Concerns

* Authorization
* Auditing
* Identity
* Transactions
* Logging

اما:

**قبل از نمایش هر مورد repository را بررسی کن.**

---

# 8. Technical Feature Cards

برای هر مفهوم یک Card کوچک:

```text
[Icon]

CQRS

تفکیک Command و Query برای ساختاردهی بهتر
لایه Application.

مشاهده جزئیات →
```

اگر مستندات اختصاصی برای Feature وجود ندارد، لینک جعلی نساز.

در صورت نبود صفحه مستقل، Card می‌تواند توضیح کوتاه بدون لینک داشته باشد.

---

# 9. Code Example

برای Gamma.Kernel یک بخش بسیار مهم:

**See it in Code**

ایجاد کن.

نمایش یک یا چند snippet واقعی از repository.

مثلاً:

```csharp
public interface ICommand<TResult>
{
}
```

یا نمونه‌ای از:

* Command
* Query
* Handler
* Entity
* Pipeline

اما **کد باید از repository واقعی Gamma.Kernel گرفته شود.**

کد ساختگی برای نمایش UI تولید نکن.

Syntax highlighting سبک باشد.

Copy button فقط در صورت نیاز و با JavaScript بسیار کم.

---

# 10. Architecture Diagram

یک Visual Architecture Section ایجاد کن.

ترجیحاً:

```text
             Application
                  │
       ┌──────────┴──────────┐
       │                     │
   Commands               Queries
       │                     │
    Handlers              Handlers
       │                     │
       └──────────┬──────────┘
                  │
               Domain
                  │
          Infrastructure
```

اما این diagram فقط در صورتی استفاده شود که با معماری واقعی پروژه مطابقت داشته باشد.

اگر architecture واقعی متفاوت است، repository را source of truth قرار بده.

---

# 11. GitHub

GitHub باید یکی از CTAهای اصلی باشد.

Repository:

```text
https://github.com/doomansamaneh/Gamma.Kernel
```

این لینک باید به شکل واضح نمایش داده شود:

**View Gamma.Kernel on GitHub**

و یک بخش کوچک:

```text
Open Source
.NET
Enterprise Architecture
DDD
CQRS
```

اگر اطلاعاتی مانند Stars، Downloads یا Contributors نمایش داده می‌شود، آن را hard-code نکن مگر اینکه از منبع معتبر و به‌روز گرفته شود.

---

# 12. Documentation

اگر Documentation موجود است:

```text
Documentation
Getting Started
Architecture
Guides
API Reference
Examples
```

نمایش داده شود.

اگر Documentation هنوز کامل نشده:

یک CTA ساده:

**Explore the source code**

قرار بده.

صفحه‌ای با محتوای ساختگی ایجاد نکن.

---

# 13. Getting Started

اگر پروژه برای استفاده توسط Developerها آماده است، یک بخش:

**Getting Started**

ایجاد کن.

مراحل واقعی را از repository استخراج کن.

مثلاً:

```text
1. Install
2. Configure
3. Create Application
4. Add Gamma.Kernel
5. Run
```

اما این مراحل را فقط در صورت وجود واقعی در پروژه بنویس.

اگر اطلاعات کافی وجود ندارد، این بخش را به شکل teaser نگه دار.

---

# 14. Ecosystem / Products

یک بخش جذاب برای ارتباط Gamma.Kernel با Portfolio دومان سامانه:

**Technology Behind Our Products**

اگر واقعاً Gamma.Kernel در محصولات شرکت استفاده می‌شود، با دقت و بر اساس واقعیت نمایش بده.

مثلاً:

```text
Gamma.Kernel
     │
     ├── GammaDesk
     ├── ZED EAM
     └── Other Enterprise Applications
```

اگر رابطه محصول با Gamma.Kernel قابل اثبات نیست، آن را ادعا نکن.

هدف این بخش می‌تواند نشان دادن فلسفه فنی دومان سامانه باشد، نه تبلیغ ساختگی.

---

# 15. Resources

منابع مرتبط:

* GitHub
* Documentation
* Articles
* Architecture articles
* DDD articles
* CQRS articles
* .NET articles

محتوای مرتبط را از Content Collectionهای موجود استخراج کن.

---

# 16. FAQ

FAQهای فنی:

* Gamma.Kernel چیست؟
* Gamma.Kernel برای چه نوع پروژه‌هایی مناسب است؟
* آیا Open Source است؟
* از چه نسخه‌ای از .NET استفاده می‌کند؟
* آیا از Clean Architecture پشتیبانی می‌کند؟
* آیا CQRS دارد؟
* چگونه می‌توان آن را در پروژه استفاده کرد؟
* Documentation آن کجاست؟

پاسخ‌ها باید فقط بر اساس repository و مستندات واقعی باشند.

---

# 17. Final CTA

CTA نهایی:

```text
Gamma.Kernel را در GitHub بررسی کنید

کد، معماری و ساختار داخلی Gamma.Kernel را ببینید.

[مشاهده در GitHub]
```

---

# 18. Design Direction

صفحه Gamma.Kernel باید از GammaDesk کمی متفاوت باشد.

GammaDesk:

**Enterprise Business Product**

Gamma.Kernel:

**Enterprise Developer Technology**

بنابراین طراحی Gamma.Kernel می‌تواند کمی technical‌تر باشد، اما همچنان با Brand System دومان سامانه هماهنگ بماند.

استایل:

* Professional
* Technical
* Minimal
* Developer-focused
* Enterprise
* Open Source

از:

* Neon
* Cyberpunk
* Dark hacker aesthetic
* excessive code decoration
* Gradient-heavy design

استفاده نکن.

Orange + Black همچنان رنگ‌های اصلی برند هستند.

---

# 19. Typography

Vazirmatn برای محتوای فارسی.

برای Code:

یک monospace font مناسب سیستم یا font موجود پروژه.

Mixed content مانند:

```text
.NET
DDD
CQRS
Clean Architecture
Gamma.Kernel
```

باید بدون شکستن نامناسب render شود.

---

# 20. Responsive

Desktop:

```text
Hero
Architecture
Feature Grid
Code Example
GitHub
Documentation
```

Mobile:

* تمام sections تک‌ستونه شوند.
* Code blocks horizontal scroll کنترل‌شده داشته باشند.
* Diagram responsive باشد.
* هیچ horizontal overflow در کل صفحه ایجاد نشود.
* CTAها touch-friendly باشند.

---

# 21. SEO

Metadata اختصاصی:

* Title
* Description
* Canonical
* Open Graph

Schema در صورت مناسب بودن:

* SoftwareApplication
* Organization
* BreadcrumbList

محتوای صفحه باید برای مفاهیم مرتبط با:

* .NET Enterprise Framework
* Clean Architecture
* DDD
* CQRS
* Enterprise Software Architecture

ساختار semantic مناسبی داشته باشد.

از Keyword stuffing خودداری کن.

---

# 22. Architecture / Content Model

Gamma.Kernel باید در مدل Product موجود سایت یک Product First-Class باشد.

مثلاً:

```text
Product
├── GammaDesk
├── ZED EAM
├── Landa
└── Gamma.Kernel
```

اگر schema/data model محصول موجود است، از همان استفاده کن.

برای Gamma.Kernel یک مدل جدا و ناسازگار با سایر محصولات نساز.

---

# 23. Navigation

در Mega Menu محصولات:

```text
Products

GammaDesk
IT Service Management & Help Desk

ZED EAM
Enterprise Asset Management

Landa
Cloud Accounting for SMEs

Gamma.Kernel
.NET Enterprise Application Framework
```

Gamma.Kernel باید دقیقاً مانند سه محصول دیگر قابل مشاهده و دسترسی باشد.

---

# 24. Assets

قبل از ایجاد هر asset:

* repository را بررسی کن.
* Logo رسمی Gamma.Kernel را پیدا کن.
* GitHub assets را بررسی کن.
* Architecture diagrams موجود را بررسی کن.
* Screenshots یا code visuals موجود را بررسی کن.

از ساخت لوگوی جدید یا جعلی خودداری کن.

---

# 25. Important — Do Not Invent

برای Gamma.Kernel این قانون بسیار جدی است.

هیچ‌کدام از موارد زیر بدون evidence اضافه نشود:

* Performance claims
* Number of projects
* Number of GitHub stars
* Downloads
* Contributors
* Production usage
* Certifications
* Benchmarks
* Supported databases
* Supported .NET versions
* Features
* Architecture claims

**Repository و documentation source of truth هستند.**

---

# 26. Reusable Product Template

در صورت امکان معماری Product Page را reusable طراحی کن.

مثلاً:

```text
ProductPageLayout
ProductHero
ProductNavigation
ProductCapabilities
ProductArchitecture
ProductResources
ProductFAQ
ProductCTA
```

اما Gamma.Kernel باید بتواند بخش‌های مخصوص خودش را نیز داشته باشد.

نباید Gamma.Kernel را مجبور کنیم دقیقاً ساختار GammaDesk را داشته باشد.

---

# 27. Product Page Comparison

در نهایت سایت باید این چهار Product Page را داشته باشد:

```text
/products/gammadesk
/products/zed-eam
/products/landa
/products/gamma-kernel
```

همه آنها:

* Layout foundation مشترک
* Header مشترک
* Footer مشترک
* Typography مشترک
* Design tokens مشترک
* CTA system مشترک

داشته باشند.

ولی محتوای Product Sectionها باید متناسب با ماهیت محصول باشد.

---

# 28. Final QA

بررسی کن:

* [ ] `/products/gamma-kernel` فعال است.
* [ ] Gamma.Kernel در Products Mega Menu وجود دارد.
* [ ] Hero واضح است.
* [ ] GitHub CTA کار می‌کند.
* [ ] Documentation فقط در صورت وجود لینک دارد.
* [ ] Architecture واقعی نمایش داده شده.
* [ ] Featureها واقعی هستند.
* [ ] Code snippets واقعی هستند.
* [ ] FAQ واقعی است.
* [ ] هیچ claim ساختگی وجود ندارد.
* [ ] Mobile responsive است.
* [ ] RTL صحیح است.
* [ ] SEO metadata صحیح است.
* [ ] Accessibility رعایت شده.
* [ ] JavaScript حداقلی است.
* [ ] هیچ dependency غیرضروری اضافه نشده.

---

# 29. Final Principle

Gamma.Kernel نباید شبیه یک صفحه تبلیغاتی معمولی SaaS باشد.

صفحه باید به یک Developer یا Software Architect این احساس را بدهد:

> «این یک پروژه واقعی است؛ می‌توانم معماری، کد و نحوه استفاده از آن را ببینم.»

بنابراین اولویت صفحه:

```text
Architecture
     ↓
Technology
     ↓
Capabilities
     ↓
Real Code
     ↓
Documentation
     ↓
GitHub
```

است.

هدف نهایی:

**Gamma.Kernel باید در سایت دومان سامانه به‌عنوان یک Technology Product واقعی و Open Source معرفی شود، نه صرفاً یک لینک به GitHub.**
