import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const listItemPropertiesCss = ":host{margin-bottom:2px;display:block}::slotted(*:first-of-type){padding-right:1.25rem !important;padding-left:0 !important}::slotted(*:last-of-type){padding-right:0 !important;padding-left:1.25rem !important;border-right:none !important}::slotted(*){padding-right:1.25rem;padding-left:1.25rem;border-right:solid 2px var(--wcs-text-disabled)}";

const ListItemProperties = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "properties" }, h("slot", { name: "property" })));
  }
};
ListItemProperties.style = listItemPropertiesCss;

export { ListItemProperties as wcs_list_item_properties };

//# sourceMappingURL=wcs-list-item-properties.entry.js.map