import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const listItemCss = ":host{padding:var(--wcs-padding);border:solid 1px var(--wcs-text-light);display:flex;margin-bottom:-1px;background-color:var(--wcs-white)}:host(:hover){background-color:var(--wcs-light);transition:0.175s}:host([activated]){background-color:var(--wcs-light)}::slotted([slot=title]){color:var(--wcs-gray);font-weight:700;line-height:1.2;font-family:inherit;margin-bottom:0.5rem}::slotted([slot=icon]){color:var(--wcs-gray-light);margin-right:16px}::slotted([slot=actions]){margin-left:8px}.content{display:flex;flex-direction:column;flex-grow:1}.header{display:flex;justify-content:space-between}";

const ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activated = false;
  }
  render() {
    return (h(Host, null, h("slot", { name: "icon" }), h("div", { class: "content" }, h("div", { class: "header" }, h("div", null, h("slot", { name: "title" }), h("slot", { name: "properties" })), h("slot", { name: "actions" })), h("slot", { name: "description" }))));
  }
};
ListItem.style = listItemCss;

export { ListItem as wcs_list_item };

//# sourceMappingURL=wcs-list-item.entry.js.map