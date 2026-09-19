# Iridescent glass portfolio

A responsive, continuously scrolling portfolio built with Next.js, React, and CSS.
Includes a floating glass navigation bar, profile cards, expandable experience
highlights, filterable projects, article readers, and contact links.

The visual direction pairs a violet poster-style hero with black collectible
cards. Iridescent edges and soft cyan, pink, and lilac reflections follow the
pointer. Touch devices show a static foil finish; reduced-motion preferences
disable the pointer effect and animations.

## Start locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

If your local environment does not support Turbopack, use
`npm run build -- --webpack` or `npm run dev -- --webpack`.

## Edit your content

**Start with `app/content.ts`.** All résumé, project, and article entries are
examples. Replace the name, email, dates, statistics, companies, and writing
before publishing.

- Profile: `name`, `initials`, `role`, `avatar`, `availability`, `hero`, and `about`.
  The full-height hero places your introduction beside an iridescent personal
  card. Set `avatar` to use a photo on that card, or leave it empty for the prism
  illustration. `hero.edition` edits the card label; `hero.scrollLabel` edits
  the floating button that scrolls to About below the first screen.
- Overview: `stats` appears below the iridescent card in the hero’s right column; `now` and `skills` appear
  in their respective sections.
- Experience: duplicate an entry in `experience`. Role highlights expand inline.
- Projects: duplicate an entry in `projects` and give it a unique `id`.
  Filters are generated automatically from each project's `category`.
  `details` contains paragraphs shown in the project dialog.
  Optional `liveUrl` and `sourceUrl` add real destination links.
- Articles: add entries to `writing` with unique IDs, ISO dates (`YYYY-MM-DD`),
  and paragraphs in `body`. Optional `url` links to an externally published article.
- Contact: change `email`, `contact`, and add entries to `socials`, such as
  `{ label: "GitHub", href: "https://github.com/your-username" }`.
  An empty social list shows no placeholder social links.

No CMS, account, or database is required. Changes appear during development;
rebuild and redeploy to update a deployed site.

## Add your images

Place images under `public/`. Set `avatar: "/profile.jpg"` for a profile photo.
For a project, add `image: "/my-project.jpg"` and a descriptive `imageAlt`.
Local images work without configuration.

If `image` is omitted, the project uses one of the built-in CSS previews:
`dashboard`, `orbit`, `studio`, or `notes` (the `visual` field).
These are decorative sample concepts, not screenshots of working applications.

For remote images, add the precise allowed host and path to
`images.remotePatterns` in `next.config.ts`. Local files are simplest.

## Customize the design

- `app/globals.css`: colors, glass surfaces, responsive layout, and motion.
- `app/_components/iridescent-light.tsx`: pointer-driven glass reflections.
- `public/grain.svg`: the lightweight grain texture used behind the hero.
- `app/page.tsx`: page sections and layout.
- `app/_components/portfolio-interactions.tsx`: navigation, filtering, and dialogs.
- `app/_components/project-visual.tsx`: built-in project illustrations.
- `public/icon.svg`: browser icon.
- `app/layout.tsx`: metadata (name and description are read from the content file).

The site uses system fonts, local illustrations, keyboard-accessible native
dialogs, visible focus states, and reduced-motion preferences. It does not
fetch fonts or artwork from third parties.

To tune the foil, edit `--foil-opacity` and `--foil-border-opacity` in
`app/globals.css`. The main accent is `--accent`; the purple action color is
`--violet`. Text stays above the reflection layers for readability.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
