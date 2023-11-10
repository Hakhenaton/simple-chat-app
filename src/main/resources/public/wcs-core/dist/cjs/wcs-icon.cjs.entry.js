'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.size = undefined;
  }
  render() {
    const cssClass = {
      class: {
        [`icons-${this.icon}`]: true,
        [`icons-size-${this.size}`]: true
      }
    };
    return (index.h("i", Object.assign({}, cssClass)));
  }
};

exports.wcs_icon = Icon;

//# sourceMappingURL=wcs-icon.cjs.entry.js.map