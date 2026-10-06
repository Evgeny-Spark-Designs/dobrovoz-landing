# Changelog

## 2026-10-06 — Reima logo and Yamaha caption correction

- Replaced the Reima favicon fallback with the official red vector wordmark provided in the [Reima logo download](https://company.reima.com/media/contacts).
- Added layout room below the enlarged Yamaha emblem so its brand-name caption no longer overlaps the logo.

## 2026-10-06 — Catalogue-wide optical scale pass

- Enlarged the user-marked compact logos across cosmetics, children’s goods, hobby, food and drinks, and winter-sports categories so their visual weight matches neighbouring full wordmarks.
- Applied larger corrections to favicon-plus-name cards, which otherwise appeared much smaller than image-based logos; made the smaller requested adjustments for Estée Lauder, LEGO, Barbie / Mattel and Yamaha.
- Added the missing “Burton” caption below its symbol-only logo.
- Updated the catalogue script cache key so the revised scale values load immediately.

## 2026-10-06 — GitHub publication

- Replaced the contents of the existing `Evgeny-Spark-Designs/dobrovoz-landing` `main` branch with this local release while preserving the repository address and its GitHub Pages site.

## 2026-10-06 — Cosmetics logo refinements

- Increased the optical scale of the Avène and Vichy favicon-plus-name cards.
- Replaced the La Roche-Posay, Kérastase and Giorgio Armani Beauty fallbacks with higher-quality full brand artwork, then sized every wide wordmark to remain large without clipping inside its card.
- Added the small “Beauty” caption beneath the official Giorgio Armani wordmark so the category remains clear without duplicating the logo text.
- Sourced La Roche-Posay and Giorgio Armani SVGs, plus the Kérastase high-resolution wordmark, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_logos_of_La_Roche-Posay_(company)), [Giorgio Armani.svg](https://commons.wikimedia.org/wiki/File:Giorgio_Armani.svg) and [Kérastase logo.jpg](https://commons.wikimedia.org/wiki/File:K%C3%A9rastase_logo.jpg).
- Updated the catalogue script cache key in `index.html`.

## 2026-10-06 — Home catalogue and process-step refinements

- Replaced the tiny Smeg favicon with a clean vector wordmark sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Smeg_logo.svg), whose source identifies Smeg as the author.
- Enlarged De’Longhi, and laid out the enlarged Villeroy & Boch mark and name horizontally so the full name remains on one line.
- Added the text caption below the Westwing monogram.
- Aligned every process-step number to the upper line of its heading, including the previously lower 01, 02 and 04 labels.
- Updated the catalogue and process stylesheet cache keys in `index.html`.

## 2026-10-06 — Functional concentric-circle loading screen

- Replaced the first-visit map loader with the existing compact Dobrovoz concentric-circle design on desktop and mobile.
- Connected dismissal to actual page readiness: the controller now waits for the window load event, document fonts and initially visible images instead of using a purely decorative timer.
- Added a short anti-flash minimum, a 6.5-second fail-safe, accessible progress semantics and reduced-motion support so the loader cannot trap visitors.
- Updated the loader script and stylesheet cache keys in `index.html`.

## 2026-10-06 — Clothing logo refinements

- Increased the optical scale of the compact Gymshark, Jacquemus and Next.pl fallback marks so they better match the surrounding clothing logos.
- Added a slightly reduced mobile-only scale for those three cards so their enlarged names remain clear and unclipped in the two-column grid.
- Replaced the small COS favicon with a clean 705×249 transparent full wordmark sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:COS_Logo.png) under CC BY-SA 4.0.
- Updated the catalogue script cache key in `index.html`.

## 2026-10-06 — Yamaha logo caption

- Added the brand name “Yamaha” below its symbol-only logo in the hobby catalogue card.
- Preserved the official logo artwork, card link and responsive optical scaling.
- Updated the catalogue script and stylesheet cache keys in `index.html`.

## 2026-10-06 — Larger catalogue subgroup labels

