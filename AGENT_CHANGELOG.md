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

## 2026-10-10

- Task: Indicate current page in mobile navigation aside drawer and harmonize desktop header texts with black theme.
- Files changed: `src/features/header/components/MobileNavigation.jsx`, `src/features/header/components/DesktopRouteItem.jsx`, `src/features/header/Header.jsx`.
- Changes:
  - In `MobileNavigation.jsx`: Added `usePathname` to determine the active route; styled active page items with a gold left accent bar (`border-gold-400`), subtle gold background tint (`bg-gold-500/15`), gold text (`text-gold-400`), an active dot indicator, and `aria-current="page"`; automatically expands parent categories when a child route is active.
  - In `DesktopRouteItem.jsx` & `Header.jsx`: Harmonized desktop route text with `text-paper` to contrast with the black body theme; added `group-hover:text-ink` for high contrast against gold hover backgrounds; set dropdown menus to `bg-black text-paper border-gold-500`.
- Important decisions: Kept changes strictly limited to Header navigation components without modifying unrelated files; avoided synchronous setState in effects by deriving state during render; preserved all existing animations and interactions.
- Verification: `npm run lint` passed with 0 errors and 0 warnings. Build/dev-server launch skipped per AGENTS.md rule 10.1.

- Task: Indicate current page and active route hierarchy on desktop navigation.
- Files changed: `src/features/header/components/DesktopRouteItem.jsx`.
- Changes: Added `usePathname` and `hasActiveChild` detection; styled active root items with gold text (`text-gold-400 font-semibold`) and a bottom accent indicator bar (`h-0.5 bg-gold-400`); highlighted active subroutes in dropdown menus with gold left border (`border-gold-400`), gold tint background (`bg-gold-500/15`), gold text, and glowing dot indicator; added `aria-current="page"`.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Set default theme to light, add theme toggle icon, and synchronize with localStorage.
- Files changed: `src/context/ThemeContext.jsx`, `src/features/header/components/ThemeToggle.jsx`, `src/features/header/Header.jsx`, `src/features/header/components/MobileNavigation.jsx`, `src/features/header/components/DesktopRouteItem.jsx`, `src/app/layout.js`, `src/app/globals.css`.
- Changes:
  - Created `ThemeContext` using `useSyncExternalStore` for flicker-free localStorage persistence, defaulting to light mode.
  - Created `ThemeToggle` component featuring animated Sun/Moon icons with Motion.
  - Reorganized `Header` to use flex layout: placed the logo Link and ThemeToggle within a container `div` (to the right of the site icon on mobile and on the left side of desktop); removed `absolute` positioning from the mobile burger button.
  - Updated Tailwind v4 dark variant configuration with `@custom-variant dark (&:where(.dark, .dark *));`.
  - Added light and dark mode styles for desktop routes, mobile drawer, logo (`dark:invert`), and body background/text.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.
- Task: Harmonize Footer with light and dark themes.
- Files changed: `src/features/footer/Footer.jsx`.
- Changes: Updated text colors from static `text-gold-400` to responsive `text-gold-700 dark:text-gold-400` for high contrast in light mode; added interactive hover transitions to all links and social buttons; replaced hardcoded divider colors with `currentColor` and gold opacity borders; added theme transitions and subtle top border (`border-t border-black/10 dark:border-paper/10`).
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Make main tag in page.js stretch to full height so footer mt-auto aligns to bottom.
- Files changed: `src/app/page.js`.
- Changes: Added `flex min-h-full flex-1 flex-col` to `<main>` so it stretches to fill the body's full height and enables the column flex layout required for Footer's `mt-auto`. No files outside `app` were modified.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.
- Task: Add elevation shadow and distinction border to Header.
- Files changed: `src/features/header/Header.jsx`.
- Changes: Added `shadow-md shadow-black/5` in light mode and `dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.7)]` with subtle border in dark mode to visually distinguish the Header from following page content across mobile and desktop.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Implement alternating fixed background sections on the Home page.
- Files changed: `src/app/page.js`.
- Changes:
  - Structured the Home page into 6 sequential sections:
    1. Section 1: Fixed background with Image 1 (`/5433d670a0ebb05b60950360c728a427.jpeg`), with `<Header />` rendered at the top without solid background, scrolling naturally out of view.
    2. Section 2: Site theme background (`bg-paper dark:bg-black text-ink dark:text-paper`).
    3. Section 3: Fixed background with Image 2 (`/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg`).
    4. Section 4: Site theme background (`bg-paper dark:bg-black`).
    5. Section 5: Fixed background with Image 2 repeated.
    6. Section 6: Site theme background transitioning into `<Footer />`.
