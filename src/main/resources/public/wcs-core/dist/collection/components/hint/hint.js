import { h, Host } from '@stencil/core';
export class Hint {
  constructor() {
    this.small = false;
  }
  render() {
    return (h(Host, { slot: "messages" }, h("slot", null)));
  }
  static get is() { return "wcs-hint"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["hint.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["hint.css"]
    };
  }
  static get properties() {
    return {
      "small": {
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
          "text": "Whether the component should display the small version of the hint"
        },
        "attribute": "small",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=hint.js.map
