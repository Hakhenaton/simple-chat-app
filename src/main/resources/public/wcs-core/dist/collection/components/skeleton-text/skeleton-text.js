import { h } from "@stencil/core";
/**
 * Use a skeleton text as a placeholder for titles or paragraphs.
 */
export class SkeletonText {
  constructor() {
    this.animation = 'glide';
    this.height = 'body';
  }
  render() {
    return h("span", { "aria-hidden": "true" });
  }
  static get is() { return "wcs-skeleton-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["skeleton-text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["skeleton-text.css"]
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
      "height": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'h1' | 'h2' | 'h3' | 'caption' | 'body'",
          "resolved": "\"body\" | \"caption\" | \"h1\" | \"h2\" | \"h3\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the line height of the text skeleton"
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "'body'"
      }
    };
  }
}
//# sourceMappingURL=skeleton-text.js.map
