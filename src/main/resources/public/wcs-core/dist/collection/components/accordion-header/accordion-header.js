import { h, Host } from '@stencil/core';
export class AccordionHeader {
  render() {
    return (h(Host, { slot: "header" }, h("slot", null)));
  }
  static get is() { return "wcs-accordion-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion-header.css"]
    };
  }
}
//# sourceMappingURL=accordion-header.js.map
