You are working on the Astro corporate website for Doman Samaneh (دومان سامانه).

Your task is to REVIEW, IMPROVE, AND COMPLETE the existing Gamma.Kernel product page.

IMPORTANT:
Do NOT blindly rewrite the page from scratch.
First inspect the existing implementation, project structure, components, design tokens, assets, and the current Gamma.Kernel page.
Preserve good existing work and improve it where necessary.

==================================================

1. PRODUCT CONTEXT
   ==================================================

Gamma.Kernel is an open-source .NET kernel/framework developed by Doman Samaneh.

Official repository:

https://github.com/doomansamaneh/Gamma.Kernel

Before implementing the page, inspect the repository README and relevant source files.

Use the repository as the primary source of truth for CURRENT technical capabilities.

Do NOT invent features.

Clearly distinguish:

- Current capabilities
- Architecture concepts
- Roadmap / future capabilities

Do not present roadmap items as existing functionality.

Gamma.Kernel positioning:

A lightweight, opinionated .NET kernel for applications built around:

- CQRS
- Clean Architecture
- Domain-Driven Design
- Cross-cutting concerns
- Unit of Work
- Authorization
- Auditing
- Dapper-based data access

The product is aimed primarily at:

- Software developers
- Software architects
- Technical leads
- CTOs
- Teams building enterprise applications
- Teams building SaaS systems
- Long-lived .NET codebases

This is a TECHNICAL product page.

Do not make it look like a generic SaaS landing page.

================================================== 2. CORE MESSAGE
===============

The page should communicate this idea clearly:

"Gamma.Kernel provides a small, reusable foundation for building modern enterprise .NET applications without forcing the application into a heavy framework."

The visitor should understand within a few seconds:

1. What Gamma.Kernel is
2. Who it is for
3. What problems it solves
4. How it fits into an application architecture
5. What capabilities it provides
6. Where to see the source code

================================================== 3. PAGE STRUCTURE
=================

Build the page around this logical narrative:

1. Hero
2. What is Gamma.Kernel?
3. Why Gamma.Kernel?
4. Technology / Foundations
5. Architecture
6. Capabilities
7. Request Pipeline
8. Code / Developer Experience
9. Project Structure
10. Use Cases
11. Roadmap
12. FAQ
13. GitHub CTA

Do NOT make every section visually identical.

The page should feel like a serious developer/product page rather than a marketing template.

================================================== 4. HERO
=======

Improve the existing Hero.

Use:

Eyebrow:
Open Source · .NET 10+

H1:
Gamma.Kernel

Subtitle:
Enterprise Application Framework for .NET

Supporting message should explain that it is a lightweight and reusable kernel for modern enterprise applications based on Clean Architecture, DDD and CQRS.

Mention the main cross-cutting concerns it helps centralize:

- Command / Query handling
- Authorization
- Transactions
- Unit of Work
- Audit
- Data access

Primary CTA:

"مشاهده در GitHub"

Link:

https://github.com/doomansamaneh/Gamma.Kernel

Secondary CTA:

"معماری"

Scroll to the architecture section.

Hero must have a strong technical visual on the opposite side.

Do NOT use:

- Stock image
- Laptop mockup
- Generic SaaS illustration
- Fake dashboard
- 3D graphics
- Glassmorphism
- Neon effects

Prefer a restrained developer-oriented visual showing concepts such as:

Command
Query
Handler
Authorization
Unit of Work
Audit

This visual can be implemented with typography, code-style elements, or a simple architecture representation.

================================================== 5. WHAT IS GAMMA.KERNEL?
========================

Create a clear introductory section.

Explain:

Gamma.Kernel centralizes common infrastructure and cross-cutting concerns that otherwise become scattered throughout enterprise applications.

Mention concepts such as:

- CQRS request handling
- Authorization
- Transactions
- Unit of Work
- Auditing
- Data access
- Infrastructure abstractions

Keep the language technically accurate.

Do not claim that Gamma.Kernel automatically solves all architectural problems.

