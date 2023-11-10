'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const listItemPropertiesCss = ":host{margin-bottom:2px;display:block}::slotted(*:first-of-type){padding-right:1.25rem !important;padding-left:0 !important}::slotted(*:last-of-type){padding-right:0 !important;padding-left:1.25rem !important;border-right:none !important}::slotted(*){padding-right:1.25rem;padding-left:1.25rem;border-right:solid 2px var(--wcs-text-disabled)}";

const ListItemProperties = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "properties" }, index.h("slot", { name: "property" })));
  }
};
ListItemProperties.style = listItemPropertiesCss;

exports.wcs_list_item_properties = ListItemProperties;

//# sourceMappingURL=wcs-list-item-properties.cjs.entry.js.map