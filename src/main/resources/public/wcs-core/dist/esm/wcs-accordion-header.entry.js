import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const accordionHeaderCss = ":host{text-align:left}";

const AccordionHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "header" }, h("slot", null)));
  }
};
AccordionHeader.style = accordionHeaderCss;

export { AccordionHeader as wcs_accordion_header };

//# sourceMappingURL=wcs-accordion-header.entry.js.map