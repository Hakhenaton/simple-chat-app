import { h, Host } from '@stencil/core';
/**
 * @slot <no-name> Main container slot
 * @slot end-left Bottom-left part of the footer
 * @slot end-right Bottom-right part of the footer
 */
export class Footer {
  render() {
    return (h(Host, null, h("div", { class: "container" }, h("div", null, h("slot", null)), h("div", { class: "end" }, h("div", { class: "end-left" }, h("slot", { name: "end-left" })), h("div", { class: "end-right" }, h("slot", { name: "end-right" }))))));
  }
  static get is() { return "wcs-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["footer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["footer.css"]
    };
  }
}
//# sourceMappingURL=footer.js.map