- Increased “Мультибрендовые магазины” and the other catalogue subgroup labels to the same responsive font size as the “Магазины” heading above the grid.
- Preserved the lighter uppercase subgroup treatment and adjusted both desktop and mobile sizes.
- Updated the catalogue stylesheet cache key in `index.html`.

## 2026-10-06 — Per-brand optical logo scaling

- Added an explicit hand-tuned optical scale for every brand in all eight catalogue categories instead of relying on one shared image box.
- Compensated for transparent padding inside source artwork, including the undersized Garmin, LG, De’Longhi and Villeroy & Boch marks.
- Wrapped each `favicon + brand name` fallback as one scalable unit and balanced those compact cards against full wordmarks.
- Rechecked the catalogue category by category in the local desktop preview and versioned the catalogue script and stylesheet cache keys in `index.html`.

## 2026-10-06 — Real brand logos and regional store links

- Added verified local SVG/PNG artwork so 75 of 131 catalogue cards now use full brand logos; existing colour artwork remains the preferred source.
- For the remaining brands without a verified full logo, added the requested compact `favicon + brand name` fallback instead of showing a bare word or an unrelated generated mark.
- Normalized full logos into the same responsive `object-fit: contain` area so square marks and wide wordmarks render at a comparable visual scale on desktop and mobile.
- Routed every brand card to an official German, Lithuanian or Polish storefront/locale where one is available, and preserved `target="_blank"` plus `rel="noopener noreferrer"` on every link.
- Checked all 129 unique regional destinations, corrected the returned 404 paths and updated the catalogue script and stylesheet cache keys in `index.html`.

## 2026-10-06 — Footer contacts and straight road truck

- Kept the Telegram handles below “Менеджер” and “Канал” visible after the footer reveal and link hover animations.
- Removed the residual cab and trailer rocking once the animated truck reaches the straight road section.
- Preserved the truck position, scale and curved-road turn while snapping only the nearly completed turn to the straight 90-degree heading.
- Updated the road-scene script cache key in `index.html`.

## 2026-10-06 — New brand catalogue restored

- Restored the client-supplied brand lists across clothing, home, electronics, cosmetics, children, hobby and food categories.
- Restored the additional “Горные лыжи и экипировка” category with ski, snowboard and equipment brands.
- Kept the restored category on the same inset grid track as the original catalogue groups at every breakpoint.
- Added minimal full-width separators for multibrand stores and the hobby/snowboard subgroups.
- Kept the responsive five-column desktop, four-column tablet and two-column mobile containment fix intact.
- Updated the mobile collapse logic so a hidden multibrand subgroup never leaves an orphaned heading.
- Aligned the mobile CSS breakpoint to `767.98px` so fractional browser widths do not show desktop tabs over the two-column mobile grid.
- Versioned the catalogue, category-control and mobile-grid scripts in `index.html`.

## 2026-10-05 — Mobile category dropdown

- Replaced the horizontally scrollable category tabs with a native dropdown on screens up to 767 px wide.
- Made the mobile dropdown span the full section width and placed the label “Категории брендов” above it.
- Replaced the native mobile select popup with a custom site-styled dropdown anchored directly below its trigger.
- Added active-category styling, outside-click closing and keyboard navigation for the custom dropdown.
- Kept the existing category tabs unchanged on tablet and desktop widths.
- Synchronized both controls with the existing brand-category grids and preserved keyboard accessibility.
- Updated the category script cache key in `index.html`.

## 2026-10-05 — Loading screen restored

- Restored the original branded DobroVoz loading screen that was still present in the page but forcibly hidden by CSS.
- The loading sequence now covers the hero initialization, so the globe, headline and supporting copy are revealed together as a ready first screen.
- Kept the original loading animation and responsive layout intact.

## 2026-10-05 — Globe outer glow removed globally

- Removed the oversized raster glow layer around the hero globe at every viewport width.
- Removed the exterior orange and blue shadow layers while preserving the globe's inset atmospheric glow.
- Extended the existing mobile fix to tablet, desktop and short/wide viewport ratios.
- Updated the `site-polish.css` cache key in `index.html`.

