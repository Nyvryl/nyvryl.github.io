"use strict";
(() => {
  // ns-hugo-imp:C:\Users\ayile\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugo-fixit\!fix!it@v1.0.0-alpha.0.20260801034256-8d7703a41845\assets\js\core\event-bus.ts
  var TypedEventBus = class {
    #target = document;
    on(event, handler) {
      this.#target.addEventListener(event, handler);
    }
    off(event, handler) {
      this.#target.removeEventListener(event, handler);
    }
    emit(event, ...args) {
      const detail = args[0];
      this.#target.dispatchEvent(
        detail !== void 0 ? new CustomEvent(event, { detail }) : new CustomEvent(event)
      );
    }
  };
  var eventBus = new TypedEventBus();

  // <stdin>
  var lg;
  function initLightGallery() {
    if (!window.config.lightgallery || !window.lightGallery)
      return;
    lg?.destroy(true);
    const contentEl = document.getElementById("content");
    if (!contentEl)
      return;
    lg = window.lightGallery(contentEl, {
      plugins: [window.lgThumbnail, window.lgZoom],
      selector: ".lightgallery",
      speed: 400,
      hideBarsDelay: 2e3,
      allowMediaOverlap: true,
      exThumbImage: "data-thumbnail",
      toggleThumb: true,
      thumbWidth: 80,
      thumbHeight: "60px",
      actualSize: false,
      showZoomInOutIcons: true,
      licenseKey: "none"
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    initLightGallery();
    eventBus.on("fixit:content-decrypted", initLightGallery);
  }, false);
})();
//# sourceMappingURL=lightgallery.js.map
