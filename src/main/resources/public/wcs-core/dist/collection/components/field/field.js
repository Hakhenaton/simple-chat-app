import { h, Host, } from '@stencil/core';
/**
 * @slot label Label of the field
 * @slot content Content of the field
 */
export class Field {
  render() {
    return (h(Host, null, h("slot", { name: "label" }), h("slot", { name: "content" })));
  }
  static get is() { return "wcs-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["field.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["field.css"]
    };
  }
}
//# sourceMappingURL=field.js.map
