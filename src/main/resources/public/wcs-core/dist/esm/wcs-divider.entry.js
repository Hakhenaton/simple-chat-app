import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const dividerCss = ":host{display:block;border-bottom:solid 1px var(--wcs-text-light)}";

const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null));
  }
};
Divider.style = dividerCss;

export { Divider as wcs_divider };

//# sourceMappingURL=wcs-divider.entry.js.map