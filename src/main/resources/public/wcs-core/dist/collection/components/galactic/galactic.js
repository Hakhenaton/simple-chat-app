import { Host, h } from '@stencil/core';
export class Galactic {
  constructor() {
    this.text = undefined;
    this.show = false;
  }
  render() {
    return (h(Host, null, h("div", { class: "container" }, h("div", { class: "container-left" }, h("img", { src: SNCF_BASE64_SVG_LOGO, id: "sncf-logo", alt: "Logo SNCF" }), h("span", null, this.text)), h("div", { class: "menu" }, h("slot", null)))));
  }
  static get is() { return "wcs-galactic"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["galactic.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["galactic.css"]
    };
  }
  static get properties() {
    return {
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Text to display in the bar"
        },
        "attribute": "text",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "show": {}
    };
  }
}
const SNCF_BASE64_SVG_LOGO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVy' +
  'c2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5' +
  'rIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHX0dSQURJRU5UIiBncmFkaW' +
  'VudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHkxPSIxNiIgeDI9IjMxLjk1OTMiIHkyPSIxNiI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0e' +
  'WxlPSJzdG9wLWNvbG9yOiM4MzJGNzAiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yNDcyIiBzdHlsZT0ic3RvcC1jb2xvcjojQUMyODdDIi8+DQoJCTxz' +
  'dG9wICBvZmZzZXQ9IjAuODE0NiIgc3R5bGU9InN0b3AtY29sb3I6I0RGMjUzMCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2x' +
  'vcjojREYyNTMwIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBmaWxsPSJ1cmwoI1NWR19HUkFESUVOVCkiIGQ9Ik0wLjYsNy43QzAuMiw3Lj' +
  'csMCw3LjgsMCw4LjJ2MTUuN2MwLDAuMywwLjIsMC41LDAuNSwwLjVoMjhjMC4zLDAsMC41LDAsMC42LTAuNGMwLDAsMi44LTguOSwyLjktOSBjMC4xL' +
  'TAuMywwLTAuNS0wLjMtMC43QzIyLjYsOC41LDguOSw3LjYsMi44LDcuNkMxLjksNy42LDEuMSw3LjYsMC42LDcuN3oiLz4NCgk8cGF0aCBmaWxsPSIj' +
  'RkZGRkZGIiBkPSJNNi40LDE3LjdjLTEtMC41LTEuNy0wLjgtMS42LTEuM0M1LDE1LjgsNi4xLDE1LjYsNywxNS42YzAuNSwwLDAuOCwwLjEsMS4yLDA' +
  'uMmwwLjMtMS4xIGMtMC41LTAuMS0wLjgtMC4xLTEuNC0wLjFjLTEuOSwwLTMuNiwwLjUtNCwxLjZjLTAuNSwxLjMsMC45LDIsMi4yLDIuNmMxLDAuNS' +
  'wxLjgsMC45LDEuNSwxLjVjLTAuMiwwLjUtMC45LDAuNy0yLDAuNyBjLTAuOSwwLTItMC4zLTIuOS0wLjdsLTAuNSwxLjFjMC42LDAuMywyLDAuNywzL' +
  'jEsMC43YzIuMSwwLDMuNS0wLjUsNC4xLTEuN0M5LjMsMTkuMSw3LjcsMTguMyw2LjQsMTcuN3oiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJN' +
  'OS4zLDE5LjZDOS4zLDE5LjcsOS4zLDE5LjcsOS4zLDE5LjZjMC4xLDAsMC4xLDAsMC4xLDBjMCwwLDEtMy4yLDEtMy4yYzEuMSwxLjUsMi4xLDMuNSw' +
  'yLjcsNS42aDEuNyBsMC45LTIuN2MwLDAsMCwwLDAuMSwwYzAsMCwwLDAsMC4xLDBjMC4zLDEuNywxLjksMi44LDQuMywyLjhjMS41LDAsMi45LTAuNC' +
  'wzLjItMC42bDAuOS0yLjhoMy40bDAuMy0xLjFoLTMuNGwwLjYtMS44aDQuMSBsMC40LTEuMWgtNS43bC0xLjksNi4xYy0wLjQsMC4xLTAuOSwwLjItM' +
  'S41LDAuMmMtMS4xLDAtMi4xLTAuMy0yLjYtMC45Yy0wLjQtMC41LTAuNS0xLTAuNC0xLjdjMC4yLTEuNiwxLjgtMi42LDMuOC0yLjYgYzAuNCwwLDAu' +
  'OSwwLDEuMywwLjFsMC40LTEuMmMtMC41LTAuMS0xLjEtMC4xLTEuNy0wLjFjLTEuOCwwLTMuNCwwLjYtNC40LDEuN2MwLDAtMC4xLDAtMC4xLDBjMCw' +
  'wLTAuMSwwLDAsMGwwLjUtMS42aC0xLjUgTDE0LDE5LjhjLTAuNS0xLjUtMS42LTMuNS0yLjktNS4xSDkuNWwtMS4yLDMuN0M4LjksMTguOCw5LjEsMT' +
  'kuMiw5LjMsMTkuNnoiLz4NCjwvc3ZnPg0K';
//# sourceMappingURL=galactic.js.map