## 2026-10-05 — Updated brand catalogue

- Replaced the brand grids with the new eight-category catalogue supplied for the landing page.
- Added the “Горные лыжи и экипировка” category.
- Separated multibrand stores inside each applicable category with a minimal full-width label and divider.
- Added MOHD, Westwing, Connox, Nordic Nest and AmbienteDirect to the “Для дома” multibrand section.
- Preserved the existing desktop tabs, custom mobile dropdown and compact mobile “Смотреть ещё” behaviour.
- Updated the catalogue script and stylesheet cache keys in `index.html`.

## 2026-10-05 — Remaining globe rim removed

- Removed the large `::after` atmospheric rim that was still rendered around the smaller WebGL globe on tablet and desktop ratios.
- The fix now matches the mobile rendering: only the correctly sized original inset atmosphere remains.
- Updated the `site-polish.css` cache key in `index.html`.

## 2026-10-05 — Brand tabs horizontal shift fix

- Prevented the expanded eight-category tab row from widening the document.
- Replaced `scrollIntoView()` with scrolling confined to the category tab container.
- Added a global horizontal overflow guard so the hero cannot remain shifted sideways and appear zoomed.
- Updated the category script and stylesheet cache keys in `index.html`.

## 2026-10-05 — Persisted horizontal offset reset

- Added a horizontal-position guard that returns the document to `scrollX = 0` without changing the visitor's vertical position.
- Reset stale horizontal offsets restored by Chrome after reload, history restoration, tab resume and window resizing.
- Kept horizontal scrolling available only inside the desktop brand-category tab strip.
- Updated the stylesheet cache key and added a versioned `horizontal-scroll-lock.js` include.
- Switched the root overflow guard to `overflow-x: hidden !important` for consistent clipping in desktop Chrome.

## 2026-10-05 — Brand catalogue regression rollback

- Rolled back the runtime-generated eight-category brand catalogue after it widened the desktop layout.
- Removed the injected eighth Webflow grid pair, multibrand divider elements and related mobile-collapse logic.
- Removed all subsequent horizontal-overflow and forced-scroll-position workarounds.
- Restored the original seven brand grids and the previously working category-tab behaviour.
- Preserved the earlier custom mobile dropdown, loading screen and globe fixes.

## 2026-10-05 — Brand category row containment restored

- Identified the remaining regression: the non-wrapping desktop category row was contributing its intrinsic width to the parent CSS grid.
- Restored the removed `min-width: 0` / `max-width: 100%` containment on the category row and its grid wrapper.
- Kept horizontal scrolling local to the category row instead of allowing it to widen and crop the complete page.

## 2026-10-05 — Tablet-width page expansion fixed

- Compared the current build with the pre-catalogue `client-menu-fix-1` build at an identical 960×540 CSS viewport.
- Reproduced the page expanding from 960 px to 1467 px in both builds and identified the actual overflowing wrapper.
- Reverted the unsuccessful category-row containment attempt.
- Constrained `.body-inner` and the main page grid to the viewport so the wide decorative header, hero and service-animation layers no longer change the document width.
- Preserved the restored original brand catalogue and the custom mobile category dropdown.

## 2026-10-05 — Layout containment across all screen widths

- Replaced the previous overflow-masking patch with real responsive track sizing for the brand catalogue and order/calculator section.
- Moved `site-polish.css` into the document head so the loader and first rendered frame use the corrected viewport width before page content appears.
- Fixed five-column desktop, four-column tablet and two-column mobile brand grids with shrinkable `minmax(0, 1fr)` tracks.
- Converted the order/calculator wrapper to a bounded grid and removed intrinsic minimum widths that pushed the right card outside the viewport.
- Added viewport containment to the loader and all primary page containers.
- Prepared verification at every major width from 320 px through 2560 px.
- Included fractional breakpoint boundaries so the exact 767 px and 991 px edge cases use the intended responsive layout under browser/OS scaling.
