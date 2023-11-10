import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const dropdownDividerCss = ":host{display:block;margin:var(--wcs-base-margin) calc(var(--wcs-base-margin) * 2);overflow:hidden;border-top:1px solid var(--wcs-text-light);width:calc(100% - var(--wcs-base-margin) * 4)}";

const DropdownDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "item" }));
  }
};
DropdownDivider.style = dropdownDividerCss;

export { DropdownDivider as wcs_dropdown_divider };

//# sourceMappingURL=wcs-dropdown-divider.entry.js.map