import { h, Host } from '@stencil/core';
import { SelectArrow } from '../select/select-arrow';
export class AccordionPanel {
  constructor() {
    this.open = false;
    this.hideActionText = false;
    this.highlight = false;
    this.groupContentWithHeader = false;
  }
  openChange(newValue) {
    this.wcsOpenChange.emit(newValue);
  }
  async close() {
    this.open = false;
  }
  render() {
    return (h(Host, null, h("button", { "aria-expanded": this.open ? "true" : "false", "aria-controls": "content", class: "header", onClick: () => this.open = !this.open }, h("slot", { name: "header" }), h("span", { class: "header-action" }, !this.hideActionText && (h("span", null, this.open ? 'Fermez' : 'Ouvrez')), h(SelectArrow, { up: this.open }))), h("div", { class: "content", id: "content" }, h("slot", { name: "content" }))));
  }
  static get is() { return "wcs-accordion-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion-panel.css"]
    };
  }
  static get properties() {
    return {
      "open": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "Specifies whether the component should display the open/close text.\nif false, it won't show the open/close text."
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
          "text": "Specifies whether the component should highlight when open with primary color.\nif true, the background color will be the primary color.\nif false, the background color will be wcs-light."
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
          "text": "Specifies wether the component should group the content with header in one card\nif true, there will be only one card with the header and the content\nNothing change when the panel is close"
        },
        "attribute": "group-content-with-header",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsOpenChange",
        "name": "wcsOpenChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "close": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "openChange"
      }];
  }
}
//# sourceMappingURL=accordion-panel.js.map
