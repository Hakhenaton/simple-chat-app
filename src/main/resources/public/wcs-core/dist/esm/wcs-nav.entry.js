import { r as registerInstance, h } from './index-dc4d96d4.js';

const navCss = "nav{background-image:linear-gradient(0deg, var(--wcs-primary), var(--wcs-primary));display:flex;z-index:1055;flex-direction:column;width:6.25rem;height:100%}@media (max-width: 1199px){nav{flex-direction:row;background-image:linear-gradient(0deg, var(--wcs-light), var(--wcs-light));border-top:1px solid #d8d8d8;bottom:0;width:100%;height:3.25rem}}@media (max-width: 1199px){::slotted(wcs-nav-item){flex:1}}@media (min-width: 1200px){slot[name=bottom],wcs-nav-item:not([slot=bottom])+wcs-nav-item[slot=bottom]{display:block;margin-top:auto}}";

const Nav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("nav", { class: "wcs-nav-container" }, h("slot", null), h("slot", { name: "bottom" })));
  }
};
Nav.style = navCss;

export { Nav as wcs_nav };

//# sourceMappingURL=wcs-nav.entry.js.map