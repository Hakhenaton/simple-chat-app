import { r as registerInstance, h, H as Host, g as getElement } from './index-dc4d96d4.js';

const actionBarCss = ":host{padding:0 var(--wcs-padding);min-height:81px;background-color:var(--wcs-white);box-sizing:border-box;display:flex;flex-direction:column}:host .title-actions{padding-top:16px;padding-bottom:16px;display:flex;align-items:center;justify-content:space-between;flex-grow:1}:host .title-actions[data-has-tabs]{padding-bottom:0}:host h1{font-weight:400;line-height:1.25;margin:0;color:var(--wcs-gray)}:host([gutter]){border-bottom:solid 1px var(--wcs-light)}::slotted([slot=actions]){display:flex}";

const ActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gutter = undefined;
    this.hasTabs = false;
  }
  componentWillLoad() {
    this.hasTabs = !!this.el.querySelector('[slot="tabs"]');
  }
  render() {
    return (h(Host, null, h("div", { class: "title-actions", "data-has-tabs": this.hasTabs }, h("h1", null, h("slot", null)), h("div", { class: "actions" }, h("slot", { name: "actions" }))), h("div", { class: "tabs-container" }, h("slot", { name: "tabs" }))));
  }
  get el() { return getElement(this); }
};
ActionBar.style = actionBarCss;

export { ActionBar as wcs_action_bar };

//# sourceMappingURL=wcs-action-bar.entry.js.map