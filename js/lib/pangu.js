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
  function initPangu(target) {
    if (!window.config.pangu?.enable || !window.pangu)
      return;
    window.pangu.ignoredTags = /^(script|code|pre|textarea|sup|sub)$/i;
    if (target) {
      window.pangu.spacingNode(target);
      return;
    }
    if (window.config.pangu.selector) {
      document.querySelectorAll(window.config.pangu.selector).forEach((el) => {
        window.pangu.spacingNode(el);
      });
      return;
    }
    window.pangu.autoSpacingPage();
  }
  document.addEventListener("DOMContentLoaded", () => {
    initPangu();
    eventBus.on("fixit:content-decrypted", ({ detail }) => {
      initPangu(detail.target);
    });
  }, false);
})();
//# sourceMappingURL=pangu.js.map
