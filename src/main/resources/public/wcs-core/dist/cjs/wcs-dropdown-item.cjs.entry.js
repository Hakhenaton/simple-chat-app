'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');

const dropdownItemCss = "wcs-dropdown-item{display:block;padding:0 var(--wcs-padding);font-weight:500;cursor:pointer;height:42px;line-height:42px}wcs-dropdown-item:hover,wcs-dropdown-item:focus{color:var(--wcs-primary);background-color:var(--wcs-light)}";

const DropdownItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsDropdownItemClick = index.createEvent(this, "wcsDropdownItemClick", 7);
  }
  onMouseDown(_) {
    this.wcsDropdownItemClick.emit();
  }
  onKeyDown(evt) {
    if (helpers.isSpaceKey(evt) || helpers.isEnterKey(evt)) {
      this.wcsDropdownItemClick.emit();
    }
  }
  render() {
    return (index.h(index.Host, { slot: "item", tabindex: "0" }, index.h("slot", null)));
  }
};
DropdownItem.style = dropdownItemCss;

exports.wcs_dropdown_item = DropdownItem;

//# sourceMappingURL=wcs-dropdown-item.cjs.entry.js.map