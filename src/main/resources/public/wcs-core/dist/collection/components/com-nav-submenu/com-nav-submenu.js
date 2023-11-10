import { h, Host } from '@stencil/core';
import { isEnterKey, isEscapeKey, isSpaceKey } from "../../utils/helpers";
import { registerCloseHandlerForFocusOutEventOn } from "../com-nav/com-nav-utils";
const WCS_COM_NAV_CATEGORY = 'WCS-COM-NAV-CATEGORY';
export class ComNavSubmenu {
  constructor() {
    this.label = undefined;
    this.panelTitle = undefined;
    this.panelDescription = undefined;
    this.menuOpen = false;
  }
  componentWillLoad() {
    const slottedCategoryItems = this.el.querySelectorAll(':scope > wcs-com-nav-category:not([slot])');
    registerCloseHandlerForFocusOutEventOn(slottedCategoryItems, WCS_COM_NAV_CATEGORY);
  }
  /**
   * If the user clicks outside the menu, we close it
   */
  onWindowClickEvent(_) {
    if (this.menuOpen)
      this.menuOpen = false;
  }
  onSubmenuOpened(event) {
    // If the clicked menu is not this component, we close it
    if (event.detail.menuElement !== this.el) {
      this.menuOpen = false;
    }
  }
  /**
   * Close the menu when escape is pressed
   * @param _event keydown event
   */
  onEscapeKeyDown(_event) {
    if (isEscapeKey(_event) && this.menuOpen) {
      this.menuOpen = false;
    }
  }
  /**
   * Close the menu
   */
  async close() {
    this.menuOpen = false;
  }
  /**
   * Opens the menu
   */
  async open() {
    this.menuOpen = true;
  }
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  onClick(evt) {
    evt.stopPropagation();
    this.wcsSubmenuOpened.emit({ menuElement: this.el });
  }
  /**
   * Handle key down on menu items
   * @param _event the keyboard event
   * @private
   */
  handleMenuItemsKeyDown(_event) {
    if ((isSpaceKey(_event)) || isEnterKey(_event)) {
      this.handleMenuItemsClick(_event);
    }
  }
  /**
   * Open the menu if it is closed and closed the menu if it is already opened
   * @param _event the keyboard event
   * @private
   */
  handleMenuKeyDown(_event) {
    if ((isSpaceKey(_event)) || isEnterKey(_event)) {
      this.menuOpen = !this.menuOpen;
    }
  }
  handleMenuItemsClick(evt) {
    if (evt.target.tagName === 'A') {
      this.close();
      this.wcsClickOnFinalAction.emit();
    }
  }
  /**
   * handle category item click to close the submenu
   * @param _
   * @private
   */
  wcsCategoryItemClickedHandler(_) {
    // If a category item is clicked, we close the submenu drawer;
    this.close();
  }
  render() {
    return (h(Host, { onClick: evt => this.onClick(evt) }, h("div", { tabindex: screen.width < 576 ? "-1" : "0", onClick: _ => this.menuOpen = !this.menuOpen, onKeyDown: evt => this.handleMenuKeyDown(evt), class: "menu-button" }, h("span", { class: "label" }, this.label), h("span", { class: "arrow-container" }, h("span", { class: "arrow-icon", "data-open": this.menuOpen }, "\uF107"))), h("div", { class: "drawer", "data-open": this.menuOpen, tabIndex: -1 }, h("div", { class: "drawer-container" }, h("div", { class: "drawer-content" }, h("div", { class: "drawer-description" }, h("h3", null, this.panelTitle), h("p", null, this.panelDescription)), h("div", { class: "menu-items", onClick: (evt) => this.handleMenuItemsClick(evt), onKeyDown: evt => this.handleMenuItemsKeyDown(evt) }, h("slot", null)))))));
  }
  static get is() { return "wcs-com-nav-submenu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["com-nav-submenu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["com-nav-submenu.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": ""
        },
        "attribute": "label",
        "reflect": false
      },
      "panelTitle": {
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
          "text": ""
        },
        "attribute": "panel-title",
        "reflect": false
      },
      "panelDescription": {
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
          "text": ""
        },
        "attribute": "panel-description",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "menuOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "wcsSubmenuOpened",
        "name": "wcsSubmenuOpened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "MenuOpenedEventDetail",
          "resolved": "MenuOpenedEventDetail",
          "references": {
            "MenuOpenedEventDetail": {
              "location": "import",
              "path": "../com-nav/com-nav-interface"
            }
          }
        }
      }, {
        "method": "wcsClickOnFinalAction",
        "name": "wcsClickOnFinalAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a user click on a final navigation action.\n\nUsed by the com-nav component to close the mobile menu overlay when a user click on a final action."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
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
          "text": "Close the menu",
          "tags": []
        }
      },
      "open": {
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
          "text": "Opens the menu",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onWindowClickEvent",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "wcsSubmenuOpened",
        "method": "onSubmenuOpened",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "onEscapeKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "wcsCategoryItemClicked",
        "method": "wcsCategoryItemClickedHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=com-nav-submenu.js.map
