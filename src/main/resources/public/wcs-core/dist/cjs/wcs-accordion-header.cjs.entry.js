'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const accordionHeaderCss = ":host{text-align:left}";

const AccordionHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "header" }, index.h("slot", null)));
  }
};
AccordionHeader.style = accordionHeaderCss;

exports.wcs_accordion_header = AccordionHeader;

//# sourceMappingURL=wcs-accordion-header.cjs.entry.js.map