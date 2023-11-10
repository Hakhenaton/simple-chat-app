'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const GridCustomCell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.columnId = undefined;
    this.rowId = undefined;
  }
  render() {
    return (index.h(index.Host, { slot: this.columnId + '-' + this.rowId }, index.h("slot", null)));
  }
};

exports.wcs_grid_custom_cell = GridCustomCell;

//# sourceMappingURL=wcs-grid-custom-cell.cjs.entry.js.map