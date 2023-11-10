'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const footerCss = ":host{display:block;width:100%;background-color:var(--wcs-gray);color:white}:host .end{margin-top:calc(2 * var(--wcs-base-margin));width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:var(--wcs-base-margin)}:host .end .end-left,:host .end .end-right{display:flex;flex-wrap:wrap}@media only screen and (max-width: 1024px){:host .end .end-left,:host .end .end-right{flex-direction:column}}:host .end slot[name=end-left]::slotted(a){color:var(--wcs-text-disabled);text-decoration:none;font-size:14px;font-weight:500;margin-right:35px}:host .end slot[name=end-left]::slotted(a:hover){color:var(--wcs-white)}:host .container{margin:0 auto;max-width:var(--wcs-com-content-max-width);display:flex;flex-direction:column;padding:20px}";

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "container" }, index.h("div", null, index.h("slot", null)), index.h("div", { class: "end" }, index.h("div", { class: "end-left" }, index.h("slot", { name: "end-left" })), index.h("div", { class: "end-right" }, index.h("slot", { name: "end-right" }))))));
  }
};
Footer.style = footerCss;

exports.wcs_footer = Footer;

//# sourceMappingURL=wcs-footer.cjs.entry.js.map