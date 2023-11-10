'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const listItemPropertyCss = ":host{font-weight:500 !important;color:var(--wcs-gray-light)}";

const ListItemProperty = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "property" }, index.h("slot", null)));
  }
};
ListItemProperty.style = listItemPropertyCss;

exports.wcs_list_item_property = ListItemProperty;

//# sourceMappingURL=wcs-list-item-property.cjs.entry.js.map