(() => {
  "use strict";

  // Only hide clearly labelled ad containers. Avoid touching audio controls,
  // track rows, playback APIs, or the main player.
  const selectors = [
    '[data-testid*="ad-"]',
    '[data-testid="ad-slot"]',
    '[aria-label="Advertisement"]',
    '[aria-label="Sponsored"]',
    '[data-advertisement="true"]',
    '.sound__advertisement'
  ];

  const hideAds = () => {
    for (const selector of selectors) {
      document.querySelectorAll(selector).forEach((element) => {
        if (element.closest('audio, video, [data-testid*="player"], [role="slider"]')) return;
        element.style.setProperty("display", "none", "important");
      });
    }
  };

  hideAds();

  const observer = new MutationObserver(() => hideAds());
  observer.observe(document.documentElement, { childList: true, subtree: true });

  // Keep the observer lightweight on long-running music pages.
  window.addEventListener("pagehide", () => observer.disconnect(), { once: true });
})();