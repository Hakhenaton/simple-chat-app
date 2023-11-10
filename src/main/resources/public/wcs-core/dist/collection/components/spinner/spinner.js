import { h } from '@stencil/core';
export class Spinner {
  constructor() {
    this.mode = 'border';
  }
  render() {
    return (h("svg", { viewBox: "0 0 50 50" }, h("circle", { class: "dashed-background-circle", cx: "25", cy: "25", r: "21", fill: "none" }), h("g", { class: "infinite-rotation-container" }, h("circle", { class: "dash-rotating-circle", cx: "25", cy: "25", r: "21", fill: "none" }))));
  }
  static get is() { return "wcs-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["spinner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["spinner.css"]
    };
  }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsSpinnerMode",
          "resolved": "\"border\" | \"growing\"",
          "references": {
            "WcsSpinnerMode": {
              "location": "import",
              "path": "./spinner-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicates the spinner display mode.\nAccepted values: `border` or `growing`"
        },
        "attribute": "mode",
        "reflect": true,
        "defaultValue": "'border'"
      }
    };
  }
}
//# sourceMappingURL=spinner.js.map
