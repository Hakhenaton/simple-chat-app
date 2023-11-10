import { forceUpdate, h, Host } from '@stencil/core';
import { getSortOrderInteger } from './grid-interface';
import { v4 as uuid } from 'uuid';
import { cloneDeep, isEqual, get } from 'lodash-es';
import { GridPagination } from '../grid-pagination/grid-pagination';
/**
 * The grid component is a complex component used as an HTML table to display collections of data.
 *
 * @cssprop --wcs-grid-highlight-color - Color for selected rows
 * @cssprop --wcs-grid-column-border-left - Left border of all grid headers
 * @slot grid-column - The slot containing the column of the grid in the `<thead>`
 * @slot grid-pagination - The slot containing the pagination of the grid below the `<table>`
 */
export class Grid {
  constructor() {
    this.serverMode = false;
    this.data = undefined;
    this.loading = undefined;
    this.selectionConfig = 'none';
    this.selectedItems = [];
    this.wcsGridPaginationId = undefined;
    this.rowIdPath = undefined;
    this.columns = undefined;
    this.paginationEl = undefined;
    this.rows = [];
  }
  onDataChange(newValue) {
    this.updateGridRows(newValue);
    this.refreshSort(false);
  }
  onSelectedItemsPropertyChange(newValue) {
    this.updateSelectionWithValues(newValue);
  }
  onHiddenColumnChange() {
    // We use forceUpdate because the fact of hiding a column or not does not modify the internal structure of the grid (WcsGridRow).
    // Hide a column only impacts the way it is rendered but the grid-column remains in the dom and in our internal model.
    forceUpdate(this);
  }
  updateSelectionWithValues(values) {
    if (this.selectionConfig === 'single') {
      this.rows.map(r => r.selected = false);
      for (const row of this.rows) {
        if (isEqual(row.data, values)) {
          row.selected = true;
          break; // only one line can be selected
        }
      }
    }
    else if (this.selectionConfig === 'multiple') {
      this.rows.map(r => r.selected = false);
      for (const row of this.rows) {
        if (values.find(x => isEqual(x, row.data))) {
          row.selected = true;
        }
      }
    }
    this.rows = cloneDeep(this.rows);
  }
  wcsGridRowToWcsGridRowData(row) {
    return { selected: row.selected, page: row.page, data: row.data };
  }
  updateGridRows(data) {
    const rows = [];
    if (data && this.columns) {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < data.length; i++) {
        const row = {
          uuid: uuid(),
          data: data[i],
          selected: false,
          cells: []
        };
        for (const column of this.columns) {
          row.cells.push({
            content: get(data[i], column.path),
            column,
            formatter: column.formatter
          });
        }
        rows.push(row);
      }
      this.rows = rows;
      this.updatePageIndex();
    }
  }
  componentDidLoad() {
    this.columns = this.getGridColumnsFromTemplate();
    this.paginationEl = this.wcsGridPaginationId
      ? document.getElementById(this.wcsGridPaginationId)
      : this.getGridPaginationsFromTemplate()[0];
    this.updateGridRows(this.data);
    if (this.selectedItems) {
      this.updateSelectionWithValues(this.selectedItems);
    }
    this.refreshSort(true);
  }
  /**
   * Handle existing column's filters (defined before the grid is instantiated)
   * @private
   */
  refreshSort(refreshOthersColmumnsSortOrderState) {
    //fixme: why the column property can be null or undefined?
    if (this.columns) {
      const [first, ...other] = this.columns.filter(c => c.sortOrder !== 'none');
      if (first && !this.serverMode) {
        this.sortBy(first);
      }
      refreshOthersColmumnsSortOrderState && this.disableSortOrderForColumns(other);
    }
  }
  disableSortOrderForColumns(columns) {
    columns === null || columns === void 0 ? void 0 : columns.forEach(c => c.sortOrder = 'none');
  }
  getGridColumnsFromTemplate() {
    const slotted = this.el.shadowRoot.querySelector('slot[name="grid-column"]');
    return slotted.assignedElements();
  }
  getGridPaginationsFromTemplate() {
    const slotted = this.el.shadowRoot.querySelector('slot[name="grid-pagination"]');
    return slotted.assignedElements();
  }
  sortChangeEventHandler(event) {
    if (event.detail.order === 'none')
      return;
    // We keep only one active sort column
    this.disableSortOrderForColumns(this.columns.filter(c => c !== event.detail.column));
    if (this.serverMode)
      return;
    this.sortBy(event.detail.column);
    this.updatePageIndex();
  }
  /**
   * Sorts the grid rows according to the given column's configuration
   * @param colmun Column from which to extract the sorting configuration
   * @private
   */
  sortBy(colmun) {
    if (colmun.sortFn) {
      this.rows = cloneDeep(this.rows)
        .sort((a, b) => colmun.sortFn(a.data, b.data, colmun) * getSortOrderInteger(colmun.sortOrder));
    }
    else {
      this.rows = cloneDeep(this.rows)
        .sort((a, b) => {
        const path = colmun.path;
        return ((get(a.data, path) < get(b.data, path)) ? -1 : (get(a.data, path) > get(b.data, path)) ? 1 : 0) * getSortOrderInteger(colmun.sortOrder);
      });
    }
  }
  /**
   * Update the page's number of all rows
   */
  updatePageIndex() {
    if (!this.serverMode && this.paginationEl) {
      this.paginationEl.itemsCount = this.data.length;
      this.paginationEl.pageCount = Math.ceil(this.data.length / this.paginationEl.pageSize);
      if (this.paginationEl.pageCount <= 1) {
        this.paginationEl.currentPage = GridPagination.INDEX_FIRST_PAGE;
      }
      else if (this.paginationEl.pageCount > 0 && this.paginationEl.currentPage + 1 > this.paginationEl.pageCount) {
        this.paginationEl.currentPage = this.paginationEl.pageCount - 1;
      }
      const rows = cloneDeep(this.rows);
      rows.forEach((row, index) => row.page = Math.floor(index / this.paginationEl.pageSize));
      this.rows = [...rows];
    }
  }
  paginationChangeEventHandler() {
    this.onPaginationChange();
  }
  paginationChangeEventHandlerOutside(event) {
    if (this.wcsGridPaginationId && this.wcsGridPaginationId === event.target.id) {
      this.onPaginationChange();
    }
  }
  onPaginationChange() {
    if (this.serverMode)
      return;
    this.updatePageIndex();
  }
  onRowSelection(row) {
    if (this.selectionConfig === 'single') {
      this.rows.filter(r => r.uuid !== row.uuid).map(r => r.selected = false);
    }
    row.selected = !row.selected;
    if (this.selectionConfig !== 'single' || row.selected) {
      this.wcsGridSelectionChange.emit({ row: this.wcsGridRowToWcsGridRowData(row) });
    }
    this.rows = cloneDeep(this.rows);
  }
  selectAllRows() {
    const rows = this.getRowsForCurrentPage();
    const selected = !this.allRowsAreSelected();
    rows.map(r => r.selected = selected);
    this.wcsGridAllSelectionChange.emit({ rows: selected ? rows.map(row => this.wcsGridRowToWcsGridRowData(row)) : [] });
    this.rows = cloneDeep(this.rows);
  }
  allRowsAreSelected() {
    const rows = this.getRowsForCurrentPage();
    return rows.length > 0 && rows.filter(row => row.selected).length === rows.length;
  }
  getRowsForCurrentPage() {
    if (this.paginationEl) {
      return this.rows.filter(row => row.page === this.paginationEl.currentPage);
    }
    return this.rows;
  }
  renderSelectionColumn(row) {
    switch (this.selectionConfig) {
      case 'none':
        return;
      case 'single':
        return h("td", null, h("wcs-radio", { checked: row.selected, onClick: this.onRowSelection.bind(this, row) }));
      case 'multiple':
        return h("td", null, h("wcs-checkbox", { checked: row.selected, onWcsChange: this.onRowSelection.bind(this, row) }));
    }
  }
  getCellContent(row, cell) {
    if (cell.formatter) {
      return cell.formatter(h, cell.column, this.wcsGridRowToWcsGridRowData(row));
    }
    return cell.content;
  }
  totalColumnCount() {
    if (!this.columns) {
      return 0;
    }
    return this.columns.length + (this.selectionConfig === 'none' ? 0 : 1);
  }
  render() {
    var _a;
    return (h(Host, null, h("table", null, h("thead", null, this.selectionConfig === 'none' ? ''
      : h("th", { class: "wcs-grid-selection-column" }, this.selectionConfig === 'single' ? '' :
        h("wcs-checkbox", { checked: this.allRowsAreSelected(), onWcsChange: this.selectAllRows.bind(this) })), h("slot", { name: "grid-column" })), h("tbody", null, this.loading
      ? h("tr", null, h("td", { colSpan: this.totalColumnCount(), class: "loading" }, h("wcs-spinner", null)))
      : (_a = this.rows) === null || _a === void 0 ? void 0 : _a.filter(row => this.serverMode || !this.paginationEl || row.page === this.paginationEl.currentPage).map(row => this.renderRow(row)))), h("slot", { name: "grid-pagination" })));
  }
  renderRow(row) {
    var _a;
    return h("tr", { class: row.selected ? 'selected' : '' }, this.renderSelectionColumn(row), (_a = row.cells) === null || _a === void 0 ? void 0 :
      _a.map(cell => {
        if (cell.column.hidden) {
          return;
        }
        return cell.column.customCells
          ? (h("td", null, h("slot", { name: cell.column.id + '-' + row.data[this.rowIdPath] })))
          : (h("td", { part: cell.column.path + '-column' }, this.getCellContent(row, cell)));
      }));
  }
  static get is() { return "wcs-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["grid.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["grid.css"]
    };
  }
  static get properties() {
    return {
      "serverMode": {
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
          "text": "Manage sort and pagination with a backend server when set to `true`"
        },
        "attribute": "server-mode",
        "reflect": false,
        "defaultValue": "false"
      },
      "data": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Contains the data to display in the table from a js object"
        }
      },
      "loading": {
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
          "text": "Flag to display a spinner during data loading"
        },
        "attribute": "loading",
        "reflect": false
      },
      "selectionConfig": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsGridSelectionConfig",
          "resolved": "\"multiple\" | \"none\" | \"single\"",
          "references": {
            "WcsGridSelectionConfig": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Used to manage grid's row selection.  \n\"none\": no row can be selected.  \n\"multiple\": several rows can be selected.  \n\"single\": one row only can be selected."
        },
        "attribute": "selection-config",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "selectedItems": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any | any[]",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the selected items (rows)"
        },
        "attribute": "selected-items",
        "reflect": false,
        "defaultValue": "[]"
      },
      "wcsGridPaginationId": {
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
          "text": "Automatically set by the component to reference the wcs-grid-pagination HTML element by its id."
        },
        "attribute": "wcs-grid-pagination-id",
        "reflect": false
      },
      "rowIdPath": {
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
          "text": "Name of the object's key that will be used to display the cells whose `keyValue` attribute matches to the\nobject's value for this key."
        },
        "attribute": "row-id-path",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "columns": {},
      "paginationEl": {},
      "rows": {}
    };
  }
  static get events() {
    return [{
        "method": "wcsGridSelectionChange",
        "name": "wcsGridSelectionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when a row is selected or unselected"
        },
        "complexType": {
          "original": "WcsGridRowSelectedEventDetails",
          "resolved": "WcsGridRowSelectedEventDetails",
          "references": {
            "WcsGridRowSelectedEventDetails": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        }
      }, {
        "method": "wcsGridAllSelectionChange",
        "name": "wcsGridAllSelectionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when all rows are selected or unselected"
        },
        "complexType": {
          "original": "WcsGridAllRowSelectedEventDetails",
          "resolved": "WcsGridAllRowSelectedEventDetails",
          "references": {
            "WcsGridAllRowSelectedEventDetails": {
              "location": "import",
              "path": "./grid-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "onDataChange"
      }, {
        "propName": "selectedItems",
        "methodName": "onSelectedItemsPropertyChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "wcsHiddenChange",
        "method": "onHiddenColumnChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "wcsSortChange",
        "method": "sortChangeEventHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "wcsGridPaginationChange",
        "method": "paginationChangeEventHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "wcsGridPaginationChange",
        "method": "paginationChangeEventHandlerOutside",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
/**
 * Pour resize le tableau
 * https://www.brainbell.com/javascript/making-resizable-table-js.htmls
 *
 */
//# sourceMappingURL=grid.js.map
