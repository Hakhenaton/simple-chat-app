import { r as registerInstance, h, H as Host, g as getElement } from './index-dc4d96d4.js';
import { r as registerCloseHandlerForFocusOutEventOn } from './com-nav-utils-f26d3b2d.js';
import { i as isSpaceKey, a as isEnterKey, b as isEscapeKey } from './helpers-1f7170dd.js';

const comNavCss = ":host{display:block;position:relative;height:75px;border-bottom:solid 1px var(--wcs-text-light)}:host .container{padding:0 var(--wcs-padding);height:100%;display:flex;align-items:center;flex-direction:row;justify-content:space-between}:host .container-left{display:flex;height:100%;align-items:center;flex-direction:row}:host .container-right{display:flex;align-items:center}:host .app-name{font-weight:400;font-size:1.5rem;line-height:1.25;color:var(--wcs-gray)}:host .menu-bar{display:none}:host ::slotted(a){padding-top:calc(1.5 * var(--wcs-base-margin));padding-bottom:calc(1.5 * var(--wcs-base-margin));padding-left:calc(3 * var(--wcs-base-margin));display:flex;align-items:center;height:100%;font-size:16px;cursor:pointer;font-weight:500;color:var(--wcs-gray);text-decoration:none}:host ::slotted(a):after{font-family:icons;padding-left:var(--wcs-base-margin);font-size:0.6rem;content:\"\\f107\";line-height:1;box-sizing:border-box}:host ::slotted(a:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host ::slotted(a:focus-within){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}:host #mobile-menu-icon{height:24px;padding-left:calc(2 * var(--wcs-base-margin));margin-left:var(--wcs-base-margin);border-left:solid 1px var(--wcs-text-light)}:host #mobile-menu-icon:focus{outline:none}:host #mobile-menu-icon:focus-visible::after{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:0.1rem}@supports not selector(#mobile-menu-icon:focus-visible::after){:host #mobile-menu-icon:focus::after{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:0.1rem}}:host #mobile-menu-icon:after{font-family:icons;font-size:24px;cursor:pointer;content:\"\\f198\";line-height:1;box-sizing:border-box}:host #mobile-menu-icon[data-mobile-open]:after{content:\"\\f129\"}:host .mobile-overlay{display:none}:host .mobile-overlay[data-mobile-open]{padding-top:calc(2 * var(--wcs-base-margin));padding-bottom:calc(2 * var(--wcs-base-margin));position:relative;top:0;left:0;right:0;display:block;z-index:9999;background-color:var(--wcs-white)}@media screen and (min-width: 576px){:host .container{margin:0 auto;max-width:var(--wcs-com-content-max-width)}:host .menu-bar{display:flex;align-items:center;height:100%;margin-left:50px}:host .menu-bar ::slotted(*:not(:first-child)){margin-left:40px}:host .menu-bar ::slotted(a:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .menu-bar ::slotted(a:focus-within){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}:host #mobile-menu-icon{display:none}:host .mobile-overlay{display:none !important}:host ::slotted(a){padding-top:unset;padding-bottom:unset;padding-left:unset}}";

const WCS_COM_NAV_SUBMENU_TAG_NAME = 'WCS-COM-NAV-SUBMENU';
const ComNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
ComNav.style = comNavCss;

export { ComNav as wcs_com_nav };

//# sourceMappingURL=wcs-com-nav.entry.js.map