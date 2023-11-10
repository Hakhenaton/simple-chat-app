'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const fieldCss = ":host{display:flex;flex-direction:column;margin-top:var(--wcs-base-margin);margin-bottom:calc(var(--wcs-base-margin) * 2)}::slotted([slot=label]){font-size:1rem;line-height:1.375;font-weight:500;margin-bottom:calc(var(--wcs-base-margin) / 2);color:var(--wcs-gray-light)}::slotted([slot=content]){font-size:1rem;font-weight:400;color:var(--wcs-gray-light)}";

const Field = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "label" }), index.h("slot", { name: "content" })));
  }
};
Field.style = fieldCss;

exports.wcs_field = Field;

//# sourceMappingURL=wcs-field.cjs.entry.js.map