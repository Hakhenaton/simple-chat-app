import { h, Host } from '@stencil/core';
import { isEnterKey, isSpaceKey } from "../../utils/helpers";
export class DropdownItem {
  onMouseDown(_) {
    this.wcsDropdownItemClick.emit();
  }
  onKeyDown(evt) {
    if (isSpaceKey(evt) || isEnterKey(evt)) {
      this.wcsDropdownItemClick.emit();
    }
  }
  render() {
    return (h(Host, { slot: "item", tabindex: "0" }, h("slot", null)));
  }
  static get is() { return "wcs-dropdown-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown-item.css"]
    };
  }
  static get events() {
    return [{
        "method": "wcsDropdownItemClick",
        "name": "wcsDropdownItemClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "mousedown",
        "method": "onMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=dropdown-item.js.map
