import { h, Host } from '@stencil/core';
export class ListItem {
  constructor() {
    this.activated = false;
  }
  render() {
    return (h(Host, null, h("slot", { name: "icon" }), h("div", { class: "content" }, h("div", { class: "header" }, h("div", null, h("slot", { name: "title" }), h("slot", { name: "properties" })), h("slot", { name: "actions" })), h("slot", { name: "description" }))));
  }
  static get is() { return "wcs-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["list-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["list-item.css"]
    };
  }
  static get properties() {
    return {
      "activated": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "True if the item is active. Adds a background color that highlights it."
        },
        "attribute": "activated",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=list-item.js.map
