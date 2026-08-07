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
  function initTwemoji(target = document) {
    if (window.config.twemoji && window.twemoji)
      window.twemoji.parse(target);
  }
  document.addEventListener("DOMContentLoaded", () => {
    initTwemoji();
    eventBus.on("fixit:content-decrypted", ({ detail }) => {
      initTwemoji(detail.target);
    });
  }, false);
})();
//# sourceMappingURL=twemoji.js.map
