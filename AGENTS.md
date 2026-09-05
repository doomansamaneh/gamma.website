# GammaDesk Website — Agent Instructions

## Project

This repository contains the public corporate website for GammaDesk, an enterprise IT Service Management (ITSM) platform.

The website must be a modern, fast, professional and SEO-friendly static website.

## Primary Goals

1. Present GammaDesk as an enterprise-grade software company.
2. Clearly explain the GammaDesk ITSM platform.
3. Present products and capabilities professionally.
4. Generate qualified leads.
5. Provide strong technical credibility.
6. Achieve excellent SEO and Core Web Vitals.
7. Avoid unnecessary technical complexity.

## Architecture

This is a static website.

Preferred stack:

- Astro
- TypeScript
- HTML
- CSS
- Tailwind CSS only when it improves maintainability
- Markdown/MDX for content

Do NOT introduce:

- WordPress
- PHP
- MySQL
- Server-side CMS
- unnecessary backend services
- unnecessary JavaScript frameworks

Prefer static HTML whenever possible.

## Engineering Principles

- Keep the architecture simple.
- Prefer server-rendered/static HTML.
- Minimize client-side JavaScript.
- Components must be reusable.
- Avoid duplicated markup.
- Keep dependencies minimal.
- Use semantic HTML.
- Accessibility is required.
- Mobile-first responsive design.
- No hardcoded secrets.
- Never commit API keys, passwords, tokens or credentials.

## Design Direction

GammaDesk is an enterprise software company.

The visual language should communicate:

- enterprise
- reliability
- technical maturity
- security
- scalability
- professionalism

Avoid:

- generic startup aesthetics
- excessive gradients
- excessive animations
- childish illustrations
- overly colorful interfaces
- template-looking sections

Use a restrained corporate visual system with strong typography, spacing and hierarchy.

## Content

Content must be written for decision makers and technical professionals.

Primary audience:

- CIO
- IT Manager
- IT Operations Manager
- Enterprise IT teams
- Service Desk managers
- organizations requiring ITSM

Do not use exaggerated claims such as:

"the world's best"
"revolutionary"
"unmatched"

unless objectively supported.

## SEO

Every page must have:

- unique title
- meta description
- canonical URL
- semantic headings
- Open Graph metadata
- appropriate structured data where applicable
- descriptive image alt text

Do not keyword-stuff content.

SEO must never compromise readability.

## URLs

URLs must be:

- lowercase
- short
- semantic
- stable

Avoid unnecessary URL changes.

## Performance

Target:

- minimal JavaScript
- optimized images
- responsive images
- lazy loading where appropriate
- minimal third-party scripts
- excellent Lighthouse performance

## Development Workflow

Before implementing a major feature:

1. Inspect the existing project.
2. Read relevant files in `/docs`.
3. Reuse existing components.
4. Avoid unnecessary dependencies.
5. Implement the smallest clean solution.
6. Verify responsive behavior.
7. Verify SEO metadata.
8. Verify accessibility.
9. Run the build.
10. Fix build warnings/errors.

Do not rewrite working parts of the project without a clear reason.

## Important Rule

When requirements are ambiguous, prefer the simplest implementation that preserves:

- maintainability
- performance
- SEO
- accessibility
- visual consistency

Do not introduce complexity just because the technology allows it.
