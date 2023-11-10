import { h, Host } from "@stencil/core";
/**
 * Use a skeleton circle as a placeholder round images, illustrations or components
 */
export class SkeletonCircle {
  constructor() {
    this.animation = 'glide';
    this.radius = 50;
  }
  render() {
    return (h(Host, { style: { width: `${this.radius}px`, height: `${this.radius}px` } }, h("span", { "aria-hidden": "true" })));
  }
  static get is() { return "wcs-skeleton-circle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["skeleton-circle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["skeleton-circle.css"]
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
      "radius": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the radius of the circle in px"
        },
        "attribute": "radius",
        "reflect": true,
        "defaultValue": "50"
      }
    };
  }
}
//# sourceMappingURL=skeleton-circle.js.map
