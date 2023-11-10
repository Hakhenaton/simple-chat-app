import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const dropdownHeaderCss = ":host{display:block;padding:calc(var(--wcs-padding) / 2) var(--wcs-padding);font-size:0.75rem;text-transform:uppercase;color:var(--wcs-text-medium);white-space:nowrap}";

const DropdownHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "item" }, h("slot", null)));
  }
};
DropdownHeader.style = dropdownHeaderCss;

export { DropdownHeader as wcs_dropdown_header };

//# sourceMappingURL=wcs-dropdown-header.entry.js.map