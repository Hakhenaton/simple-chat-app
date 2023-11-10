import { h, Host } from '@stencil/core';
/**
 * Tab content component.
 * Use this component to specify the content of a component.
 */
export class Tab {
  constructor() {
    this.header = undefined;
    this.itemKey = undefined;
  }
  componentDidLoad() {
    this.tabLoaded.emit();
  }
  render() {
    return (h(Host, { slot: "wcs-tab" }, h("slot", null)));
  }
  static get is() { return "wcs-tab"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "header": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The header you want to be displayed for this tab."
        },
        "attribute": "header",
        "reflect": true
      },
      "itemKey": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "item-key",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "tabLoaded",
        "name": "tabLoaded",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "inner",
              "text": undefined
            }, {
              "name": "ignore",
              "text": undefined
            }],
          "text": "Do not use, meant for internal use only."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=tab.js.map
