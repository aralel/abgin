# Changelog

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
