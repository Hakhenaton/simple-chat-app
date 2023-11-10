import { h, Host } from '@stencil/core';
export class ListItemProperties {
  render() {
    return (h(Host, { slot: "properties" }, h("slot", { name: "property" })));
  }
  static get is() { return "wcs-list-item-properties"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["list-item-properties.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["list-item-properties.css"]
    };
  }
}
//# sourceMappingURL=list-item-properties.js.map