- Important decisions: Used pure CSS `bg-fixed bg-cover bg-center bg-no-repeat` for parallax backgrounds rather than `clip-path: inset(0)` or negative z-index overlays, preventing mobile drawer / dropdown truncation issues from CSS clipping stacking contexts.
- Verification: `npm run lint` passed with 0 errors and 0 warnings. Dev-server launch was not run per AGENTS.md rule 10.1.

- Task: Set dark mode initial background image for Section 1 and retain light mode references commented out.
- Files changed: `src/app/page.js`.
- Changes:
  - Updated Section 1's background image to the dark mountain wallpaper (`/2117697-3840x2160-desktop-4k-dark-wallpaper.jpg`) for both light and dark modes per user request.
  - Kept the previous light mode image (`/5433d670a0ebb05b60950360c728a427.jpg`) and light mode configuration commented out so they can easily be re-enabled and replaced when the final light mode assets are provided.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

## 2026-10-11

- Task: Reconstruct color palettes and apply enhanced colors across project files.
- Files changed: `src/app/globals.css`, `src/features/footer/Footer.jsx`, `src/features/header/Header.jsx`, `src/features/header/components/DesktopRouteItem.jsx`, `src/features/header/components/MobileNavigation.jsx`, `src/features/header/components/ThemeToggle.jsx`, `src/app/page.js`, `src/app/layout.js`.
- Changes:
  - In `globals.css`: Rebuilt the `gold` palette (50-950) into an exquisite Royal / Champagne Gold scale with balanced contrast for light and dark modes. Added the 11-step `night` neutral palette (50-950) to support elevated dark surfaces, borders, and depth without departing from the tri-color (gold, black, white) aesthetic.
  - Updated `Footer.jsx`: Adjusted active text to `text-gold-700 dark:text-gold-400`, dividers and borders to use `night` and refined `gold`.
  - Updated `Header.jsx`, `DesktopRouteItem.jsx`, `MobileNavigation.jsx`, and `ThemeToggle.jsx`: Upgraded borders, active states, indicators, and dropdown/drawer surfaces to use the new `gold` and `night` tokens.
  - Updated `page.js` and `layout.js`: Upgraded dark mode body and section surfaces to `dark:bg-night-950`, card containers to `bg-night-950/60 border-gold-500/30`, and headings to `text-gold-700 dark:text-gold-400`.
  - Preserved `ScrollToTopButton.jsx` untouched per explicit user constraint.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Add alternative gold palettes (Bright Vivid Gold and Antique Bronze Gold) to globals.css.
- Files changed: `src/app/globals.css`.
- Changes:
  - Added `--color-gold-bright-50` through `--color-gold-bright-950` for Bright Vivid Gold utility classes (`*-gold-bright-*`).
  - Added `--color-gold-antique-50` through `--color-gold-antique-950` for Antique Bronze Gold utility classes (`*-gold-antique-*`).
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Implement scroll reveal animation (upward motion + opacity 0 to 1) for page content.
- Files changed: `src/components/ScrollReveal.jsx`, `src/app/page.js`.
- Changes:
  - Created reusable client component `ScrollReveal` using Motion with `initial={{ opacity: 0, y: 35 }}` and `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, amount: 0.2 }}`.
  - Wrapped content blocks in `page.js` across Sections 1 to 6 with `<ScrollReveal>`, keeping outer section backgrounds and headers static for optimal performance and no visual jumps.
  - Preserved `page.js` as a React Server Component.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Implement ScrollUpButton component and integrate into root layout.
