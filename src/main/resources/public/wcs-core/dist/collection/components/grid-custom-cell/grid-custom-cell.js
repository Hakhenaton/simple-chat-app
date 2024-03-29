import { h, Host } from '@stencil/core';
/**
 * The grid custom cell is a subcomponent of `wcs-grid`.
 */
export class GridCustomCell {
  constructor() {
    this.columnId = undefined;
    this.rowId = undefined;
  }
  render() {
    return (h(Host, { slot: this.columnId + '-' + this.rowId }, h("slot", null)));
  }
  static get is() { return "wcs-grid-custom-cell"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "columnId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "ID of the column for which to render the cell"
        },
        "attribute": "column-id",
        "reflect": false
      },
      "rowId": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Key value of the object rendered for the cell's row"
        },
        "attribute": "row-id",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=grid-custom-cell.js.map
