'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const listItemCss = ":host{padding:var(--wcs-padding);border:solid 1px var(--wcs-text-light);display:flex;margin-bottom:-1px;background-color:var(--wcs-white)}:host(:hover){background-color:var(--wcs-light);transition:0.175s}:host([activated]){background-color:var(--wcs-light)}::slotted([slot=title]){color:var(--wcs-gray);font-weight:700;line-height:1.2;font-family:inherit;margin-bottom:0.5rem}::slotted([slot=icon]){color:var(--wcs-gray-light);margin-right:16px}::slotted([slot=actions]){margin-left:8px}.content{display:flex;flex-direction:column;flex-grow:1}.header{display:flex;justify-content:space-between}";

const ListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.activated = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "icon" }), index.h("div", { class: "content" }, index.h("div", { class: "header" }, index.h("div", null, index.h("slot", { name: "title" }), index.h("slot", { name: "properties" })), index.h("slot", { name: "actions" })), index.h("slot", { name: "description" }))));
  }
};
ListItem.style = listItemCss;

exports.wcs_list_item = ListItem;

//# sourceMappingURL=wcs-list-item.cjs.entry.js.map