# DESIGN.md — MinJun Huang portfolio site

## 1. Visual theme and atmosphere

Quiet, neutral grey, editorial. The site is a frame for the work, not a
performance. Restraint is the default: generous whitespace, few elements per
screen, one idea at a time.

Restraint lives in how FEW things are on the page, not in making things small or
faint. The name is set very large and very bold. Everything around it is calm.

A recruiter spends 60 to 90 seconds here. Who this is, where they are, what they
want, and how to get the CV must all be readable immediately, with no waiting and
no interaction required.

Not: pure white or pure black, not dark mode, not gradients, not loading screens.

## 2. Color palette and roles

```
--bg           #F6F6F6   page background, neutral grey
--surface      #FFFFFF   image frames, use sparingly
--ink          #0A0A0A   primary text and headings
--ink-2        #5A5A5A   secondary text, descriptions
--ink-3        #8E8E8E   meta text, labels, year
--line         #E2E2E2   hairline dividers and 1px borders
--accent       #2140F5   electric blue
--accent-dark  #5B72FF   the accent, on the dark footer only
--footer-bg    #0A0A0A   dark footer background
--footer-ink   #F2F2F2   dark footer text
```

Contrast is already checked: `--accent` on `--bg` is 6.23:1, and `--accent-dark`
on `--footer-bg` is 4.99:1. Both pass WCAG AA for small text. If either colour is
ever changed, re-check that it still clears 4.5:1 before shipping.

