import { h } from '@stencil/core';
export class Nav {
  render() {
    return (h("nav", { class: "wcs-nav-container" }, h("slot", null), h("slot", { name: "bottom" })));
  }
  static get is() { return "wcs-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav.css"]
    };
  }
}
//# sourceMappingURL=nav.js.map
