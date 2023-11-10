'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const dropdownHeaderCss = ":host{display:block;padding:calc(var(--wcs-padding) / 2) var(--wcs-padding);font-size:0.75rem;text-transform:uppercase;color:var(--wcs-text-medium);white-space:nowrap}";

const DropdownHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "item" }, index.h("slot", null)));
  }
};
DropdownHeader.style = dropdownHeaderCss;

exports.wcs_dropdown_header = DropdownHeader;

//# sourceMappingURL=wcs-dropdown-header.cjs.entry.js.map