All other colour on the page comes from project imagery. Never add a second
accent. Never use the Greener product palette (#6B7E5A green, #C8714A terracotta)
as site branding: the blue is deliberately complementary to that warm imagery so
the frame and the work stay distinct.

### Where the accent is allowed

Exactly these six places, and nowhere else:

1. The square full stop after the name, and after the email in the footer
2. The `CV` item in the navigation
3. The section rule: its top border, its label, and its year
4. The project row meta line
5. The underline that appears on link hover
6. The offset block behind the About photo (the photo itself is black and white, so this is the only colour on that part of the page)

Never on body text, never on headings, never on the hero itself.

## 3. Typography rules

One typeface for the whole site: **Archivo**, from Google Fonts.
Weights: Regular (400), Medium (500), Bold (700). Nothing else.

No second typeface. No monospace. Do not use DM Sans or DM Serif Display here:
those belong to the Greener product, and reusing them would blur the line between
the site and the project.

```
hero    clamp(48px, 9.5vw, 156px) / lh 0.95 / 700 / tracking -0.035em
h2      clamp(28px, 3.4vw, 44px)  / lh 1.1  / 700 / tracking -0.025em
lead    19px / lh 1.5  / 400 / --ink-2
h3      22px / lh 1.3  / 500 / tracking -0.01em
body    17px / lh 1.6  / 400 / --ink-2
label   12px / lh 1.4  / 500 / uppercase / tracking 0.11em
```

The hero is the only oversized type on the site. Do not add a second large
heading. Paragraphs wrap at a maximum of 58 characters per line, even though the
column itself is wider.

### The square full stop

Archivo's full stop renders square at display sizes. This is the site's one
recurring detail. Use it deliberately and consistently: after the name, after the
email, and as the bullet in any list. Set it in `--accent`. Do not substitute a
round dot, and do not invent other decorative marks.

## 4. Component styling

**Navigation** (sticky top, solid `--bg` background so content scrolling under
it is hidden, gains a 1px `--line` bottom border once the page is scrolled.
Keep the height as it is: content being cut at its edge mid-scroll is normal)

- Left: "MinJun Huang" at label size, in `--ink`
- Right: Work / About / CV. `CV` is in `--accent` and opens a PDF in a new tab.
- No logo mark. No hamburger on desktop.

**Hero** (home page only)

- The name at hero size, followed by the square full stop in `--accent`
- One line beneath at lead size:
  `UX/UI designer based in London. Open to junior roles.`
  This line must fit on one or two full lines. Never allow a single orphan word
  to fall onto its own line.
- Nothing else. No portrait, no buttons, no scroll hint, no counters.

**Section rule**

- 1px top border in `--accent`
- Left: a label such as `01 / Selected work`, in `--accent`
- Right: the year, in `--accent`

**Project row** (the core component of the home page)

A cover must show the work, not a label. No solid-colour tiles with an initial or
a logo in place of the project: with one or two projects that reads as an empty
square, and it tells a recruiter nothing about what the person makes. Revisit
only if the site ever carries six or more projects.


- A full-width row. Rows stack vertically. Never a 3-up grid.
- Cover image at 3:2, radius 4px, 1px `--line` border
- Below the image: project title (h3), a one-line description (body), then the
  meta line at label size: tags separated by " / " and the year, in `--accent`
- Hover: the cover image scales to 1.02 over 400ms. Nothing else moves.
- This component must look correct with exactly ONE row and with TEN rows.
  Check both before shipping any change to it.

**Case study page**

- Back link (label) → project title (h2) → meta line
- Then an alternating stack: full-width image, short paragraph, full-width image
- Section rules between major parts, numbered: `01 / The problem`, `02 / Research`
- 32px gap between blocks. No sidebar, no sticky contents, no progress bar.

**Footer** (dark)

- Background `--footer-bg`, text `--footer-ink`, full-bleed to the viewport edges
- Email as a link at h2 size, followed by the square full stop in `--accent-dark`
- LinkedIn / Behance / CV / London as labels
- Nothing clever

## 5. Layout principles

- One content column, max-width 1400px, centred. Everything shares one left edge:
  the hero, the rules, the project rows and the footer all align to it.
- Paragraph text is capped at 58ch inside that column, so the column can be wide
  without the prose becoming hard to read.
- Page gutter: 24px mobile, 48px tablet, 80px desktop
- Spacing scale, use only these: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 160
- Vertical rhythm: 160px between major sections on desktop, 96px on mobile
- Everything is left-aligned. Never centre body text.
- Mobile first. Project rows stack with no layout change.

## 6. Depth and elevation

Almost none. Depth comes from hairlines and whitespace.

- Allowed: 1px `--line` borders, and one soft shadow on project cover images
  only: `0 8px 24px -8px rgba(10, 10, 10, 0.10)`
- Forbidden: shadows on text blocks, glows, blurs, glassmorphism

## 7. Site device: the London map

One device runs through the whole site: a label-free, pale grey map.

- Map style: the London outer boundary and the River Thames only. No streets,
  no borough lines, no labels. Lines in #DADADA or paler, the Thames slightly
  heavier than the boundary.
- Home: a map of London sits behind the hero. Each project with a real
  London location is marked as a small point (Greener in Kingston,
  Everyman at Baker Street).
- Case pages: the top of each case page shows that project's own area
  map (Kingston for Greener, Baker Street for Everyman), in the same style.
- The map lines must stay pale enough that the hero text reads exactly
  as it does without the map. If the map competes with the name, it is
  too dark.
- A project with no London location gets no point. It appears in the
  project list only and opens with a normal page load.
- The project list stays. The map is never the only way to reach a
  project.
- Credit "© OpenStreetMap contributors" next to the map, as OSM's
  attribution rules require.

A device must come from real material. Never add a decorative element that
does not exist in the place or the project it represents.

## 8. Do's and don'ts

**Do**

- Let the imagery supply all the colour
- Keep one visual idea per screen
- Make the first screen answer: who is this, where are they, what are they after
- Keep the hero, the About page and the footer readable with JavaScript off.
  The project list is generated from JSON, so with JS off that one area shows a
  short `<noscript>` message carrying a contact address instead. Generating the
  list from JSON takes priority over working without JS: being able to add a
  project by editing one file matters more than an audience that barely exists.

**Don't**

- Add a loading screen, intro gate, or "enter site" step
- Add 3D, canvas, WebGL, particles, custom cursors, or sound
- Use a map library. The map is a static image (SVG or WebP): no Mapbox GL,
  no Leaflet, no live tiles.
- Add a second accent colour or a second typeface
- Use more than two type sizes inside any single component
- Centre body text
- Use pure black or pure white for text or background
- Reuse the Greener product palette as site branding

## 9. Responsive behaviour

Breakpoints: 640px and 1024px

- Below 640px: single column, hero clamps to 48px, nav collapses to name plus CV
- 640 to 1024: single column, wider gutters
- Above 1024: content column centred at 1400px max

Touch targets minimum 44px. Project rows are fully tappable on mobile. Anything
that depends on hover must have a visible non-hover state on touch devices.

## 10. Motion

The entire motion budget is four things. Nothing else animates.

1. **Hero reveal**, on first paint only: the name and the line beneath it fade up
   from `translateY(16px)`, staggered 80ms apart, 450ms each, ease-out. Total
   under 600ms. The text is present in the HTML, so it is readable without JS.
   This is a content reveal, not a loading screen: nothing is withheld.
2. **Scroll reveal**: opacity 0 to 1 with `translateY(16px)` to 0, 500ms,
   ease-out, fired once, triggered 80px before entering the viewport.
3. **Hover**: project cover image scales to 1.02, 400ms, ease-out.
4. **Map zoom**: clicking a project that has a location scales the London map
   toward its point (3 to 4 times at most, never more: raster blurs), cross-fades
   into that project's area map, then opens the case page, which starts on the
   same area map. About 600ms in total. Points and rows stay real links; only an
   unmodified left click is intercepted. With prefers-reduced-motion, open the
   page directly with no zoom. Reset the zoom on `pageshow` when
   `event.persisted` is true so the back button returns to an unzoomed map. The
   case page must be fully readable whether or not the zoom played.

Honour `prefers-reduced-motion`: disable all four. No text scrambles, no
marquees, no parallax, no scroll-jacking.

## 11. The Greener interactive demo

The Greener case page carries one interactive piece: the **stamp unlock loop**,
the core of the product. A grey pin on the map, a task completed, the pin turns
green and a stamp appears on the profile.

Build it as a **cross-faded image sequence**, not as re-implemented UI. Each state
is a static export from Figma; a click cross-fades to the next. Roughly 100 lines
of JS. Never rebuild the app screens in HTML and CSS: that is weeks of work and
it will not match the Figma source.

Behaviour: it **autoplays as a loop by default**, and switches to manual control
on first click or hover. A visitor who never touches it still sees the whole
sequence. A demo that has to be figured out before it does anything gets skipped.

Place it after the static story, not instead of it.

## 12. Deferred, do not build yet

- **Hover-preview project list** (large text names, thumbnail follows the cursor).
  Needs at least four projects; with one it reads as broken. Also needs an
  always-visible fallback on touch. Revisit when the fourth project ships.
- **Scroll-drawn guide line** (an SVG path that draws itself down the page).
  Possible for the Everyman case page. That project has not started.
- **London map device** (sections 7 and 10): approved, not built yet. Build
  only after: the site is published, Everyman is done, the Greener case page is
  rebuilt in two columns, and the About photo is in.

## 13. Agent prompt guide

When building or extending this site:

- Project content lives in `/data/projects.js`, a single file holding
  `window.PROJECTS = [ ... ]`. The home list and every case study page are
  generated from it. Adding a project means adding one entry and dropping images
  into `/assets/<slug>/`. Never hardcode a project into HTML.
- It is a `.js` file loaded with a `<script>` tag, not JSON loaded with `fetch`,
  so that opening `index.html` straight from disk works. `fetch` is blocked on
  `file://`, which would mean running a local server just to preview. Keep it
  this way: no build step, no server, double-click to preview.
- Each entry has: `slug`, `title`, `year`, `summary`, `tags[]`, `cover`, and
  `blocks[]`. A block is one of exactly three types:

  ```json
  { "type": "section", "value": "The problem" }
  { "type": "heading", "value": "People want to help. They cannot see what needs doing." }
  { "type": "text",    "value": "A short paragraph." }
  { "type": "image",   "value": "assets/greener/map.png" }
  { "type": "caption", "value": "What the image shows, in one line." }
  ```

  A `section` block renders as the numbered section rule from section 4. The
  number is generated from its position, so never write `01 /` into the value.
  Do not add a sixth block type without updating this file first.

  The three-part section header is `section` then `heading` then `text`: the
  label carries only the number, the heading carries the point of the section,
  and the text explains it. A section with no heading reads flat, because the
  label alone says nothing. A `caption` sits under the image it describes and is
  optional; use it where the image needs a line of orientation, not on every one.
- Keep the site static: plain HTML, CSS and JavaScript. No framework, no build
  step. Deployed on GitHub Pages from the repository root.
- Before adding any visual flourish, check section 8. If it is not listed under
  Do, do not add it. Before adding a motion effect, check section 10. If it is
  not one of the three listed, do not add it.
