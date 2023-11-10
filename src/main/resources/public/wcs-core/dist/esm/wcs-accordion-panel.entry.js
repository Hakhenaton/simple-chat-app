import { r as registerInstance, c as createEvent, h, H as Host } from './index-dc4d96d4.js';
import { S as SelectArrow } from './select-arrow-81d069f7.js';

const accordionPanelCss = ":host{display:flex;flex-direction:column;cursor:pointer;margin-bottom:16px}:host .header{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;border-radius:7px;font-weight:500;font-size:16px;color:var(--wcs-primary);background-color:var(--wcs-light);border:none}@media (forced-colors: active){:host .header{border:1px solid ButtonBorder}}:host .header:focus-visible{outline:2px solid var(--wcs-primary)}:host .header-action{display:flex;align-items:center;user-select:none}:host .header-action .arrow{fill:var(--wcs-primary)}:host .content{display:none}:host([open]){margin-bottom:0}:host([open]) .content{display:block}:host([open]):host([group-content-with-header]) .header{border-radius:7px 7px 0 0;padding-bottom:0}:host([open]):host([group-content-with-header]) .content{border-radius:0 0 7px 7px;margin-bottom:14px;background-color:var(--wcs-light)}:host([open]):host([highlight]) .header{background-color:var(--wcs-primary);color:var(--wcs-light)}:host([open]):host([highlight]) .arrow{fill:var(--wcs-light)}:host([open]):host([highlight]):host([group-content-with-header]) .content{background-color:var(--wcs-primary);color:var(--wcs-light)}";

const AccordionPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsOpenChange = createEvent(this, "wcsOpenChange", 7);
    this.open = false;
    this.hideActionText = false;
    this.highlight = false;
    this.groupContentWithHeader = false;
  }
  openChange(newValue) {
    this.wcsOpenChange.emit(newValue);
  }
  async close() {
    this.open = false;
  }
  render() {
    return (h(Host, null, h("button", { "aria-expanded": this.open ? "true" : "false", "aria-controls": "content", class: "header", onClick: () => this.open = !this.open }, h("slot", { name: "header" }), h("span", { class: "header-action" }, !this.hideActionText && (h("span", null, this.open ? 'Fermez' : 'Ouvrez')), h(SelectArrow, { up: this.open }))), h("div", { class: "content", id: "content" }, h("slot", { name: "content" }))));
  }
  static get watchers() { return {
    "open": ["openChange"]
  }; }
};
AccordionPanel.style = accordionPanelCss;

export { AccordionPanel as wcs_accordion_panel };

//# sourceMappingURL=wcs-accordion-panel.entry.js.map