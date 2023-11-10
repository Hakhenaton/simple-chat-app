import { h, Host } from '@stencil/core';
export class AccordionContent {
  render() {
    return (h(Host, { slot: "content" }, h("slot", null)));
  }
  static get is() { return "wcs-accordion-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion-content.css"]
    };
  }
}
//# sourceMappingURL=accordion-content.js.map
