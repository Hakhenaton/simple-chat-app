import { h } from '@stencil/core';
import { isEnterKey } from "../../utils/helpers";
export class NavItem {
  constructor() {
    this.text = '';
    this.href = undefined;
  }
  onKeyDown(_event) {
    if (isEnterKey(_event)) {
      this.el.click();
    }
  }
  render() {
    return (h("a", { href: this.href, class: "wcs-nav-item-container" }, h("slot", null), h("span", { class: "wcs-nav-item-text" }, this.text)));
  }
  static get is() { return "wcs-nav-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav-item.css"]
    };
  }
  static get properties() {
    return {
      "text": {
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
          "text": "This attribute specify the text of the item."
        },
        "attribute": "text",
        "reflect": true,
        "defaultValue": "''"
      },
      "href": {
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
          "text": "Attributes mapped to a <a> tag.\n\nDon't forget to specify [routerLink] if using in conjuction with angular router."
        },
        "attribute": "href",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=nav-item.js.map
