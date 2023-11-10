import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-dc4d96d4.js';
import { b as isEscapeKey, i as isSpaceKey, a as isEnterKey } from './helpers-1f7170dd.js';
import { r as registerCloseHandlerForFocusOutEventOn } from './com-nav-utils-f26d3b2d.js';

const comNavSubmenuCss = ":host{display:block;padding-bottom:var(--wcs-padding)}:host .menu-button{display:block;font-weight:500;padding-left:calc(3 * var(--wcs-base-margin))}:host .arrow-icon{display:none}:host .arrow-container{display:none}:host .label{text-transform:uppercase;font-size:16px;cursor:unset;font-weight:500;color:var(--wcs-gray);text-decoration:none}:host .drawer{display:contents}:host .drawer-container{display:contents}:host .drawer-description{display:none}:host .menu-items{}:host .menu-items ::slotted(a):after{font-family:icons;padding-left:var(--wcs-base-margin);font-size:0.6rem;content:\"\\f107\";line-height:1;box-sizing:border-box}:host .menu-items ::slotted(a){user-select:none;cursor:pointer;text-decoration:none;font-size:16px;color:var(--wcs-gray);font-weight:500;display:block;padding-top:calc(1.5 * var(--wcs-base-margin));padding-bottom:calc(1.5 * var(--wcs-base-margin));padding-left:calc(6 * var(--wcs-base-margin))}:host .menu-items ::slotted(a:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .menu-items ::slotted(a:focus-within){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}@media screen and (min-width: 576px){:host{height:100%;padding-bottom:unset}:host .menu-button{display:flex;align-items:center;height:100%;cursor:pointer;user-select:none;font-weight:unset;padding-left:unset}:host .menu-button:focus-visible{outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(.menu-button:focus-visible){:host{outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}:host .label{text-transform:unset;cursor:pointer}:host .arrow-icon{display:inline-block;font-family:icons;font-size:0.6rem;line-height:1;box-sizing:border-box}:host .arrow-container{display:unset;margin-left:var(--wcs-base-margin)}:host .arrow-icon:not([data-open]){transform:rotate(90deg)}:host .arrow-icon[data-open]{transform:rotate(-90deg)}:host .drawer{display:none;position:absolute;top:75px;z-index:8888;left:0;width:100%;box-sizing:border-box;padding:50px;background-color:var(--wcs-primary);color:var(--wcs-white)}:host .drawer-content{display:flex;justify-content:space-between;max-width:62.5%;flex:1}:host .drawer-content div:first-child{flex:0.8}:host .drawer-content div{max-width:260px}:host .menu-items{padding:0 80px 0 50px;display:flex;flex-direction:column;align-items:flex-end}:host .menu-items ::slotted(*:not(:first-child)){margin-top:24px}:host .menu-items ::slotted(a){color:var(--wcs-white);font-weight:400;display:unset;padding-top:unset;padding-bottom:unset;padding-left:unset}:host .menu-items ::slotted(a:focus-visible){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .menu-items ::slotted(a:focus-within){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}}:host .drawer-container{display:flex;max-width:var(--wcs-com-content-max-width);margin:0 auto}:host .drawer-container h3{margin:0 0 24px 0;font-size:1.5rem;line-height:1.25;font-weight:400}:host .drawer-container p{margin-top:0;margin-bottom:1rem;font-weight:500;font-size:1rem;line-height:1.375}:host .drawer[data-open]{display:block}:host .drawer-description{display:block}}";

const WCS_COM_NAV_CATEGORY = 'WCS-COM-NAV-CATEGORY';
const ComNavSubmenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsSubmenuOpened = createEvent(this, "wcsSubmenuOpened", 7);
    this.wcsClickOnFinalAction = createEvent(this, "wcsClickOnFinalAction", 7);
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
  get el() { return getElement(this); }
};
ComNavSubmenu.style = comNavSubmenuCss;

export { ComNavSubmenu as wcs_com_nav_submenu };

//# sourceMappingURL=wcs-com-nav-submenu.entry.js.map