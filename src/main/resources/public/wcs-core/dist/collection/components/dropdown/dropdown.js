import { h, Host } from '@stencil/core';
import { SelectArrow } from '../select/select-arrow';
import { createPopper } from '@popperjs/core';
import { clickTargetIsElementOrChildren, isEscapeKey, isKeydown, isKeyup } from '../../utils/helpers';
import { isElementFocused } from "../../utils/accessibility";
export class Dropdown {
  constructor() {
    this.noArrow = false;
    this.mode = 'stroked';
    this.shape = 'normal';
    this.disabled = false;
    this.placement = 'bottom-end';
    this.expanded = false;
  }
  placementChange() {
    this.popper.setOptions(Object.assign(Object.assign({}, this.popper.state.options), { placement: this.placement })).then(_ => this.popper.update());
  }
  componentDidLoad() {
    const wcsButtonElement = this.el.shadowRoot.querySelector('wcs-button');
    const buttonWrapper = wcsButtonElement.shadowRoot.querySelector('button');
    this.buttonTextColor = window.getComputedStyle(buttonWrapper).color;
    const popoverDiv = this.el.shadowRoot.querySelector('.popover');
    this.popper = createPopper(wcsButtonElement, popoverDiv, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
    if (!this.noArrow) {
      this.el.shadowRoot.querySelector('.arrow').style.fill = this.buttonTextColor;
    }
    this.fixForFirefoxBelow63();
  }
  fixForFirefoxBelow63() {
    // If the items appear out of the slot we place them back
    const items = this.el.querySelectorAll('wcs-dropdown-item');
    const container = this.el.querySelector('.container');
    if (items.length > 0 && container) {
      items.forEach(i => {
        this.el.removeChild(i);
        container.appendChild(i);
      });
    }
  }
  onButtonClick(_) {
    this.expanded = !this.expanded;
  }
  onWindowClickEvent(event) {
    const clickedOnDropdownOrChildren = clickTargetIsElementOrChildren(event, this.el);
    if (this.expanded && !clickedOnDropdownOrChildren) {
      this.expanded = false;
    }
  }
  dropdownItemClick(_) {
    this.expanded = false;
  }
  onKeyDown(evt) {
    if (this.expanded && (isKeydown(evt) || isKeyup(evt))) {
      // If the user presses an arrow key (up or down), the browser is prevented from scrolling through
      evt.preventDefault();
      const items = Array.from(this.el.querySelectorAll('wcs-dropdown-item'));
      const currentFocusedItemIndex = items.findIndex(item => isElementFocused(item));
      // If the dropdown is expended by the user, but no item is focused and the keydown is pressed
      if (currentFocusedItemIndex === -1 && isKeydown(evt)) {
        this.focusFirstItemIfPresent(items);
      }
      else {
        this.moveFocusedItemByDirection(items, currentFocusedItemIndex, isKeydown(evt) ? 'down' : 'up');
      }
    }
    if (this.expanded && isEscapeKey(evt)) {
      this.closeOverlayAndFocusButton();
    }
  }
  focusFirstItemIfPresent(items) {
    if (items[0]) {
      items[0].focus();
    }
  }
  moveFocusedItemByDirection(items, currentFocusedItemIndex, direction) {
    const itemToFocus = items[(currentFocusedItemIndex) + (direction === 'down' ? 1 : -1)];
    if (itemToFocus) {
      itemToFocus.focus();
    }
  }
  closeOverlayAndFocusButton() {
    this.expanded = !this.expanded;
    const wcsButton = this.el.shadowRoot.querySelector('wcs-button');
    wcsButton.focus();
  }
  componentDidRender() {
    if (this.popper) {
      this.popper.update();
    }
    if (!this.noArrow) {
      this.el.shadowRoot.querySelector('.arrow').style.fill = this.buttonTextColor;
    }
  }
  render() {
    return (h(Host, null, h("wcs-button", { mode: this.mode, shape: this.shape, disabled: this.disabled, onClick: ($event) => this.onButtonClick($event) }, h("div", { class: "wcs-button-content-wrapper" }, h("slot", { name: "placeholder" }), this.noArrow ? null : (h(SelectArrow, { up: this.expanded })))), h("div", { class: (this.expanded ? 'show ' : '') + 'popover' }, h("div", { id: "arrow", "data-popper-arrow": true }), h("div", { class: "container" }, h("slot", { name: "item" })))));
  }
  static get is() { return "wcs-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown.css"]
    };
  }
  static get properties() {
    return {
      "noArrow": {
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
          "text": "Hides the arrow in the button"
        },
        "attribute": "no-arrow",
        "reflect": false,
        "defaultValue": "false"
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsButtonMode",
          "resolved": "\"clear\" | \"plain\" | \"stroked\"",
          "references": {
            "WcsButtonMode": {
              "location": "import",
              "path": "../button/button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Dropdown's button mode"
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'stroked'"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsButtonShape",
          "resolved": "\"normal\" | \"round\" | \"square\"",
          "references": {
            "WcsButtonShape": {
              "location": "import",
              "path": "../button/button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Dropdown's button shape"
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "disabled": {
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
          "text": "Specifies whether the dropdown button is clickable or not"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsDropdownPlacement",
          "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {
            "WcsDropdownPlacement": {
              "location": "import",
              "path": "./dropdown-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "placement of the dropdown's popover"
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'bottom-end'"
      }
    };
  }
  static get states() {
    return {
      "expanded": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "placement",
        "methodName": "placementChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onWindowClickEvent",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "wcsDropdownItemClick",
        "method": "dropdownItemClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=dropdown.js.map