================================================== 6. WHY GAMMA.KERNEL?
====================

Explain the motivation behind the project.

Use the actual repository README as source.

Important concepts:

Enterprise applications often accumulate repeated infrastructure logic around:

- Authorization and permissions
- Transactions and Unit of Work
- Command / Query handling
- Auditing and logging

Gamma.Kernel provides a minimal reusable kernel for these concerns.

Create 3–4 strong points, for example:

- Focus on Domain
- Less repetitive infrastructure code
- Reusable across applications
- Opinionated but framework-agnostic

Do not turn this into generic marketing copy.

================================================== 7. TECHNOLOGY / FOUNDATIONS
===========================

Create a technical foundation section.

Use only technologies/concepts actually supported by the repository.

Relevant concepts include:

.NET 10+
Clean Architecture
DDD
CQRS
Dapper
SQL Server

Present them as a clean technical grid.

Do not create fake technology badges.

Do not use logos unless official assets exist.

================================================== 8. ARCHITECTURE
===============

This is one of the most important sections.

Create a clear architecture visualization based on the actual repository architecture.

The conceptual flow should communicate something similar to:

API / Endpoints
↓
Commands / Queries
↓
Handlers
↓
Domain

And supporting infrastructure:

Authorization
Unit of Work / Transactions
Audit
Repositories / Data Access

Use a clean diagram-like UI.

Do not create an inaccurate architecture diagram.

Inspect the repository before finalizing the exact terminology.

The architecture section should be understandable for a software architect.

================================================== 9. CAPABILITIES
===============

Create a detailed but clean capabilities section.

Verify each capability against the repository.

Relevant capabilities include:

- ICommand / IQuery
- Command and Query handlers
- Handler pipelines
- Authorization / ABAC
- Unit of Work
- Transaction management
- Audit helpers
- Dapper integration
- Generic CUD repositories
- Attribute-based entity helpers
- Identity
- InsertOnly
- RowVersion
- IClock
- ICurrentUser

Do not expose internal implementation details unless they are useful to developers.

Do not claim features that are only in the roadmap.

================================================== 10. REQUEST PIPELINE
====================

Create a dedicated section showing how a request flows through the system.

Use the actual implementation to verify terminology.

The conceptual flow may be represented as:

Request
→ Authorization
→ Handler
→ Unit of Work
→ Audit
→ Persistence

But verify the exact behavior against the current repository before presenting it as fact.

This section should be visually strong but simple.

Use code/developer aesthetics, not decorative UI.

================================================== 11. CODE SECTION
================

Create a code-oriented section.

Use REAL code from the repository whenever possible.

Do NOT invent interface signatures.

If the current page contains placeholder code, replace it with verified code from the repository.

Show a small, meaningful example rather than a large code dump.

Possible areas:

- ICommand
- IQuery
- Handler
- Pipeline
- UnitOfWork

But verify exact signatures from the current source.

The code block must:

- Be readable
- Use LTR direction
- Use monospace font
- Work well on mobile
- Not overflow the page horizontally except inside its code container

================================================== 12. PROJECT STRUCTURE
=====================

Show the recommended/project structure from the repository.

The repository currently describes a structure conceptually similar to:

/src
├─ Gamma.Kernel
│ ├─ Abstractions
│ ├─ Behaviors
│ ├─ Transactions
│ └─ Common
│
├─ MyApp.Domain
│ ├─ Entities
│ ├─ ValueObjects
│ └─ DomainServices
│
├─ MyApp.Application
│ ├─ Commands
│ ├─ Queries
│ └─ DTOs
│
├─ MyApp.Infra
│ ├─ Data
│ ├─ Logging
│ └─ Services
│
└─ MyApp.Api
└─ EndPoints

Verify the current repository before publishing this.

================================================== 13. USE CASES
=============

Explain where Gamma.Kernel makes sense.

Use cases:

- Enterprise applications
- SaaS applications
- Long-lived .NET systems
- DDD-based systems
- CQRS-based systems
- Transaction-heavy applications

