import { r as registerInstance, c as createEvent, h, H as Host } from './index-dc4d96d4.js';
import { i as isSpaceKey, a as isEnterKey } from './helpers-1f7170dd.js';

const dropdownItemCss = "wcs-dropdown-item{display:block;padding:0 var(--wcs-padding);font-weight:500;cursor:pointer;height:42px;line-height:42px}wcs-dropdown-item:hover,wcs-dropdown-item:focus{color:var(--wcs-primary);background-color:var(--wcs-light)}";

const DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsDropdownItemClick = createEvent(this, "wcsDropdownItemClick", 7);
  }
  onMouseDown(_) {
    this.wcsDropdownItemClick.emit();
  }
  onKeyDown(evt) {
    if (isSpaceKey(evt) || isEnterKey(evt)) {
      this.wcsDropdownItemClick.emit();
    }
  }
  render() {
    return (h(Host, { slot: "item", tabindex: "0" }, h("slot", null)));
  }
};
DropdownItem.style = dropdownItemCss;

export { DropdownItem as wcs_dropdown_item };

//# sourceMappingURL=wcs-dropdown-item.entry.js.map