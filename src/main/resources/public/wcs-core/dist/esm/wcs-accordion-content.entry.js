import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const accordionContentCss = ":host{margin:calc(3 * var(--wcs-base-margin));display:block}";

const AccordionContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "content" }, h("slot", null)));
  }
};
AccordionContent.style = accordionContentCss;

export { AccordionContent as wcs_accordion_content };

//# sourceMappingURL=wcs-accordion-content.entry.js.map