Avoid generic claims such as:

"perfect for every project"

"the best .NET framework"

"the most powerful framework"

================================================== 14. ROADMAP
===========

Create a clearly separated roadmap section.

Important:

These are FUTURE items and must NOT be presented as current capabilities.

Current roadmap includes concepts such as:

- Domain Events abstraction
- Outbox pattern
- Improved diagnostics / observability hooks
- Application generator from entities
- CQRS pipeline extensions
- Test harnesses / examples

Label the section clearly as:

Roadmap

or

در مسیر توسعه

Make it visually distinct from current capabilities.

================================================== 15. FAQ
=======

Create a concise technical FAQ.

Potential questions:

What is Gamma.Kernel?

What version of .NET does Gamma.Kernel target?

Is Gamma.Kernel a full framework?

Is Gamma.Kernel open source?

Does Gamma.Kernel use Dapper?

Who should use Gamma.Kernel?

Do not write answers that contradict the repository.

================================================== 16. GITHUB CTA
==============

Finish with a strong but simple developer CTA.

Example concept:

"کد منبع Gamma.Kernel را در GitHub ببینید."

Primary button:

"مشاهده Repository در GitHub"

Use:

https://github.com/doomansamaneh/Gamma.Kernel

Open external links safely with:

target="_blank"
rel="noopener noreferrer"

Do not invent documentation URLs.

================================================== 17. DESIGN SYSTEM
=================

Follow the existing Doman Samaneh design system.

Brand colors:

Orange:
#EF3F23

Dark:
#231F20

White:
#FFFFFF

Use orange as an accent.

Do NOT make the entire page orange.

The page should feel:

- Technical
- Enterprise
- Mature
- Minimal
- Professional
- Trustworthy

Avoid:

- Excessive gradients
- Neon
- Glassmorphism
- Excessive shadows
- Excessively rounded cards
- Huge decorative icons
- Generic SaaS illustrations
- Excessive animations

Use restrained borders and spacing.

Cards should not all look like floating rounded boxes.

Prefer editorial layouts, technical grids, diagrams, code blocks and structured sections.

================================================== 18. TYPOGRAPHY
==============

Use Vazirmatn for Persian content.

Code must use a suitable monospace font.

Maintain proper RTL layout.

English technical terms such as:

CQRS
DDD
Clean Architecture
Unit of Work
Authorization
Repository
Pipeline
Handler
Dapper

may remain in English where technically appropriate.

Do not awkwardly translate established software architecture terminology.

================================================== 19. CONTENT LANGUAGE
====================

Write professional Persian content.

Use:

"کسب و کار"

NOT:

"کسب و کار"

Avoid exaggerated marketing language.

Avoid unsupported claims.

Do not say:

- بهترین
- قدرتمندترین
- شماره یک
- بدون رقیب
- استاندارد جهانی

unless there is actual evidence and the claim is explicitly supported.

================================================== 20. COMPONENT ARCHITECTURE
==========================

Do not keep the entire page as one giant Astro component if the existing project architecture supports reusable components.

Use meaningful components.

Suggested structure:

src/components/gamma-kernel/

GammaKernelHero.astro
GammaKernelIntro.astro
GammaKernelFoundations.astro
GammaKernelArchitecture.astro
GammaKernelCapabilities.astro
GammaKernelPipeline.astro
GammaKernelCode.astro
GammaKernelStructure.astro
GammaKernelUseCases.astro
GammaKernelRoadmap.astro
GammaKernelFaq.astro
GammaKernelCTA.astro

Do not create unnecessary micro-components.

Separate data from presentation where practical.

For example:

src/data/products/gamma-kernel.ts

can contain:

- product metadata
- technologies
- capabilities
- use cases
- roadmap
- FAQ

Use existing project conventions if they differ.

Do not introduce a new architecture unnecessarily.

================================================== 21. SEO
=======

Improve the page SEO.

Use a clear title such as:

Gamma.Kernel | چارچوب توسعه سازمانی .NET

Create a useful meta description.

