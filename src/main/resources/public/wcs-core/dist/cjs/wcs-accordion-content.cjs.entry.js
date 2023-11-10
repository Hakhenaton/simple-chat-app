'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const accordionContentCss = ":host{margin:calc(3 * var(--wcs-base-margin));display:block}";

const AccordionContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "content" }, index.h("slot", null)));
  }
};
AccordionContent.style = accordionContentCss;

exports.wcs_accordion_content = AccordionContent;

//# sourceMappingURL=wcs-accordion-content.cjs.entry.js.map