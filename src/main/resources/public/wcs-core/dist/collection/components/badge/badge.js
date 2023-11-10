import { h } from '@stencil/core';
export class Badge {
  constructor() {
    this.shape = 'normal';
    this.color = 'initial';
  }
  render() {
    return (h("slot", null));
  }
  static get is() { return "wcs-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["badge.css"]
    };
  }
  static get properties() {
    return {
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BadgeShape",
          "resolved": "\"normal\" | \"rounded\"",
          "references": {
            "BadgeShape": {
              "location": "import",
              "path": "./badge-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define the shape of the badge"
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BadgeColor",
          "resolved": "\"initial\" | \"lighter\"",
          "references": {
            "BadgeColor": {
              "location": "import",
              "path": "./badge-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Allows you to change the color of the badge to make it less bright (based on the color chosen by the CSS class)."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'initial'"
      }
    };
  }
}
//# sourceMappingURL=badge.js.map
