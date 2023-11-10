import { h, Host } from '@stencil/core';
export class Label {
  constructor() {
    this.required = false;
  }
  render() {
    return (h(Host, { slot: "label" }, h("label", null, h("slot", null))));
  }
  static get is() { return "wcs-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["label.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["label.css"]
    };
  }
  static get properties() {
    return {
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "required",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=label.js.map
