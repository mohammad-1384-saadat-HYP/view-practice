## 2026-10-07

- Task: Show header subroutes vertically on hover.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Added per-route open state, hover handling, click toggles, and recursive vertical subroute lists. Kept the primary route list horizontal.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed.

- Task: Animate nested header navigation with Motion.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Nested route panels now open to the right instead of nesting below their parent row; the primary dropdown animates height, side panels animate width, and Motion animates hover colors and caret rotation.
- Important decisions: Used the requested white, black, and gold palette, with gold hover rows and black text. Kept click toggles alongside hover for touch and keyboard use.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed; no editor errors. Browser interaction was not verified because the development-server launch was skipped.

- Task: Add reusable global color tokens and a gold palette.
- Files changed: `src/app/globals.css`, `src/components/header/Header.jsx`.
- Changes: Added paper and ink tokens plus an 11-step gold palette using Tailwind v4 theme variables. Replaced the header's hardcoded gold and ink colors with those shared tokens.
- Important decisions: Preserved the existing gold `#D4AF37` as `gold-500` and the existing text color `#111111` as `ink`.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed; no editor errors. Production build was not run because the build command was skipped.

- Task: Replace menu borders with gold box shadows and slide-in animations.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Replaced menu borders with a shared gold-accented box shadow; changed vertical dropdowns to slide on the y-axis and side flyouts to slide on the x-axis, with opacity transitions.
- Scope note: Preserved the current user-authored route/link structure and other menu styles.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed.

- Task: Replace menu borders with gold box shadows and use slide animations.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Replaced both menu borders with a shared gold-accented box shadow. Changed vertical menu entry/exit to slide on the y-axis and side flyouts to slide on the x-axis, keeping opacity transitions.
- Scope note: Preserved the current route/link structure and unrelated user edits.
- Verification: Pending.

- Task: Animate menu panels from zero dimensions.
- Files changed: `src/components/header/Header.jsx`.
- Changes: The primary dropdown now animates height from `0` to `auto`; side panels animate width from `0` to `auto`. Both wrappers clip content during the size animation and retain their directional slide/fade.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed. Browser verification was not performed because the dev-server launch was skipped.

- Task: Make route text and icons use ink on Link hover.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Added Tailwind `group` to the existing route Links and `group-hover:text-ink` to the title and icon descendants.
- Important constraint: Preserve the existing Link/button DOM boundary. Do not move or expand the Link to take over the full route label and toggle button; this change only adds hover classes to the existing structure.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed.

- Task: Add a mobile navigation drawer with nested vertical routes.
- Files changed: `src/components/header/Header.jsx`.
- Changes: Added a React Icons burger trigger, a left-side drawer sized to 75vw with a `max-w-sm` cap, close button, backdrop and Escape handling, and recursively stacked subroute accordions.
- Important constraint: Preserved the desktop navigation and existing Link/button structure; the mobile route rows use separate Link and toggle-button siblings.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed without warnings.

- Task: Make mobile route rows open their submenus without blocking navigation.
- Files changed: `src/components/header/Header.jsx`.
- Changes: The mobile row div now toggles subroutes when clicked. The route Link stops propagation and navigates normally; the arrow button stops propagation and toggles once. Desktop navigation was not changed.
- Verification: `npm run lint -- src/components/header/Header.jsx` passed.

- Task: Fix the home page Header import and organize source modules by feature.
- Files changed: `src/app/page.js`; files under `src/features/header`, `src/features/footer`, and `src/features/scroll-to-top`; removed replaced files under `src/components` and `src/lib`.
- Changes: The home page now imports the named Header export from `@/features/header`. Grouped header UI, desktop/mobile navigation components, and route data under the header feature; moved the existing footer and scroll-to-top placeholders into their own feature folders with public entry points. Replaced the duplicate inline desktop route list with the dedicated DesktopRouteItem component, fixing the undefined component reference.
- Important decisions: Kept `app` focused on route composition, made Header a Server Component that composes its client components, and kept route data inside its owning feature. Preserved the existing desktop Link/button behavior; independent route navigation and disclosure remains mobile-only. Did not alter existing package/config/CSS/layout changes.
- Verification: `npm run lint` passed; VS Code reported no errors. No production build was run, per project workflow instructions.
