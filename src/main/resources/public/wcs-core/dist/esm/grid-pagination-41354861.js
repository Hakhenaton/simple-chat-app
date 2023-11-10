import { h, r as registerInstance, c as createEvent, H as Host } from './index-dc4d96d4.js';

const GridPaginationArrow = ({ active, order, double = false }) => (h("svg", { style: { marginLeft: 'auto', cursor: 'pointer' }, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "20", viewBox: "0 0 24 20" },
  h("style", { type: "text/css" }, `
            .arrow-group {
                transform-origin: 50% 51%;
                transition: transform 175ms ease-in-out;
            }
            .arrow {
                transition: fill 175ms ease-in-out;
                fill: var(--wcs-text-light);
            }
            .second-arrow {
                transform: translateY(-8px);
            }
            .next {
                transform: rotate(90deg);
            }
            .previous {
                transform: rotate(-90deg);
            }
            .active {
                fill: var(--wcs-primary);
            }
        `),
  h("g", { fill: "none", class: order + ' arrow-group' },
    h("path", { class: (active ? 'active' : '') + ' arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
    h("path", { d: "M0 0h24v24H0z", fill: "none" })),
  double ?
    h("g", { fill: "none", class: order + ' arrow-group' },
      h("path", { class: (active ? 'active' : '') + ' arrow second-arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
      h("path", { d: "M0 0h24v24H0z", fill: "none" }))
    : ''));

const gridPaginationCss = ":host{display:block;border-style:solid none none;border-width:1px;border-color:var(--wcs-text-light)}.container{display:grid;grid-template-columns:auto auto auto;justify-content:space-between;color:var(--wcs-text-medium)}.available-page-sizes{width:auto}.page-management,.page-size,.items-count{display:flex;align-items:center}.pagination-arrow{display:flex}";

const GridPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsGridPaginationChange = createEvent(this, "wcsGridPaginationChange", 7);
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
};
GridPagination.INDEX_FIRST_PAGE = 0;
GridPagination.style = gridPaginationCss;

export { GridPagination as G };

//# sourceMappingURL=grid-pagination-41354861.js.map