# Changelog

## 2026-11-25 (the new graphics)

- All pictures show the new look: the girl and the boy (faces drawn after reference photos) and the raised game buttons. New `assets/screen-home|play|chapters|daily|help.jpg` (590 × 1282) from fresh iPhone captures; new `assets/gameplay.mp4` (Still water 1 solved in 11 swipes, 29 s, 300 KB, the walking at real speed with idle gaps cut) and `gameplay-poster.jpg`; new `assets/og-image.png` (1200 × 630, the share image) from the App Store header.
- The seven rule illustrations (`assets/demo-*.svg`) are regenerated with `mirror-solver render-demos` (run from `ios/`: `swift run --package-path MirrorKit mirror-solver render-demos ../website/assets`); the generator now draws the girl and boy (small embedded pictures from `ios/Design/StoreImages/characters/`) instead of the amber circle and teal diamond.
- Texts: "amber circle" and "teal diamond" became "the girl" and "the boy" on the home page, the How to play page (rules and picture descriptions) and the FAQ; new lines say they walk from cell to cell, bang their heads on walls and parachute back after a fall; the accessibility answer now says the two differ in looks and build. Picture descriptions mention the new buttons.
- Not changed: the app icon (`icon-512.png`, favicons) is still the old circle and diamond, because the app's icon has not changed.

## 2026-11-22 (Game Center)

- Privacy policy (version 22 November 2026): new "Game Center (iPhone)" section: total level stars and daily streak go to Apple's Game Center leaderboards when signed in, the Game Center player ID is kept with the progress, Apple's privacy policy applies. The same text is in the app's Legal screen.

## 2026-11-19 (store logos, download links, install prompt)

- Store links are now badges with the store logos as inline SVG (four-colour Google Play triangle, Apple logo): "Get it on Google Play" and "iPhone beta on TestFlight", in the home page hero and in the footer of every page.
- Every header has a "Get the app" button. On desktop it scrolls to the hero badges (`index.html#download`); on Android it opens Google Play and on iPhone TestFlight.
- Install prompt: Android phones and iPhones get a bar at the bottom of the screen (icon, "Play Abgin on your phone", Install / Join beta, close). Closing it or following it hides it for 14 days (`localStorage`, wrapped in try/catch); the page gets bottom padding while it shows, and it slides in only without Reduce Motion.
- `site.js` now runs on every page. The privacy policy mentions the stored prompt-closed time.

## 2026-11-19 (Google Play)

- Abgin for Android is on Google Play (https://play.google.com/store/apps/details?id=com.aralel.abgin). The home page hero now leads with a "Get it on Google Play" button (inline SVG icon, no external resources); the TestFlight button became the secondary "iPhone beta on TestFlight".
- Texts now say "Android and iPhone": page descriptions, share text, hero, the "Which devices" answers (Android 8.0 or later, linked to Google Play), accessibility (TalkBack, Remove animations), moving progress (Android Auto Backup), sound settings (silent switch is iPhone only).
- Privacy policy (version 19 November 2026), in step with the Android in-app text: Android Auto Backup, the Android advertising ID (AD_ID), Android version in error reports, play statistics sent to relay.codehospital.com (sent by both apps, previously not listed), Google Play installs and update checks. Play Games is not listed because it is not turned on yet.
- Terms (version 19 November 2026): Google Play Terms of Service apply on Android; the licence covers any device you own, not only Apple devices.
