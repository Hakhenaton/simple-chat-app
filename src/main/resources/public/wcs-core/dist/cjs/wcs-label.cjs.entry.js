'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const labelCss = ":host{font-weight:500;margin-bottom:8px}:host([required])>label::after{font-weight:500;color:var(--wcs-red);content:\" *\"}label{display:inline-block}label ::slotted(wcs-mat-icon){display:inline;vertical-align:middle;margin-left:calc(var(--wcs-base-margin) / 2)}";

const Label = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.required = false;
  }
  render() {
    return (index.h(index.Host, { slot: "label" }, index.h("label", null, index.h("slot", null))));
  }
};
Label.style = labelCss;

exports.wcs_label = Label;

//# sourceMappingURL=wcs-label.cjs.entry.js.map