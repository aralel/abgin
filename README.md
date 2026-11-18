# Abgin website

Static landing page for Abgin: plain HTML and CSS, one tiny script, no build step, no external resources, no cookies,
no analytics (so no cookie banner is needed).

| File | What |
| --- | --- |
| `index.html` | Landing page: hero with gameplay loop, features, screens, quick start, top questions |
| `how-to-play.html` | Every rule with an illustration, controls, stars, the daily puzzle |
| `faq.html` | Questions and answers |
| `privacy.html`, `terms.html`, `impressum.html` | Legal pages (drafts: see below) |
| `app-ads.txt` | AdMob authorised sellers; must be at the root of the developer website |
| `style.css`, `site.js` | Styles; the script only pauses the gameplay video for Reduce Motion |
| `assets/` | Icon sizes, screenshots, gameplay video and poster, share image, rule illustrations |

## Before publishing

The company details come from Aralel's legal notice (aralel.com/impressum_en.html): Josefstr. 66, 52080 Aachen,
managing director Taraghidelgarm, Amtsgericht Aachen HRB 29506, VAT ID DE461077402. Emails: contact@ (Impressum,
terms), privacy@ (privacy policy), support@ (FAQ). Keep `impressum.html` and `privacy.html` in step with the in-app text
in `Abgin/Screens/LegalView.swift`.

1. Have `privacy.html` and `terms.html` reviewed by a lawyer. § 5 DDG asks for the managing director's full name;
   the pages use the surname only, as aralel.com does.
2. Put the AdMob publisher ID into `app-ads.txt`, and enter https://abgin.aralel.com as the developer website in
   App Store Connect.
3. After release: replace "Coming soon to the App Store" with Apple's official badge linking to the app, and add the
   `apple-itunes-app` meta tag.

## Deploying

The site is meant for https://abgin.aralel.com on GitHub Pages, like aralel.com (`CNAME` holds the domain). Publish
the folder's contents at the root of a Pages site (`index.html`, `app-ads.txt` and `CNAME` at the top level) and point
a `CNAME` DNS record for `abgin` at `aralel.github.io` (DNS is at Spaceship). Any other static host works too; then
update the hosting paragraph in `privacy.html`.
Preview locally with `python3 -m http.server --directory website`.

## Regenerating assets

- Rule illustrations (drawn by the real rules engine): `swift run --package-path MirrorKit mirror-solver render-demos "$PWD/website/assets"`
- Screenshots and the gameplay video were captured from the iPhone simulator with a 9:41 status bar (the video is one complete solve of Still water 1: start, all 11 swipes, Solved card; drive it with a
  UI test that plays the baked solution `URUUDRRUUUU` with a pause after each swipe, record with `xcrun simctl io <udid> recordVideo`, then cut from the first frame of the level to a few seconds after Solved)
  (`xcrun simctl status_bar <device> override --time 9:41 ...`) and scaled with ffmpeg.
