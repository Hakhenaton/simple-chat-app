import { h, Host } from '@stencil/core';
export class Label {
  render() {
    return (h(Host, { slot: "error" }, h("slot", null)));
  }
  static get is() { return "wcs-error"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["error.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["error.css"]
    };
  }
}
//# sourceMappingURL=error.js.map
