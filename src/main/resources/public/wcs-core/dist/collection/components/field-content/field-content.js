import { h, Host } from '@stencil/core';
export class FieldContent {
  render() {
    return (h(Host, { slot: "content" }, h("slot", null)));
  }
  static get is() { return "wcs-field-content"; }
  static get encapsulation() { return "shadow"; }
}
//# sourceMappingURL=field-content.js.map
