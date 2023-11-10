import { h } from '@stencil/core';
export class App {
  render() {
    return [
      h("slot", { name: "header" }),
      h("slot", { name: "sidebar" }),
      h("slot", { name: "content" })
    ];
  }
  static get is() { return "wcs-app"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["app.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["app.css"]
    };
  }
}
//# sourceMappingURL=app.js.map
