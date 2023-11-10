import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const fieldCss = ":host{display:flex;flex-direction:column;margin-top:var(--wcs-base-margin);margin-bottom:calc(var(--wcs-base-margin) * 2)}::slotted([slot=label]){font-size:1rem;line-height:1.375;font-weight:500;margin-bottom:calc(var(--wcs-base-margin) / 2);color:var(--wcs-gray-light)}::slotted([slot=content]){font-size:1rem;font-weight:400;color:var(--wcs-gray-light)}";

const Field = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", { name: "label" }), h("slot", { name: "content" })));
  }
};
Field.style = fieldCss;

export { Field as wcs_field };

//# sourceMappingURL=wcs-field.entry.js.map