import { h, Host } from "@stencil/core";
/**
 * Use a skeleton rectangle as a placeholder for large images or square-shaped components
 *
 * @cssprop --wcs-skeleton-border-radius - Controls the border-radius of the 'rounded' skeleton rectangle (default 0.5rem)
 */
export class SkeletonRectangle {
  constructor() {
    this.animation = 'glide';
    this.rounded = false;
    this.height = 'auto';
    this.width = 'auto';
  }
  render() {
    return (h(Host, { style: { height: this.height, width: this.width } }, h("span", null)));
  }
  static get is() { return "wcs-skeleton-rectangle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["skeleton-rectangle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["skeleton-rectangle.css"]
    };
  }
  static get properties() {
    return {
      "animation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsSkeletonAnimation",
          "resolved": "\"glide\" | \"none\" | \"pulse\"",
          "references": {
            "WcsSkeletonAnimation": {
              "location": "import",
              "path": "../skeleton/skeleton-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the animation of the skeleton"
        },
        "attribute": "animation",
        "reflect": true,
        "defaultValue": "'glide'"
      },
      "rounded": {
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
          "text": "Adds a border radius on the skeleton if true"
        },
        "attribute": "rounded",
        "reflect": true,
        "defaultValue": "false"
      },
      "height": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CssTypes.Height",
          "resolved": "LengthOrPercentage | Keyword | Global",
          "references": {
            "CssTypes": {
              "location": "import",
              "path": "../../shared-types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the height of the skeleton (can be any valid CSS value)"
        },
        "attribute": "height",
        "reflect": true,
        "defaultValue": "'auto'"
      },
      "width": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CssTypes.Width",
          "resolved": "LengthOrPercentage | Keyword | Global",
          "references": {
            "CssTypes": {
              "location": "import",
              "path": "../../shared-types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the width of the skeleton (can be any valid CSS value)"
        },
        "attribute": "width",
        "reflect": true,
        "defaultValue": "'auto'"
      }
    };
  }
}
//# sourceMappingURL=skeleton-rectangle.js.map