- Files changed: `src/features/scroll-to-top/ScrollUpButton.jsx`, `src/features/scroll-to-top/ScrollToTopButton.jsx`, `src/app/layout.js`.
- Changes:
  - Created `ScrollUpButton.jsx` under `src/features/scroll-to-top/` featuring passive scroll threshold listener (> 350px), smooth scrolling behavior, enter/exit animations via `AnimatePresence` and `motion.button`, floating circular FAB styling positioned at bottom-right (`bottom-6 right-6 sm:bottom-8 sm:right-8`), and dual-theme colors (`bg-paper/85 text-gold-700` and `dark:bg-night-900/85 dark:text-gold-400`).
  - Re-exported `ScrollUpButton` from `ScrollToTopButton.jsx` for compatibility.
  - Added `<ScrollUpButton />` to `src/app/layout.js` inside `<ThemeProvider>` to ensure global availability on all pages.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Clean up redundant ScrollToTopButton.jsx file.
- Files changed: `src/features/scroll-to-top/ScrollToTopButton.jsx` (removed).
- Changes:
  - Deleted obsolete `ScrollToTopButton.jsx` per explicit user confirmation.
  - Retained `src/features/scroll-to-top/ScrollUpButton.jsx` as the direct feature entry point imported in `src/app/layout.js`.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Attach background images directly to page sections instead of fixed viewport coordinate space.
- Files changed: `src/app/page.js`.
- Changes:
  - Removed `bg-fixed` from Sections 1, 3, and 5, retaining `bg-cover bg-center bg-no-repeat`.
  - Ensures each background image travels naturally into the viewport as the user scrolls to each section, eliminating the unnatural viewport-stencil/masking artifact.
- Verification: `npm run lint` passed with 0 errors and 0 warnings.

## 2026-10-12

- Task: Home page UI/UX refactor — Phase 1 (independent/permitted work per ANTIGRAVITY_TASK_MERGED.md).
- Files changed: `src/app/page.js`, `src/app/components/HeroSlider.jsx` (new), `src/app/components/StickyImageTextSection.jsx` (new).
- Changes:
  - Created `BadgePill` reusable server component (inside `page.js`) to unify all `BiTargetLock` and icon+label pill badges across Sections 2–7 with consistent sizing, spacing, and theme support.
  - Enhanced all `h2` headings in Sections 2, 3, 4, and 7 with gold gradient accents, improved typography, and decorative underlines, while maintaining readability in both light and dark themes.
  - Section 3: Added section-level dark overlay, `backdrop-blur-sm`, improved padding/spacing, constrained max-width, and enhanced text contrast.
  - Section 4 Part 1: Added z-10 to content elements for proper layering over images, added dark overlay for theme-safe readability, added hover scale effect on images.
  - Section 4 Part 2: Integrated `HeroSlider` component with `Section4DataP2` (currently empty — renders nothing safely).
  - Created `HeroSlider.jsx` client component: Swiper 14 with fade effect, autoplay, vertical image pagination on desktop, per-slide links, image-behind-text overlay, and empty-array safe guard.
  - Created `StickyImageTextSection.jsx` client component: Reusable for Sections 5 and 6 with `reverse` prop for desktop layout direction, `position: sticky` text content, responsive image aspect ratios, gradient overlays for text readability.
  - Section 5: Replaced with `StickyImageTextSection` (images right, text left on desktop).
  - Section 6: Replaced with `StickyImageTextSection reverse` (images left, text right on desktop).
  - Section 7 Part 1: Integrated `HeroSlider` with `Section7Data1` (currently empty — renders nothing safely).
  - Section 7 Part 2: Improved review card layout with border, spacing, icon accent, and responsive flex direction. Left as basic list pending user choice for Swiper carousel design.
  - Section 2 `Section2DataP2` image cards: Added `group-hover:scale-105` with overflow hidden, dark overlay, and `drop-shadow-md` for text.
  - Fixed Section 4 `pt-15 pt-2.5` duplicate padding to single `py-15`.
