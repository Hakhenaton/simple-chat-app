'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const hintCss = ":host{margin-top:0.25rem}:host([small]){font-size:0.75rem;font-weight:400;color:var(--wcs-text-medium)}";

const Hint = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.small = false;
  }
  render() {
    return (index.h(index.Host, { slot: "messages" }, index.h("slot", null)));
  }
};
Hint.style = hintCss;

exports.wcs_hint = Hint;

//# sourceMappingURL=wcs-hint.cjs.entry.js.map