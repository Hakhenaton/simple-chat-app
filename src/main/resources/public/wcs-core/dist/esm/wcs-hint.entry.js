import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const hintCss = ":host{margin-top:0.25rem}:host([small]){font-size:0.75rem;font-weight:400;color:var(--wcs-text-medium)}";

const Hint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.small = false;
  }
  render() {
    return (h(Host, { slot: "messages" }, h("slot", null)));
  }
};
Hint.style = hintCss;

export { Hint as wcs_hint };

//# sourceMappingURL=wcs-hint.entry.js.map