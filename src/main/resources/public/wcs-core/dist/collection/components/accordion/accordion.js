import { h, Host } from '@stencil/core';
export class Accordion {
  constructor() {
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
    return (h(Host, null, h("slot", null)));
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
  static get is() { return "wcs-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "hideActionText": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies whether accordion-panel components should display the open/close text.\nif false, it won't show the open/close text in all accordion-panel."
        },
        "attribute": "hide-action-text",
        "reflect": true,
        "defaultValue": "false"
      },
      "highlight": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies whether accordion-panel components should highlight when open with primary color.\nif true, the background color of the accordion-panel will be the primary color.\nif false, the background color of the accordion-panel will be wcs-light."
        },
        "attribute": "highlight",
        "reflect": true,
        "defaultValue": "false"
      },
      "groupContentWithHeader": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies wether accordion-panel components should group the content with header in one card\nif true, there will be only one card with the header and the content\nNothing change when the panel is close"
        },
        "attribute": "group-content-with-header",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "hideActionText",
        "methodName": "updateHideActiontextOnPanel"
      }, {
        "propName": "highlight",
        "methodName": "updateHighlightOnPanel"
      }, {
        "propName": "groupContentWithHeader",
        "methodName": "updateGroupContentWithHeader"
      }];
  }
  static get listeners() {
    return [{
        "name": "wcsOpenChange",
        "method": "wcsOpenChangeHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=accordion.js.map
