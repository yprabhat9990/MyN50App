# MyNext50 (NEXT50) — Marketing site

Single-page application for **MyNext50** / **NEXT50**: landing content, program and community marketing, resources, legal pages, and contact. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS** (v4). Client-side routing via **React Router** with **lazy-loaded** route modules for faster initial load.

## Prerequisites

- **Node.js** `>=24.14.0 <25` (see `package.json` / Volta)

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR      |
| `npm run build`   | `tsc -b` then production Vite build |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | ESLint on `ts` / `tsx`              |
| `npm run test`    | Vitest                              |

## App shell and behavior

- **`HomeLayout`** (`src/Layout/HomeLayout.tsx`) wraps every route: **`AppTooltipProvider`** (nav/tooltips), fixed **header**, scrollable **main** (`<Outlet />`), and **footer**.
- **Header**: logo (`BrandLockup` → `/`), **desktop + mobile nav** (`Navbar`), **light/dark theme** toggle, and auth-style **CTA buttons** (`Header` / `HeaderAuthButtons`).
- **Navigation data** lives in [`src/data/site-layout.ts`](src/data/site-layout.ts): primary links (Home, Communities, LifeCrafter Program, Stories) plus **About** with a **dropdown** (Events, Blogs, Podcasts, Resources, Contact, Guidelines, Policies, Courses). **Resources** is only in the About dropdown, not duplicated on the top bar.
- **Footer**: four columns (Company, Programs, Resources, Legal). Link targets are mapped in [`src/Components/Footer/Footer.tsx`](src/Components/Footer/Footer.tsx) (`FOOTER_ROUTES`) to real routes or placeholders where the page is not built yet.
- **Marketing full-bleed layout**: `/communities` and `/lifecrafter-program` use a wider, edge-to-edge surface; other pages use a centered `max-w-[1180px]` column (see [`src/lib/page-shell.ts`](src/lib/page-shell.ts)).
- **Error handling**: route-level `ErrorBoundary`; lazy routes show `PageLoadingFallback` while chunks load.

## Routes

### Implemented pages

| Path                     | Page module                                                | Role                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                      | [`src/pages/Home.tsx`](src/pages/Home.tsx)                 | Hero, communities preview, “how it works” / trust, dual value props; sections anchor to `#communities`, `#resources`, `#lifecrafter-program`. |
| `/about`                 | `about-page.tsx`                                           | About story and beliefs (composed from `Components/About`).                                                                                   |
| `/stories`               | `stories-page.tsx`                                         | Long-form story layout (`Components/Stories`).                                                                                                |
| `/communities`           | `communities-page.tsx`                                     | Communities grid and CTAs (`Components/Communities`).                                                                                         |
| `/lifecrafter-program`   | `lifecrafter-program-page.tsx`                             | Program marketing sections (`Components/LifeCrafterProgram`).                                                                                 |
| `/resources`             | `resources-hub-page.tsx`                                   | Resources hub (`ResourcesHubContent`).                                                                                                        |
| `/resources/library`     | `resources-library-page.tsx`                               | Library / themes view (`ResourcesPageContent`).                                                                                               |
| `/contact`               | `contact-page.tsx`                                         | Contact form and help cards.                                                                                                                  |
| `/events`                | `events-page.tsx`                                          | Events section UI.                                                                                                                            |
| `/guidelines`            | `guidelines-page.tsx`                                      | Community guidelines.                                                                                                                         |
| `/policies`              | [`src/pages/PoliciesPage.tsx`](src/pages/PoliciesPage.tsx) | Hub listing links to individual legal pages.                                                                                                  |
| `/terms`                 | `terms-of-use-page.tsx`                                    | Terms of use.                                                                                                                                 |
| `/privacy-policy`        | `privacy-policy-page.tsx`                                  | Privacy policy.                                                                                                                               |
| `/instructor-policy`     | `instructor-policy-page.tsx`                               | Instructor policy.                                                                                                                            |
| `/payment-refund-policy` | `payment-refund-policy-page.tsx`                           | Payment & refund policy.                                                                                                                      |
| `/ip-disclaimers`        | `ip-disclaimers-page.tsx`                                  | IP & disclaimers (tabs / sections).                                                                                                           |

### Placeholder routes

Paths that appear in nav or footer but do not have a dedicated React page yet are registered in [`src/data/app-routes.ts`](src/data/app-routes.ts) and render [`PlaceholderPage`](src/pages/PlaceholderPage.tsx) (e.g. `/blogs`, `/podcasts`, `/courses`, `/login`, `/register`, `/team`, `/careers`, `/membership`, `/resources/gallery`, and any other nav-only segments not in `IMPLEMENTED_ROUTE_SEGMENTS`).

### Not found

Unknown paths render [`src/pages/NotFound.tsx`](src/pages/NotFound.tsx) with hints from [`src/lib/not-found-suggestions.ts`](src/lib/not-found-suggestions.ts).

## Source layout

```
src/
├── App.tsx                 # `RouterProvider`
├── router-config.tsx       # Route tree (`appRouteObjects`) for browser + test routers
├── main.tsx                # Root render, root error boundary
├── Layout/
│   ├── HomeLayout.tsx      # Site shell (tooltip provider, header, outlet, footer)
│   └── NavbarLayout/       # Navbar + active-route helpers
├── pages/                  # Route components (one file per major URL)
├── Components/             # UI by feature area
│   ├── About/
│   ├── Communities/
│   ├── Contact/
│   ├── Events/
│   ├── Footer/
│   ├── Guidelines/
│   ├── Header/
│   ├── Home/               # Landing sections (hero, communities preview, dual value, co-creation form, etc.)
│   ├── InstructorPolicy/
│   ├── IpDisclaimers/
│   ├── LifeCrafterProgram/ # Layout primitives + `sections/`
│   ├── PaymentRefundPolicy/
│   ├── PrivacyPolicy/
│   ├── Resources/
│   ├── Stories/
│   ├── TermsOfUse/
│   └── Ui/                 # Shared primitives (Button, Card, Badge, Input, Label, PageBreadcrumb, …)
├── data/                   # Copy, nav, route helpers, page-specific models (`*-page-data.ts`, `home-data.ts`, …)
├── assets/                 # Images grouped by page/feature; imported via `*.ts` barrels where used
├── hooks/                  # e.g. `use-theme`, `use-page-title`
├── lib/                    # `utils` (cn), `tooltip`, `page-shell`, validation, not-found helpers
└── types/                  # Shared TS types (e.g. `layout`, `home`)
```

## Data and configuration

- **Site chrome**: [`src/data/site-layout.ts`](src/data/site-layout.ts) — `siteBrand`, `siteNav`, `siteFooterColumns`.
- **Home content**: [`src/data/home-data.ts`](src/data/home-data.ts) — hero, communities preview, process steps, value columns (consumed by `Home.tsx`).
- **Feature pages**: parallel `src/data/*-page-data.ts` (and `resources-hub-data.ts`) feed the corresponding `Components/*/…PageContent` or sections.

## Testing

Vitest is configured with [`src/test/setup.ts`](src/test/setup.ts). Example test: [`src/test/App.test.tsx`](src/test/App.test.tsx).

## Styling

- Global styles: [`src/index.css`](src/index.css) (Tailwind v4, design tokens, shadcn tailwind import).
- UI primitives follow the shadcn-style aliases in [`components.json`](components.json) (`@/Components/Ui`, `@/lib/utils`).
