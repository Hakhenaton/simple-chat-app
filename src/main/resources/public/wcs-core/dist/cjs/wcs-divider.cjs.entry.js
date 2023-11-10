'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const dividerCss = ":host{display:block;border-bottom:solid 1px var(--wcs-text-light)}";

const Divider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null));
  }
};
Divider.style = dividerCss;

exports.wcs_divider = Divider;

//# sourceMappingURL=wcs-divider.cjs.entry.js.map