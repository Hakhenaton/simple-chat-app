'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const Accordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.accordionPanels = [];
    this.hideActionText = false;
    this.highlight = false;
    this.groupContentWithHeader = false;
  }
  componentWillLoad() {
    this.accordionPanels = this.getAllAccordionPanelsFromHostElement();
    this.updateHideActiontextOnPanel();
    this.updateHighlightOnPanel();
    this.updateGroupContentWithHeader();
  }
  wcsOpenChangeHandler(event) {
    if (event.detail) {
      this.closeAllAccordionsExcept(event.target);
    }
  }
  updateHideActiontextOnPanel() {
    this.accordionPanels.forEach((opt) => {
      opt.hideActionText = this.hideActionText;
    });
  }
  updateHighlightOnPanel() {
    this.accordionPanels.forEach((opt) => {
      opt.highlight = this.highlight;
    });
  }
  updateGroupContentWithHeader() {
    this.accordionPanels.forEach((opt) => {
      opt.groupContentWithHeader = this.groupContentWithHeader;
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  getAllAccordionPanelsFromHostElement() {
    return Array.from(this.el.children)
      .filter(el => el.tagName === 'WCS-ACCORDION-PANEL');
  }
  /**
   * Close all accordion panels except the one that match the eventTarget reference
   */
  closeAllAccordionsExcept(eventTarget) {
    this.accordionPanels.filter(a => a !== eventTarget).forEach(a => a.close());
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "hideActionText": ["updateHideActiontextOnPanel"],
    "highlight": ["updateHighlightOnPanel"],
    "groupContentWithHeader": ["updateGroupContentWithHeader"]
  }; }
};

exports.wcs_accordion = Accordion;

//# sourceMappingURL=wcs-accordion.cjs.entry.js.map