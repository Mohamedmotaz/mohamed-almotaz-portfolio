# Mohamed Almotaz - Portfolio

A bilingual portfolio for visual design, digital products and educational course operations.

**Live site:** https://mohamed-almotaz.pages.dev/  
**Arabic:** https://mohamed-almotaz.pages.dev/ar/

## Work represented

Twelve projects: Shift Planner, GULFRN, Motaz CV Builder, MSRA IV, PLABridge, property rental visuals, PinkCare, Acute GVHD Assessment, Al-Taqwa Institute, NursePath Germany, PflegeKompass and MTI Health.

Each project explains the contribution and includes actual work samples. MSRA IV and PLABridge cover visual design, content administration, course operations and subscriber support. MSRA IV's current visit link is https://msraiv.com/home; earlier interface samples remain credited as earlier work. Al-Taqwa represents logo design. PflegeKompass is a local design prototype. Educational and clinical interface prototypes do not establish clinical validation or patient-care deployment.

## Structure

- `projects.json`: bilingual project content, contribution scope and visit links.
- `templates.mjs`: home and project HTML templates.
- `site-builder.mjs`: produces 26 static HTML pages, image assets, sitemap and Cloudflare configuration.
- `enhancements.js`: category filtering, accessible image viewing and restrained motion. All content and links are available without JavaScript.
- `style.css`: responsive editorial design, RTL, keyboard focus and reduced-motion rules.
- Two CV designs: nursing and design/digital operations, using the original serif layout. The former full-CV URL remains an alias of the design version. Teaching Assistant experience is excluded from both versions.

## Build

Requires Node.js 22 or later.

```sh
npm install
npm run build
```

The deployable directory is `dist/`. For review previews:

```sh
npm run build:preview
```

The preview build adds `noindex` in HTML and response headers, and disallows crawling in `robots.txt`. A production build allows indexing and uses the chosen origin for canonicals and language alternates:

```sh
node site-builder.mjs --origin=https://mohamed-almotaz.pages.dev --out=dist-production
```

For a bundled runtime, `PORTFOLIO_SHARP_PATH` can point to an installed Sharp module entry point; otherwise the normal project dependency is used.

## Deploy & maintain

Upload the contents of the generated directory, with `index.html` at the archive root, to Cloudflare Pages. Direct uploads are managed separately from the GitHub repository; committing here does not automatically deploy to Cloudflare.

Retain the last approved deployment for rollback. Review both languages, direct project paths, mobile layout, images, PDF links and category filtering before production. Rebuild after editing content; upload only the generated public directory. Private documents, student records, account credentials and audit reports do not belong in the public bundle.

Images are WebP with dimensions and deferred loading below the leading content. Arabic and Latin web fonts are locally hosted WOFF2 subsets; their license is included. There is no analytics tracking or service worker in this portfolio. No domain purchase is required for the `pages.dev` address.

## Contribution accuracy

The portfolio describes product direction, interface design, development, visual communication and course operations. It makes no claim of independent clinical validation, exam-result improvements or unverified adoption statistics. Development tools are implementation details; responsibilities and outcomes remain evidence based.

Personal identity uses the accepted navy and blue MA wordmark and a matching tab icon. Multi-image project galleries support native touch swiping, buttons and arrow keys, with reduced-motion preferences respected. Shift Planner includes recovered social and landscape campaign visuals; their Google Play publication remains separate.

## Presentation

The bilingual home includes a personal introduction, selected work, background, working approach, a separate nursing experience section, two original-layout CVs and contact links. The accepted personal identity is used in the header and favicon. Original screenshots are displayed in CSS device/browser frames; presentation viewports exclude status/gesture bars and scrollbars without altering the original media. The cut-off Shift Planner picker was replaced with a complete source capture. MTI Health uses an isolated identity symbol and a clean viewport of the original module screen.

Arabic pages use locally hosted IBM Plex Sans Arabic with its font license. Nursing copy is concise; internship wording is omitted following the owner’s correction. Shift Planner separates Android media, the introductory review website design and the established web app at https://shift-planner-kh.pages.dev/.

## Repository hosting

The root `index.html` forwards the previous GitHub Pages address to the current Cloudflare portfolio. The full generated site, including Arabic and project paths, is preserved in `portfolio-production.zip`. Source assets and build files are stored at the repository root. The previous main version is retained in `backup/portfolio-before-2026-10-08`.

Shift Planner web app: https://shift-planner-kh.pages.dev/  
Introductory web design: https://shift-planner-test.pages.dev/  
GULFRN website: https://gulfrn.pages.dev/
