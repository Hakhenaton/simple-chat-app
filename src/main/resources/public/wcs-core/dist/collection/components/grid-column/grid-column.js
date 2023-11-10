import { h, Host } from '@stencil/core';
import { GridSortArrow } from './grid-sort-arrow';
/**
 * The grid column is a subcomponent of `wcs-grid` that represents a column of the table.
 * @cssprop --wcs-grid-column-border-left - Border separator between column names
 * @csspart [path]-column - CSS part for each column for styling. e.g: first_name-column, email-column
 */
export class GridColumn {
  constructor() {
    this.path = undefined;
    this.name = undefined;
    this.sort = false;
    this.sortFn = undefined;
    this.formatter = undefined;
    this.sortOrder = 'none';
    this.width = undefined;
    this.customCells = false;
    this.hidden = false;
  }
  parseMyObjectProp(newValue) {
    this.wcsHiddenChange.emit(newValue);
  }
  sortOrderChange(_) {
    this.emitSortConfig();
  }
  emitSortConfig() {
    if (!this.sort)
      return;
    this.wcsSortChange.emit({
      column: this.el,
      order: this.sortOrder,
      sortFn: this.sortFn
    });
  }
  render() {
    return (h(Host, { onClick: this.onSortClick.bind(this), slot: "grid-column" }, h("th", { style: { width: this.width }, class: this.sort ? 'pointer' : '' }, h("div", { class: "grid-column-th-content" }, h("span", null, this.name), this.sort ? h(GridSortArrow, { state: this.sortOrder }) : ''))));
  }
  onSortClick() {
    // @Watch on sortOrder property will trigger wcsSortChange event
    this.sortOrder = this.sortOrder === 'none' || this.sortOrder === 'desc' ? 'asc' : 'desc';
  }
  static get is() { return "wcs-grid-column"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["grid-column.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["grid-column.css"]
    };
  }
  static get properties() {
    return {
      "path": {
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
          "text": "Represents the name of the field from the `data` object (e.g: first_name, last_name, email, ...)"
        },
        "attribute": "path",
        "reflect": false
      },
      "name": {
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
          "text": "The name of the column displayed on the table (e.g: First Name, Last Name, Email, ...)"
        },
        "attribute": "name",
        "reflect": false
      },
      "sort": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Make the column sortable."
        },
        "attribute": "sort",
        "reflect": false,
        "defaultValue": "false"
      },
      "sortFn": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "WcsSortFn",
          "resolved": "(a: any, b: any, column: HTMLWcsGridColumnElement) => 0 | 1 | -1",
          "references": {
            "WcsSortFn": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Customizable sort function to change the comparison of values."
        }
      },
      "formatter": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "WcsCellFormatter",
          "resolved": "(_h: HyperFunc<VNode>, column: HTMLWcsGridColumnElement, rowData: WcsGridRowData) => HTMLElement | HTMLElement[]",
          "references": {
            "WcsCellFormatter": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Customizable formatter function to render the cell differently."
        }
      },
      "sortOrder": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "WcsSortOrder",
          "resolved": "\"asc\" | \"desc\" | \"none\"",
          "references": {
            "WcsSortOrder": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if the column sort is ascending or descending.  \n`none` = the column is not sorted."
        },
        "attribute": "sort-order",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "width": {
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
          "text": "Set the column `<th>` element width."
        },
        "attribute": "width",
        "reflect": false
      },
      "customCells": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set to true if using a `wcs-custom-cell` linked to it."
        },
        "attribute": "custom-cells",
        "reflect": false,
        "defaultValue": "false"
      },
      "hidden": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Flag to hide the column."
        },
        "attribute": "hidden",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsSortChange",
        "name": "wcsSortChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the sort of the column is changed."
        },
        "complexType": {
          "original": "WcsGridColumnSortChangeEventDetails",
          "resolved": "WcsGridColumnSortChangeEventDetails",
          "references": {
            "WcsGridColumnSortChangeEventDetails": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        }
      }, {
        "method": "wcsHiddenChange",
        "name": "wcsHiddenChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted if the column is dynamically switching visibility."
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "hidden",
        "methodName": "parseMyObjectProp"
      }, {
        "propName": "sortOrder",
        "methodName": "sortOrderChange"
      }];
  }
}
//# sourceMappingURL=grid-column.js.map