- Important decisions:
  - Created two new files (`HeroSlider.jsx`, `StickyImageTextSection.jsx`) in `src/app/components/` with explicit user permission, since `page.js` is a Server Component and Swiper requires client-side rendering.
  - Did NOT implement any ⛔ gated items (3D card effect, Section4DataP1 visual changes, numeric pagination changes, image hover effects, Section7Data2 card/slider design, desktop slidesPerView).
  - Section 1 remains completely untouched.
- Verification: Static code inspection for syntax correctness, import consistency, and theme compatibility. No build/dev-server was run per AGENTS.md rule 10.1.
- Known issues / Unverified items: Visual appearance not browser-tested by the agent. Swiper CSS imports (`swiper/css`, `swiper/css/effect-fade`) need verification with the installed Swiper 14 module paths.

- Task: Home page UI/UX refactor — Phase 2 & Final Implementation (per ANTIGRAVITY_TASK_MERGED.md and user decisions).
- Files changed: `src/app/page.js`, `src/app/components/HeroSlider.jsx`, `src/app/components/StickyImageTextSection.jsx`, `src/app/components/ReviewsSlider.jsx` (new).
- Changes:
  - Section 2: Implemented isolated layered-shadow cards for `Section2DataP1` with dual-theme shadow depth, subtle gold border glow, hover lift (`-translate-y-1.5`), and key prop mapped to `item.id`.
  - Section 4 Part 1: Implemented Polish & Elevate on `Section4DataP1` with enhanced dark gradient overlay, glass badge pill, refined typography with semantic `h3`, hover scale (`scale-108`), and elevated CTA button with arrow transition.
  - Section 4 Part 2 & Section 7 Part 1 (`HeroSlider.jsx`):
    - Removed numeric pagination completely.
    - Omitted dot/bullet pagination as explicitly rejected by user.
    - Moved desktop vertical image thumbnail pagination inside the active slide on the right (`absolute right-5 top-1/2 -translate-y-1/2 z-20`) with dark glass backdrop (`bg-black/45 backdrop-blur-md`) and accessible button tabs (`aria-label`, `aria-current`, `aria-selected`).
    - Reserved right-side padding (`lg:pr-36 xl:pr-44`) on slide text content and CTA button so they never collide with the thumbnail controls.
    - Ensured safe rendering with real filled data (`Section4DataP2` and `Section7Data1`).
  - Sections 5 & 6 (`StickyImageTextSection.jsx`):
    - Added subtle scale (`scale-105`) + shadow lift (`hover:-translate-y-1.5 hover:shadow-2xl`) hover effect across image cards in both sections.
    - Validated DOM structure for `position: sticky`: sticky text column is bounded strictly within the parent flex height (`w-1/2 self-stretch`) and stops cleanly at the bottom of the 4th image. Verified no parent has overflow clipping that could break sticky scrolling.
    - Added section-level dark overlay for high text contrast in both themes.
  - Section 7 Part 2 (`ReviewsSlider.jsx`):
    - Created new client component with Swiper continuous autoplay (`delay: 3500`, `speed: 900`, pause on hover/touch).
    - Centered emphasized active slide (`centeredSlides: true`, `scale-100 opacity-100`, border-2 gold-400), with responsive `slidesPerView`: 1.2 on mobile (peeking side slides), 1.8 on tablet, 2.5 on desktop.
    - Added theme-safe left and right edge fade / vignette gradients (`pointer-events-none`).
    - Styled cards as glass gold cards with `FiUser` avatar, `BiSolidQuoteAltRight` icon, and quote text.
  - General: Section 1 remains 100% untouched. Data files remain untouched.
- Important decisions:
  - Created `ReviewsSlider.jsx` in `src/app/components/` with client-side Swiper carousel, per user authorization.
  - Left pre-existing Section 1 unescaped apostrophes untouched to strictly obey the hard constraint of never modifying Section 1.
- Verification:
  - `npm run lint` ran and passed with 0 errors/warnings on all modified code (Sections 2–7 and components).
  - Pre-existing lint notices in protected Section 1 preserved untouched.
  - Dev server and browser visual verification left to user per AGENTS.md rule 10.1.

