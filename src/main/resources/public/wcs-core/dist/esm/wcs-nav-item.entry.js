import { r as registerInstance, h, g as getElement } from './index-dc4d96d4.js';
import { a as isEnterKey } from './helpers-1f7170dd.js';

const navItemCss = "wcs-nav-item{display:block;cursor:pointer}wcs-nav-item a{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center;background-color:transparent;border:none;text-decoration:none;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;height:5rem;font-size:0.75rem;color:var(--wcs-contrast)}wcs-nav-item a:not(.active){border-bottom:1px solid rgba(255, 255, 255, 0.2)}@media (max-width: 1199px){wcs-nav-item a{display:flex;flex:1;height:3.25rem;font-size:0.625rem;color:var(--wcs-text-medium)}}wcs-nav-item a:focus{outline:none}@media (max-width: 1199px){wcs-nav-item:focus-within{outline:2px dashed var(--wcs-primary);outline-offset:1px;border-radius:0.1rem}}@media (min-width: 1200px){wcs-nav-item:focus-within{outline:2px dashed var(--wcs-white);outline-offset:-2px;border-radius:0.1rem}}wcs-nav-item i{margin-bottom:0.5rem;display:inline-block}@media (max-width: 1199px){wcs-nav-item i{margin-bottom:0.25rem;display:inline-block}}@media (min-width: 1200px){wcs-nav-item[slot=bottom] a{border-top:1px solid rgba(255, 255, 255, 0.2);border-bottom:none}}.wcs-nav-item-text{font-weight:500}.active,wcs-nav-item:hover,wcs-nav-item:focus-within{background-blend-mode:multiply;background-color:rgba(0, 0, 0, 0.15);}@media (max-width: 1199px){.active,wcs-nav-item:hover,wcs-nav-item:focus-within{background-color:unset}.active a,wcs-nav-item:hover a,wcs-nav-item:focus-within a{color:var(--wcs-primary)}}";

const NavItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
NavItem.style = navItemCss;

export { NavItem as wcs_nav_item };

//# sourceMappingURL=wcs-nav-item.entry.js.map