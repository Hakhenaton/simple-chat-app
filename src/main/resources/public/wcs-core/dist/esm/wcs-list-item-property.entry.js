import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const listItemPropertyCss = ":host{font-weight:500 !important;color:var(--wcs-gray-light)}";

const ListItemProperty = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "property" }, h("slot", null)));
  }
};
ListItemProperty.style = listItemPropertyCss;

export { ListItemProperty as wcs_list_item_property };

//# sourceMappingURL=wcs-list-item-property.entry.js.map