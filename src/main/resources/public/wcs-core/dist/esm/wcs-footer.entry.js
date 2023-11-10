import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const footerCss = ":host{display:block;width:100%;background-color:var(--wcs-gray);color:white}:host .end{margin-top:calc(2 * var(--wcs-base-margin));width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:var(--wcs-base-margin)}:host .end .end-left,:host .end .end-right{display:flex;flex-wrap:wrap}@media only screen and (max-width: 1024px){:host .end .end-left,:host .end .end-right{flex-direction:column}}:host .end slot[name=end-left]::slotted(a){color:var(--wcs-text-disabled);text-decoration:none;font-size:14px;font-weight:500;margin-right:35px}:host .end slot[name=end-left]::slotted(a:hover){color:var(--wcs-white)}:host .container{margin:0 auto;max-width:var(--wcs-com-content-max-width);display:flex;flex-direction:column;padding:20px}";

const Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "container" }, h("div", null, h("slot", null)), h("div", { class: "end" }, h("div", { class: "end-left" }, h("slot", { name: "end-left" })), h("div", { class: "end-right" }, h("slot", { name: "end-right" }))))));
  }
};
Footer.style = footerCss;

export { Footer as wcs_footer };

//# sourceMappingURL=wcs-footer.entry.js.map