The page should naturally contain relevant concepts such as:

Gamma.Kernel
.NET
CQRS
DDD
Clean Architecture
Enterprise Application
Dapper
Unit of Work
Authorization

Do not keyword-stuff.

Use only one H1.

Use semantic H2/H3 hierarchy.

================================================== 22. ACCESSIBILITY
=================

Ensure:

- semantic HTML
- accessible buttons/links
- proper heading hierarchy
- sufficient contrast
- keyboard accessibility
- visible focus states
- meaningful aria labels where needed
- code blocks are readable
- mobile navigation works correctly

Do not rely solely on color to communicate meaning.

================================================== 23. RESPONSIVE DESIGN
=====================

Desktop:

Use the available width intelligently.

Hero can be two-column.

Technical diagrams can use horizontal layouts.

Tablet:

Collapse grids intelligently.

Mobile:

Everything must become single-column where appropriate.

Do not simply shrink desktop layouts.

Code blocks must remain horizontally scrollable when necessary.

Architecture diagrams must remain understandable on small screens.

The page must work correctly from approximately 320px width upward.

================================================== 24. PERFORMANCE
===============

Do not add heavy JavaScript.

Do not add a new dependency for decorative effects.

Prefer:

HTML
CSS
Astro

Use JavaScript only if truly necessary.

Do not use large images unless they materially improve the page.

================================================== 25. EXISTING SITE CONSISTENCY
=============================

Before editing:

Inspect:

- BaseLayout
- Header
- Footer
- global CSS
- design tokens
- typography
- existing product pages
- existing Gamma.Kernel page
- existing reusable components

The new page must look like part of the Doman Samaneh website.

It must NOT look like a separate standalone template.

================================================== 26. IMPORTANT: VERIFY AGAINST REPOSITORY
========================================

Before final implementation:

Inspect:

https://github.com/doomansamaneh/Gamma.Kernel

Read:

README
solution structure
relevant interfaces
behaviors/pipelines
transactions
authorization
audit
data/repository implementation
attributes
infrastructure abstractions

Use actual terminology and capabilities.

If the existing page contains technically inaccurate information, correct it.

If the repository has evolved beyond the README, prefer the actual implementation.

================================================== 27. DO NOT INVENT
=================

Never invent:

- Features
- APIs
- Code
- Screenshots
- Customers
- Certifications
- Performance numbers
- GitHub statistics
- Downloads
- Adoption numbers
- Enterprise customers
- Testimonials
- Awards

If something is unknown, omit it.

================================================== 28. FINAL QUALITY CHECK
=======================

Before finishing, verify:

[ ] Page is complete
[ ] No placeholder text remains
[ ] No lorem ipsum
[ ] No fake screenshots
[ ] No invented features
[ ] Roadmap is clearly separated
[ ] Code examples are verified
[ ] GitHub link works
[ ] One H1 only
[ ] SEO metadata exists
[ ] RTL works
[ ] Mobile layout works
[ ] No horizontal page overflow
[ ] Existing header/footer still work
[ ] Brand colors are correct
[ ] Vazirmatn is used
[ ] No unnecessary dependencies
[ ] Page feels technical and enterprise
[ ] Page is visually consistent with the rest of the Doman Samaneh website

================================================== 29. IMPLEMENTATION APPROACH
===========================

Do the work in this order:

1. Inspect existing Gamma.Kernel page.
2. Inspect the existing site architecture.
3. Inspect the official Gamma.Kernel repository.
4. Identify reusable existing components.
5. Identify inaccurate/placeholder content.
6. Design the improved page structure.
7. Implement/reuse components.
8. Implement responsive styling.
9. Verify all technical claims against the repository.
10. Run the project/build.
11. Fix TypeScript/Astro/CSS/build errors.
12. Inspect the final rendered page.
13. Make final visual corrections.

Do not stop after generating code.

Actually validate the implementation.

The final result should be a polished, technically credible Gamma.Kernel product page that looks like it belongs to Doman Samaneh's corporate website.
