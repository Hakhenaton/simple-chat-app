'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const galacticCss = ":host{display:block;background-color:var(--wcs-gray)}.container{height:32px;align-items:center;justify-content:space-between;color:var(--wcs-white);font-size:14px;display:flex;max-width:var(--wcs-com-content-max-width);margin:0 auto}.container #sncf-logo{height:32px;margin-right:20px}.container .container-left{display:flex;align-items:center}";

const Galactic = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
    this.show = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "container" }, index.h("div", { class: "container-left" }, index.h("img", { src: SNCF_BASE64_SVG_LOGO, id: "sncf-logo", alt: "Logo SNCF" }), index.h("span", null, this.text)), index.h("div", { class: "menu" }, index.h("slot", null)))));
  }
};
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
Galactic.style = galacticCss;

exports.wcs_galactic = Galactic;

//# sourceMappingURL=wcs-galactic.cjs.entry.js.map