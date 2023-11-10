import { h, Host } from '@stencil/core';
export class ListItemProperty {
  render() {
    return (h(Host, { slot: "property" }, h("slot", null)));
  }
  static get is() { return "wcs-list-item-property"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["list-item-property.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["list-item-property.css"]
    };
  }
}
//# sourceMappingURL=list-item-property.js.map
