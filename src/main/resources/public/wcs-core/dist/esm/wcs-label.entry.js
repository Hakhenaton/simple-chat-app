import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const labelCss = ":host{font-weight:500;margin-bottom:8px}:host([required])>label::after{font-weight:500;color:var(--wcs-red);content:\" *\"}label{display:inline-block}label ::slotted(wcs-mat-icon){display:inline;vertical-align:middle;margin-left:calc(var(--wcs-base-margin) / 2)}";

const Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.required = false;
  }
  render() {
    return (h(Host, { slot: "label" }, h("label", null, h("slot", null))));
  }
};
Label.style = labelCss;

export { Label as wcs_label };

//# sourceMappingURL=wcs-label.entry.js.map