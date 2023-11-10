import { r as registerInstance, h, H as Host } from './index-dc4d96d4.js';

const GridCustomCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.columnId = undefined;
    this.rowId = undefined;
  }
  render() {
    return (h(Host, { slot: this.columnId + '-' + this.rowId }, h("slot", null)));
  }
};

export { GridCustomCell as wcs_grid_custom_cell };

//# sourceMappingURL=wcs-grid-custom-cell.entry.js.map