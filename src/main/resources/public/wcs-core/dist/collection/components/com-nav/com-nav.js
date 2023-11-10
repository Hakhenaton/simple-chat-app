import { Host, h } from '@stencil/core';
import { registerCloseHandlerForFocusOutEventOn } from "./com-nav-utils";
import { isEnterKey, isEscapeKey, isSpaceKey } from "../../utils/helpers";
const WCS_COM_NAV_SUBMENU_TAG_NAME = 'WCS-COM-NAV-SUBMENU';
export class ComNav {
  constructor() {
    this.hasAlreadyRegisteredClickHandlerOnSlottedLink = false;
    this.appName = undefined;
    this.mobileMenuOpen = false;
    this.currentActiveSizing = undefined;
  }
  mobileMenuIconClick() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentWillLoad() {
    this.resizeObserver = new ResizeObserver(entry => {
      const cr = entry[0].contentRect;
      const paddingRight = cr.right - cr.width;
      const paddingLeft = cr.left;
      if (cr.width < 576 - (paddingLeft + paddingRight)) {
        this.currentActiveSizing = 'mobile';
      }
      else {
        this.currentActiveSizing = 'desktop';
      }
    });
    this.resizeObserver.observe(document.body);
    const slottedNavigableItems = this.el.querySelectorAll(':scope > wcs-com-nav-submenu:not([slot]), :scope > a:not([slot])');
    registerCloseHandlerForFocusOutEventOn(slottedNavigableItems, WCS_COM_NAV_SUBMENU_TAG_NAME);
  }
  componentDidRender() {
    this.registerHandlerToCloseMobileMenuOnClickOnSlottedLinkTag();
  }
  registerHandlerToCloseMobileMenuOnClickOnSlottedLinkTag() {
    if (this.hasAlreadyRegisteredClickHandlerOnSlottedLink)
      return;
    const mainSlot = this.el.shadowRoot.querySelector('slot:not([name])');
    if (mainSlot) {
      this.hasAlreadyRegisteredClickHandlerOnSlottedLink = true;
      // If the user click on a `a` tag, we close the mobile menu overlay.
      mainSlot.assignedElements().filter(e => e.tagName === 'A').forEach(a => {
        a.addEventListener('click', _ => {
          this.mobileMenuOpen = false;
        });
      });
    }
  }
  //region Handlers for mobile menu overlay visibility
  //
  // In mobile mode, we have only one global drawer to display the menu, that why we have to listen the clicks events
  // in the root component (this component). In desktop mode, all submenus and categories manage their drawer its
  // opening state.
  //
  // We listen to the click events fired by the sebmenu component and we close the mobile menu.
  // In desktop mode, the submenu itself manages the closing of the menu.
  onClickOnFinalAction() {
    this.mobileMenuOpen = false;
  }
  // We also listen click events on the category menu items, to close the mobile menu.
  // In desktop mode, the category itself manages the closing of the menu.
  onClickOnFinalActionCat() {
    this.mobileMenuOpen = false;
  }
  //endregion
  render() {
    return (h(Host, null, h("div", { class: "container" }, h("div", { class: "container-left" }, h("div", { class: "app-name" }, this.appName, h("slot", { name: "app-name" })), h("div", { class: "menu-bar" }, this.currentActiveSizing === 'desktop' ? h("slot", null) : null)), h("div", { class: "container-right" }, h("slot", { name: "actions" }), h("span", { id: "mobile-menu-icon", tabindex: 0, "data-mobile-open": this.mobileMenuOpen, onClick: () => this.mobileMenuIconClick(), onKeyDown: evt => this.mobileMenuIconOnKeyDown(evt) }))), h("div", { class: "mobile-overlay", "data-mobile-open": this.mobileMenuOpen }, this.currentActiveSizing === 'mobile' ? h("slot", null) : null)));
  }
  /**
   * Handle the keydown event on the mobile menu icon. Open the menu if the user press space or enter.
   * @param evt The keydown event.
   * @private
   */
  mobileMenuIconOnKeyDown(evt) {
    if (isSpaceKey(evt) || isEnterKey(evt)) {
      this.mobileMenuIconClick();
    }
  }
  /**
   * Close the mobile menu if the user press escape.
   * @param evt keydown event on window target.
   */
  exitMobileMenuOnKeyDown(evt) {
    if (isEscapeKey(evt)) {
      this.mobileMenuOpen = false;
    }
  }
  static get is() { return "wcs-com-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["com-nav.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["com-nav.css"]
    };
  }
  static get properties() {
    return {
      "appName": {
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
          "text": "Name of the application to be displayed in the menu bar"
        },
        "attribute": "app-name",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "mobileMenuOpen": {},
      "currentActiveSizing": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "wcsClickOnFinalAction",
        "method": "onClickOnFinalAction",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "wcsCategoryItemClicked",
        "method": "onClickOnFinalActionCat",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "exitMobileMenuOnKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=com-nav.js.map
