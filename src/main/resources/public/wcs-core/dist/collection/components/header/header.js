import { h } from '@stencil/core';
/**
 * @slot logo SNCF Logo
 * @slot title Title of your application
 * @slot actions Actions such as buttons, dropdown or any useful information to always display on your application
 */
export class Header {
  hostData() {
    return {
      'slot': 'header'
    };
  }
  render() {
    return (h("header", null, h("slot", { name: "logo" }), h("slot", { name: "title" }), h("slot", { name: "actions" })));
  }
  static get is() { return "wcs-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header.css"]
    };
  }
}
//# sourceMappingURL=header.js.map