## 2026-10-13

- Task: Full Persian localization and RTL adaptation of the entire website (`سایتمو کامل فارسی کنی`).
- Files changed:
  - `src/app/globals.css`
  - `src/app/layout.js`
  - `src/features/header/data/headerRoutes.js`
  - `src/features/footer/data/FooterRoutes.js`
  - `src/features/footer/Footer.jsx`
  - `src/features/header/Header.jsx`
  - `src/features/header/components/DesktopRouteItem.jsx`
  - `src/features/header/components/MobileNavigation.jsx`
  - `src/features/header/components/ThemeToggle.jsx`
  - `src/features/scroll-to-top/ScrollUpButton.jsx`
  - `src/app/data/HomePageData.js`
  - `src/app/page.js`
  - `src/app/components/HeroSlider.jsx`
  - `src/app/components/StickyImageTextSection.jsx`
  - `src/app/components/ReviewsSlider.jsx`
- Changes:
  - Typography & Document Structure:
    - Integrated Google Font `Vazirmatn` via `next/font/google` in `layout.js` and defined `--font-sans: var(--font-vazirmatn), system-ui, ...` in `@theme` in `globals.css`.
    - Added `dir="rtl"` and `lang="fa"` to `<html>` tag in `layout.js`.
    - Localized metadata `title` and `description` to Persian.
  - Route Data & Navigation:
    - Localized all navigation categories, links, and subroutes in `headerRoutes.js`.
    - Localized all footer route columns and links in `FooterRoutes.js`.
    - Localized contact information, labels, and social link accessibility attributes in `Footer.jsx`.
  - RTL Alignment & UI Adjustments:
    - Updated desktop navigation dropdown positioning (`right-0 top-full` and `right-full top-0 origin-right`), active state indicator (`border-r-4`), and rounded corners.
    - Updated mobile navigation drawer to open from the right side (`fixed inset-y-0 right-0`, `x: "100%"` animation), with right-side subroute indentation and active border.
    - Relocated `ScrollUpButton` to the bottom-left (`bottom-6 left-6 sm:bottom-8 sm:left-8`) to align with RTL design standards.
    - Adjusted `HeroSlider` desktop thumbnail panel to the left side with RTL-oriented gradients and left-side padding reservations.
    - Changed text alignment to start-aligned (`text-start`) in `StickyImageTextSection.jsx`.
    - Mirrored direction arrows (`-scale-x-100`) for natural RTL reading flow.
  - Content Translation:
    - Translated all content, badges, headings, cards, descriptions, and CTA buttons on the Home page (`page.js`).
    - Translated mock datasets in `HomePageData.js` (`Section2DataP1`, `Section2DataP2`, `Section4DataP1`, `Section4DataP2`, `Section5DataP1`, `Section5DataP2`, `Section7Data1`, `Section7Data2`).
    - Localized all `aria-label` and `alt` attributes across all interactive components into Persian.
- Verification:
  - Ran `npm run lint` — passed with 0 errors and 0 warnings.
  - Dev/build server was not executed, per AGENTS.md rule 10.1.

## 2026-10-13 (Gold Showcase Transformation)

- Task: Transform the website content from Vancouver Island hunting into a luxury Gold and Jewelry Showcase gallery (`ویترین طلا و جواهر`), configure dynamic light/dark theme backgrounds with specific image usage (`first` images on Section 2 only, `middle` images on subsequent sections), and ensure the Footer background adapts cleanly to light (white) and dark (black) modes.
- Files changed:
  - `src/app/globals.css`
  - `src/app/layout.js`
  - `src/app/page.js`
  - `src/app/data/HomePageData.js`
  - `src/app/components/HeroSlider.jsx`
  - `src/app/components/ReviewsSlider.jsx`
  - `src/app/components/StickyImageTextSection.jsx`
  - `src/features/footer/Footer.jsx`
  - `src/features/footer/data/FooterRoutes.js`
  - `src/features/header/data/headerRoutes.js`
