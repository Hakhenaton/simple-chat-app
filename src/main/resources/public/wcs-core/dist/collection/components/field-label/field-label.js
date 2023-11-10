import { h, Host, } from '@stencil/core';
export class FieldLabel {
  render() {
    return (h(Host, { slot: "label" }, h("slot", null)));
  }
  static get is() { return "wcs-field-label"; }
  static get encapsulation() { return "shadow"; }
}
//# sourceMappingURL=field-label.js.map
