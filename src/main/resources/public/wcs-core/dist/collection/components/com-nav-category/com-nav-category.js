import { h, Host } from '@stencil/core';
import { isEnterKey, isSpaceKey } from "../../utils/helpers";
export class ComNavCategory {
  constructor() {
    this.label = undefined;
    this.categoryOpen = false;
  }
  onWindowClickEvent(_) {
    if (this.categoryOpen)
      this.categoryOpen = false;
  }
  onSubmenuOpened(event) {
    if (event.detail.categoryElement !== this.el) {
      this.categoryOpen = false;
    }
  }
  /**
   * Open the menu if it is closed and closed the menu if it is already opened
   * @param _event the keyboard event
   * @private
   */
  handleMenuKeyDown(_event) {
    if ((isSpaceKey(_event)) || isEnterKey(_event)) {
      this.categoryOpen = !this.categoryOpen;
    }
  }
  /**
   * Handle key down on category items
   * @param _event the keyboard event
   * @private
   */
  handleCategoryItemsKeyDown(_event) {
    if ((isSpaceKey(_event)) || isEnterKey(_event)) {
      this.handleItemClick(_event);
    }
  }
  /**
   * Close the category
   */
  async close() {
    this.categoryOpen = false;
  }
  /**
   * Opens the category
   */
  async open() {
    this.categoryOpen = true;
  }
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  onClick(evt) {
    evt.stopPropagation();
    this.wcsCategoryOpened.emit({ categoryElement: this.el });
  }
  /**
   * Close the category and fire item click if we detect a mouse click on a slotted `a` element.
   * @param evt
   * @private
   */
  handleItemClick(evt) {
    if (evt.target.tagName === 'A') {
      this.close();
      this.wcsCategoryItemClicked.emit(evt);
    }
  }
  render() {
    return (h(Host, { onClick: evt => this.onClick(evt) }, h("div", { tabindex: screen.width < 576 ? "-1" : "0", class: "label-container", "data-open": this.categoryOpen, onKeyDown: evt => this.handleMenuKeyDown(evt), onClick: _ => this.categoryOpen = !this.categoryOpen }, h("span", { class: "label" }, this.label)), h("div", { class: "item-container", tabIndex: -1, "data-open": this.categoryOpen, onKeyDown: evt => this.handleCategoryItemsKeyDown(evt), onClick: (evt) => this.handleItemClick(evt) }, h("slot", null))));
  }
  static get is() { return "wcs-com-nav-category"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["com-nav-category.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["com-nav-category.css"]
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
      }
    };
  }
  static get states() {
    return {
      "categoryOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "wcsCategoryOpened",
        "name": "wcsCategoryOpened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CategoryOpenedEventDetail",
          "resolved": "CategoryOpenedEventDetail",
          "references": {
            "CategoryOpenedEventDetail": {
              "location": "import",
              "path": "../com-nav/com-nav-interface"
            }
          }
        }
      }, {
        "method": "wcsCategoryItemClicked",
        "name": "wcsCategoryItemClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "UIEvent",
          "resolved": "UIEvent",
          "references": {
            "UIEvent": {
              "location": "global"
            }
          }
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
          "text": "Close the category",
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
          "text": "Opens the category",
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
        "name": "wcsCategoryOpened",
        "method": "onSubmenuOpened",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=com-nav-category.js.map
