import { h, Host } from '@stencil/core';
import { GridPaginationArrow } from './grid-pagination-arrow';
/**
 * The grid pagination is a subcomponent of `wcs-grid`, slotted in `grid-pagination` under the `<table>` element.
 */
export class GridPagination {
  constructor() {
    this.availablePageSizes = [10, 20, 50];
    this.currentPage = GridPagination.INDEX_FIRST_PAGE;
    this.pageSize = this.availablePageSizes[0];
    this.itemsCount = 0;
    this.pageCount = 1;
  }
  lastPage() {
    this.currentPage = this.pageCount - 1;
    this.emitPaginationChange();
  }
  nextPage() {
    if (this.canGoToNextPage()) {
      this.currentPage++;
      this.emitPaginationChange();
    }
  }
  canGoToNextPage() {
    return this.currentPage + 1 < this.pageCount;
  }
  previousPage() {
    if (this.canGoToPreviousPage()) {
      this.currentPage--;
      this.emitPaginationChange();
    }
  }
  canGoToPreviousPage() {
    return this.currentPage > 0;
  }
  firstPage() {
    this.currentPage = 0;
    this.emitPaginationChange();
  }
  onChangePagesize(event) {
    this.pageSize = event.detail.value;
    if (this.currentPage + 1 > this.pageSize) {
      this.currentPage = 0;
    }
    this.emitPaginationChange();
  }
  emitPaginationChange() {
    this.wcsGridPaginationChange.emit({
      pagination: {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        itemsCount: this.itemsCount,
        pageCount: this.pageCount
      }
    });
  }
  render() {
    return (h(Host, { slot: "grid-pagination" }, h("div", { class: "container" }, h("div", { class: "page-size" }, h("wcs-select", { placeholder: "El\u00E9ments par page", class: "available-page-sizes", value: this.pageSize, onWcsChange: this.onChangePagesize.bind(this) }, this.availablePageSizes.map((pageSize) => h("wcs-select-option", { value: pageSize }, pageSize))), h("span", null, "\u00A0\u00E9l\u00E9ments par page")), h("div", { class: "items-count" }, h("span", null, this.itemsCount, " \u00E9l\u00E9ments")), h("div", { class: "page-management" }, h("span", { class: "pagination-arrow", onClick: this.firstPage.bind(this) }, h(GridPaginationArrow, { active: this.canGoToPreviousPage(), order: "previous", double: true })), h("span", { class: "pagination-arrow", onClick: this.previousPage.bind(this) }, h(GridPaginationArrow, { active: this.canGoToPreviousPage(), order: "previous" })), h("span", null, this.currentPage + 1, " / ", this.pageCount), h("span", { class: "pagination-arrow", onClick: this.nextPage.bind(this) }, h(GridPaginationArrow, { active: this.canGoToNextPage(), order: "next" })), h("span", { class: "pagination-arrow", onClick: this.lastPage.bind(this) }, h(GridPaginationArrow, { active: this.canGoToNextPage(), order: "next", double: true }))))));
  }
  static get is() { return "wcs-grid-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["grid-pagination.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["grid-pagination.css"]
    };
  }
  static get properties() {
    return {
      "availablePageSizes": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "number[]",
          "resolved": "number[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the available page sizes in the pagination dropdown on the left."
        },
        "defaultValue": "[10, 20, 50]"
      },
      "currentPage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The current page of the pagination. First page starts at index 0."
        },
        "attribute": "current-page",
        "reflect": false,
        "defaultValue": "GridPagination.INDEX_FIRST_PAGE"
      },
      "pageSize": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Maximum number of elements shown per page.  \nDefault is the first value of `availablePageSizes`."
        },
        "attribute": "page-size",
        "reflect": false,
        "defaultValue": "this.availablePageSizes[0]"
      },
      "itemsCount": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Total elements in the grid.  \n- **Grid in `Server mode`** : You have to set `itemsCount` = your total data length.  \n- **Grid not in Server mode** : Do not set it manually : itemsCount is set and updated every pagination refresh."
        },
        "attribute": "items-count",
        "reflect": false,
        "defaultValue": "0"
      },
      "pageCount": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Max number of pages.  \n- **Grid in `Server mode`** : You have to set `pageCount` = `itemsCount` divided by `pageSize`.  \n- **Grid not in Server mode** : Do not set it manually : pageCount is set and updated every pagination refresh."
        },
        "attribute": "page-count",
        "reflect": false,
        "defaultValue": "1"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsGridPaginationChange",
        "name": "wcsGridPaginationChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the pagination changes."
        },
        "complexType": {
          "original": "WcsGridPaginationChangeEventDetails",
          "resolved": "WcsGridPaginationChangeEventDetails",
          "references": {
            "WcsGridPaginationChangeEventDetails": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        }
      }];
  }
}
GridPagination.INDEX_FIRST_PAGE = 0;
//# sourceMappingURL=grid-pagination.js.map
