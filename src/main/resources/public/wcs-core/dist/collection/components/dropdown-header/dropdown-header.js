import { h, Host } from '@stencil/core';
export class DropdownHeader {
  render() {
    return (h(Host, { slot: "item" }, h("slot", null)));
  }
  static get is() { return "wcs-dropdown-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown-header.css"]
    };
  }
}
//# sourceMappingURL=dropdown-header.js.map