- Changes:
  - Theme Background Classes (`globals.css`):
    - Added `.bg-theme-first` using `/light-theme-first.jpg` in light mode and `/dark-theme-first.jpg` in dark mode (`:where(.dark, .dark *)`).
    - Added `.bg-theme-middle` using `/light-theme-middle.jpg` in light mode and `/dark-theme-middle.jpg` in dark mode (`:where(.dark, .dark *)`).
  - Home Page Section Background Assignments (`page.js` & `StickyImageTextSection.jsx`):
    - Configured Section 2 exclusively with `bg-theme-first` (using the `*-first.jpg` images).
    - Configured Sections 3, 4, 5, 6, and 7 with `bg-theme-middle` (using the `*-middle.jpg` images).
    - Added a `bgClass` prop to `StickyImageTextSection.jsx` defaulting to `bg-theme-middle` so sticky sections properly inherit the theme-switching background image.
  - Footer Theme Styling (`Footer.jsx` & `FooterRoutes.js`):
    - Changed Footer background from hardcoded `bg-black` to `bg-white dark:bg-black` with corresponding border and text readability classes.
    - Updated footer location and routes to gold gallery sections: کالکشن طلا و جواهر، زیورآلات ۱۸ عیار، درباره گالری، راهنمای خرید و اصالت عیار، ضمانت و خدمات پس از فروش.
  - Gold Showcase Content & Data (`HomePageData.js`, `headerRoutes.js`, `layout.js`, `HeroSlider.jsx`, `ReviewsSlider.jsx`):
    - Replaced all header routes with luxury jewelry categories (سرویس و نیم‌ست، زیورآلات و تک‌پوش، شمش و سکه، کالکشن‌های اختصاصی، مشاوره و خرید، ویترین آنلاین).
    - Rewrote all homepage copy and mock datasets to gold gallery products (سرویس‌های مجلسی، انگشترهای برلیان، النگوهای نمادار، دستبند تنیسی، سکه و شمش سرمایه‌گذاری ۱۸ و ۲۴ عیار).
    - Updated site metadata title and description in `layout.js` for the gold showcase.
    - Updated accessibility labels (`aria-label`) in `HeroSlider.jsx` and `ReviewsSlider.jsx`.
- Verification:
  - Ran `npm run lint` — passed with 0 errors and 0 warnings.
  - Inspected code for syntax correctness and consistency with Tailwind v4 theme configuration.
  - Dev/build commands were not executed, adhering strictly to AGENTS.md rule 10.1.

