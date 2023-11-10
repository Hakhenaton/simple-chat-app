'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const actionBarCss = ":host{padding:0 var(--wcs-padding);min-height:81px;background-color:var(--wcs-white);box-sizing:border-box;display:flex;flex-direction:column}:host .title-actions{padding-top:16px;padding-bottom:16px;display:flex;align-items:center;justify-content:space-between;flex-grow:1}:host .title-actions[data-has-tabs]{padding-bottom:0}:host h1{font-weight:400;line-height:1.25;margin:0;color:var(--wcs-gray)}:host([gutter]){border-bottom:solid 1px var(--wcs-light)}::slotted([slot=actions]){display:flex}";

const ActionBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gutter = undefined;
    this.hasTabs = false;
  }
  componentWillLoad() {
    this.hasTabs = !!this.el.querySelector('[slot="tabs"]');
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "title-actions", "data-has-tabs": this.hasTabs }, index.h("h1", null, index.h("slot", null)), index.h("div", { class: "actions" }, index.h("slot", { name: "actions" }))), index.h("div", { class: "tabs-container" }, index.h("slot", { name: "tabs" }))));
  }
  get el() { return index.getElement(this); }
};
ActionBar.style = actionBarCss;

exports.wcs_action_bar = ActionBar;

//# sourceMappingURL=wcs-action-bar.cjs.entry.js.map