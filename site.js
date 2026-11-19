// The only script on the site: respects Reduce Motion for the autoplaying gameplay video, points the header's
// "Get the app" button at the right store, and asks phone visitors to install the app.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  function applyReducedMotion() {
    document.querySelectorAll("video[data-motion]").forEach(function (video) {
      if (reduce && reduce.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        video.setAttribute("controls", "");
      } else if (video.paused) {
        video.play().catch(function () {});
      }
    });
  }
  applyReducedMotion();
  if (reduce && reduce.addEventListener) reduce.addEventListener("change", applyReducedMotion);

  var playStoreUrl = "https://play.google.com/store/apps/details?id=com.aralel.abgin";
  // After the iOS release, use the App Store URL here and change the prompt text below.
  var iPhoneUrl = "https://testflight.apple.com/join/DgAMh4zm";
  var userAgent = navigator.userAgent || "";
  var isAndroid = /Android/i.test(userAgent);
  var isIPhone = /iPhone|iPod/.test(userAgent);
  if (!isAndroid && !isIPhone) return;

  var storeUrl = isAndroid ? playStoreUrl : iPhoneUrl;
  document.querySelectorAll("[data-store-link]").forEach(function (link) {
    link.href = storeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // The prompt comes back 14 days after it was closed. Storage can be blocked; then it simply shows again.
  var dismissKey = "abgin.installPromptDismissedAt";
  var fourteenDaysInMs = 14 * 24 * 60 * 60 * 1000;
  try {
    var dismissedAt = Number(localStorage.getItem(dismissKey));
    if (dismissedAt && Date.now() - dismissedAt < fourteenDaysInMs) return;
  } catch (storageError) {}

  var prompt = document.createElement("aside");
  prompt.className = "install-prompt";
  prompt.setAttribute("aria-label", "Install Abgin");
  prompt.innerHTML =
    '<img src="assets/icon-512.png" alt="" width="48" height="48">' +
    '<div class="install-prompt-text"><strong>Play Abgin on your phone</strong><span>' +
    (isAndroid ? "Free on Google Play" : "Free iPhone beta on TestFlight") + "</span></div>" +
    '<a class="header-cta" target="_blank" rel="noopener noreferrer"></a>' +
    '<button type="button" class="install-prompt-close" aria-label="Close">×</button>';
  var installLink = prompt.querySelector("a");
  installLink.href = storeUrl;
  installLink.textContent = isAndroid ? "Install" : "Join beta";

  function closePrompt() {
    prompt.remove();
    document.body.classList.remove("has-install-prompt");
    try { localStorage.setItem(dismissKey, String(Date.now())); } catch (storageError) {}
  }
  prompt.querySelector("button").addEventListener("click", closePrompt);
  installLink.addEventListener("click", closePrompt);
  document.body.appendChild(prompt);
  document.body.classList.add("has-install-prompt");
})();