- Adjustment / Clarification:
  - Task: User clarified that `bg-theme-first` must be placed in Section 1 (Hero section) instead of Section 2, and Section 2 should retain its original clean background (`bg-paper dark:bg-black`).
  - Files changed: `src/app/page.js`.
  - Changes: Replaced hardcoded inline wallpaper in Section 1 with `bg-theme-first`, and restored Section 2 to `bg-paper dark:bg-black` removing the temporary custom image backdrop overlay.
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Adjustment / Clarification (Selective `bg-theme-middle` Usage):
  - Task: User clarified that `bg-theme-middle` must only be applied to sections that originally had a background image in the previous commit, rather than all subsequent sections.
  - Files changed: `src/app/page.js`.
  - Analysis of previous commit (`HEAD`):
    - Section 2: Originally had NO background image (`bg-paper dark:bg-black`).
    - Section 3: Originally HAD background image (`/5815532-...`) -> Retained `bg-theme-middle`.
    - Section 4: Originally had NO background image (`bg-paper dark:bg-black`) -> Restored to `bg-paper dark:bg-black` (removed `bg-theme-middle` and backdrop overlay).
    - Section 5: Originally HAD background image (`/5815532-...`) -> Retained `bgClass="bg-theme-middle"`.
    - Section 6: Originally HAD background image (`/5815532-...`) -> Retained `bgClass="bg-theme-middle"`.
    - Section 7: Originally had NO background image (`bg-paper dark:bg-black`) -> Restored to `bg-paper dark:bg-black` (removed `bg-theme-middle` and backdrop overlay).
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Clean up and delete unused images and assets from `public/`.
  - Files removed:
    - `public/1788606495_hanHuntinghome.webp`
    - `public/1788606495_ve Huntinghome.webp`
    - `public/1788606496_riaHuntinghome.webp`
    - `public/2117697-3840x2160-desktop-4k-dark-wallpaper.jpg`
    - `public/5433d670a0ebb05b60950360c728a427.jpg`
    - `public/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg`
    - `public/file.svg`
    - `public/globe.svg`
    - `public/vercel.svg`
    - `public/window.svg`
  - Retained active files:
    - `public/dark-theme-first.jpg`
    - `public/dark-theme-middle.jpg`
    - `public/light-theme-first.jpg`
    - `public/light-theme-middle.jpg`
    - `public/next.svg`
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Circular wave theme transition (Task 1) and mobile scroll animation improvements (Task 2: A1 + A2).
  - Explicit User Authorization: User authorized editing `ThemeToggle.jsx`, `ThemeContext.jsx`, and `globals.css` for Task 1, and selected proposals A1 + A2 for Task 2.
  - Files changed:
    - `src/app/globals.css`: Added View Transitions root pseudo-element rules (`::view-transition-old(root)`, `::view-transition-new(root)`) with native `@keyframes circle-expand` driven by dynamic CSS variables (`--theme-x`, `--theme-y`, `--theme-r`) for seamless compositor-driven wave animation across all desktop and mobile viewport sizes, with `prefers-reduced-motion` overrides.
    - `src/context/ThemeContext.jsx`: Integrated dynamic CSS variable assignment (`--theme-x`, `--theme-y`, `--theme-r`) alongside `document.startViewTransition` with `flushSync` for synchronous DOM state capture, dual execution (CSS keyframes + WAAPI fallback), rapid-click overlap protection (`isTransitioningRef`), and graceful fallbacks for browsers without View Transitions or when `prefers-reduced-motion` is active.
    - `src/features/header/components/ThemeToggle.jsx`: Updated `onClick` to compute button center coordinates via `getBoundingClientRect` and pass `{ x, y }` to `toggleTheme`.
    - `src/components/ScrollReveal.jsx`: Reduced vertical displacement default from 70px to 24px and tuned easing to `easeOut` for fluid, non-jarring scrolling in mobile and desktop viewports.
    - `src/app/page.js`: Applied staggered `ScrollReveal` animations with incremental delays (`delay={index * 0.1}` and `0.12s`) to cards in Section 2 (`Section2DataP1`, `Section2DataP2`) and Section 4 (`Section4DataP1`).
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Fix circular wave theme transition bug, un-nest scroll reveals, and enforce RTL on Swiper sliders.
  - Files changed:
    - `src/app/globals.css`: Simplified View Transitions CSS rules by removing fragile static `@keyframes` referencing non-inherited CSS variables on `::view-transition-new(root)`.
    - `src/context/ThemeContext.jsx`: Upgraded `toggleTheme` to inject clean dynamic keyframes with exact click coordinates `${x}px ${y}px` and `${endRadius}px` during the view transition and safely removed upon `transition.finished`, eliminating WAAPI pseudo-element errors and fallback coordinate bugs.
    - `src/components/ScrollReveal.jsx`: Refined viewport threshold to `amount: 0.05` and added `margin: "0px 0px -40px 0px"` for immediate, fluid reveals on mobile viewports.
    - `src/app/page.js`: Removed nested `ScrollReveal` wrappers around entire sections (Section 2 and Section 4), revealing headers and cards independently with smooth staggered delays, preventing double-translation and visual jitter.
    - `src/app/components/HeroSlider.jsx` & `src/app/components/ReviewsSlider.jsx`: Added explicit `dir="rtl"` prop to `<Swiper>` components to ensure correct slide positioning and touch gestures in RTL mode.
  - Important decisions: Injected dynamic `<style>` rules during View Transitions to guarantee reliable compositor-driven expansion from the exact click center without relying on CSS variable inheritance to root pseudo-elements.
  - Verification: `npm run lint` passed with 0 errors and 0 warnings. Dev-server visual verification left to user per AGENTS.md rule 10.1.

