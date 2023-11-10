import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const headerCss = "header{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);display:flex;align-items:center;background:var(--wcs-gray);padding:8px 8px 8px 16px;height:48px;z-index:1}::slotted(img){width:70px;height:36.8px;margin-right:16px}::slotted(h1){color:var(--wcs-white);margin:0;font-weight:500;font-size:1.5rem}::slotted([slot=actions]){margin-left:auto}";

const Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  hostData() {
    return {
      'slot': 'header'
    };
  }
  __stencil_render() {
    return (h("header", null, h("slot", { name: "logo" }), h("slot", { name: "title" }), h("slot", { name: "actions" })));
  }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
Header.style = headerCss;

export { Header as wcs_header };

//# sourceMappingURL=wcs-header.entry.js.map