import { h } from '@stencil/core';
export class Card {
  constructor() {
    this.mode = 'raised';
  }
  render() {
    return (h("slot", null));
  }
  static get is() { return "wcs-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card.css"]
    };
  }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "CardMode",
          "resolved": "\"flat\" | \"raised\"",
          "references": {
            "CardMode": {
              "location": "import",
              "path": "./card-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "mode",
        "reflect": true,
        "defaultValue": "'raised'"
      }
    };
  }
}
//# sourceMappingURL=card.js.map