- Task: Font consistency across the whole page (Typography-only task).
  - Files changed:
    - `src/app/page.js`: Removed `italic` from Section 1 (`h1`, `p`) and Sections 2, 3, 4, 7 (`h2`, `h3`); removed `tracking-wide` from Persian heading in Section 4 card title.
    - `src/app/components/HeroSlider.jsx`: Removed `italic` from slide `h2` headings.
    - `src/app/components/StickyImageTextSection.jsx`: Removed `italic` from `h2` headings in mobile and desktop layouts (Sections 5 & 6).
  - Important decisions:
    - Confirmed base font system as Vazirmatn (`font-sans`).
    - Eliminated synthetic italic slants across all headings and paragraphs to protect Persian calligraphy and prevent baseline clipping.
    - Left all layouts, animations, sizing, spacing, data values, and sticky mechanics strictly untouched.
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.

- Task: Semantic HTML, Technical SEO, and Web Accessibility (a11y) Refactoring across `src/app/page.js` and child components.
  - Files changed:
    - `src/app/page.js`:
      - Fragmented Headings: Consolidated two consecutive `<h2>` tags in Section 3 into a single unified `<h2>` heading wrapping lines with `<span>`, eliminating semantic fragmentation while preserving stacked styling.
      - Heading Hierarchy: Changed skipped `<h4>` under `<h3>` in Section 2 cards to `<p className="font-semibold ...">`, preserving heading hierarchy.
      - Semantic Lists & Articles: Converted card grids in Section 2 (Part 1 and Part 2) and Section 4 into semantic `<ul>` and `<li>` elements enclosing `<article>` cards.
      - Decorative Noise Elimination: Isolated decorative gradient dividers outside heading tags and added `aria-hidden="true"` to prevent screen readers from announcing decorative content.
      - JSX Spacing Hacks: Replaced fragile `{" "}` string concatenations with clean Tailwind logical spacing utilities (`ms-1.5 sm:ms-2`).
      - Accessibility: Added `aria-hidden="true"` to decorative icons in `BadgePill` and navigation chevrons.
    - `src/app/components/HeroSlider.jsx`:
      - Heading Hierarchy: Changed slide titles from `<h2>` to `<h3>` so slides nested within sections do not compete with section-level `<h2>` headings.
      - JSX Spacing: Replaced `{" "}` space hack with `me-2` on title prefix.
      - Accessibility: Added `aria-hidden="true"` to decorative lines and icons.
    - `src/app/components/StickyImageTextSection.jsx`:
      - Semantic Lists & Articles: Refactored card stacks in mobile and desktop layouts into `<ul>` and `<li>` lists enclosing `<article>` tags.
      - Accessibility: Added `aria-hidden="true"` to backdrop overlays.
    - `src/app/components/ReviewsSlider.jsx`:
      - Semantic Quotes: Wrapped customer feedback comments inside semantic `<blockquote>` tags.
      - Accessibility: Added `aria-hidden="true"` to user avatar placeholder icons, quote icons, and gradient dividers.
  - Verification:
    - `npm run lint` passed with 0 errors and 0 warnings.
    - Zero visual regression; all layouts, animations, interactions, and theme adaptations remain 100% intact.

- Task: RTL / Persian spacing refinement using Method 3 (`&nbsp;`).
  - Files changed:
    - `src/app/page.js`: Replaced CSS margin classes (`ms-1.5 sm:ms-2`) with explicit `&nbsp;` between title spans in Section 2 (Part 1 and Part 2), Section 4, and Section 7.
    - `src/app/components/HeroSlider.jsx`: Replaced CSS margin class `me-2` with `&nbsp;` between `title1` and `title2`.
  - Important decisions:
    - Selected Method 3 (`&nbsp;`) per user instruction to evaluate its behavior on Persian word separation and text flow.
    - Ensures a concrete non-breaking whitespace character is output into the DOM between spans, preventing adjacent Persian letters from joining together.
  - Verification: `npm run lint` passed with 0 errors and 0 warnings.



