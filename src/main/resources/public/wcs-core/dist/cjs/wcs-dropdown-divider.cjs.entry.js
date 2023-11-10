'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const dropdownDividerCss = ":host{display:block;margin:var(--wcs-base-margin) calc(var(--wcs-base-margin) * 2);overflow:hidden;border-top:1px solid var(--wcs-text-light);width:calc(100% - var(--wcs-base-margin) * 4)}";

const DropdownDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { slot: "item" }));
  }
};
DropdownDivider.style = dropdownDividerCss;

exports.wcs_dropdown_divider = DropdownDivider;

//# sourceMappingURL=wcs-dropdown-divider.cjs.entry.js.map