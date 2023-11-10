import { h, Host } from '@stencil/core';
export class Divider {
  render() {
    return (h(Host, null));
  }
  static get is() { return "wcs-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["divider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["divider.css"]
    };
  }
}
//# sourceMappingURL=divider.js.map
