import { h, Host } from '@stencil/core';
export class DropdownDivider {
  render() {
    return (h(Host, { slot: "item" }));
  }
  static get is() { return "wcs-dropdown-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown-divider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown-divider.css"]
    };
  }
}
//# sourceMappingURL=dropdown-divider.js.map
