// The only script on the site: respects Reduce Motion for the autoplaying gameplay video.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  function apply() {
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
  apply();
  if (reduce && reduce.addEventListener) reduce.addEventListener("change", apply);
})();
