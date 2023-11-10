'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const GridSortArrow = ({ state }) => (index.h("svg", { style: { marginLeft: 'auto' }, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "20", viewBox: "0 0 24 20" },
  index.h("style", { type: "text/css" }, `
            .arrow-group {
                transform-origin: 50% 51%;
                transition: transform 175ms ease-in-out;
            }
            .arrow{
                transition: fill 175ms ease-in-out;
                fill: var(--wcs-text-light);
            }
            .asc {
                transform: scaleY(1) translateY(-6px);
            }
            .desc {
                transform: scaleY(-1) translateY(-6px);
            }
            .active {
                fill: var(--wcs-primary);
            }

        `),
  index.h("g", { fill: "none", class: 'asc arrow-group' },
    index.h("path", { class: (state === 'asc' ? 'active' : '') + ' arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
    index.h("path", { d: "M0 0h24v24H0z", fill: "none" })),
  index.h("g", { fill: "none", class: 'desc arrow-group' },
    index.h("path", { class: (state === 'desc' ? 'active' : '') + ' arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
    index.h("path", { d: "M0 0h24v24H0z", fill: "none" }))));

const gridColumnCss = ":host{--wcs-grid-column-border-left:solid 1px var(--wcs-text-light);display:contents}:host th{color:var(--wcs-gray-dark);background-color:var(--wcs-light);border-left:var(--wcs-grid-column-border-left);padding:calc(var(--wcs-padding) / 2) var(--wcs-padding);text-align:left}:host th .grid-column-th-content{display:inline-flex;flex-direction:row}:host th .grid-column-th-content span{user-select:none}:host .pointer{cursor:pointer}:host([sort-order=asc]) img{transform:scaleY(1)}:host([sort-order=desc]) img{transform:scaleY(-1)}:host([sort-order=none]) img{display:none}:host([sort-order=none]) th:hover img{display:inline-block}:host([hidden]){display:none !important}";

const GridColumn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsSortChange = index.createEvent(this, "wcsSortChange", 7);
    this.wcsHiddenChange = index.createEvent(this, "wcsHiddenChange", 7);
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
    return (index.h(index.Host, { onClick: this.onSortClick.bind(this), slot: "grid-column" }, index.h("th", { style: { width: this.width }, class: this.sort ? 'pointer' : '' }, index.h("div", { class: "grid-column-th-content" }, index.h("span", null, this.name), this.sort ? index.h(GridSortArrow, { state: this.sortOrder }) : ''))));
  }
  onSortClick() {
    // @Watch on sortOrder property will trigger wcsSortChange event
    this.sortOrder = this.sortOrder === 'none' || this.sortOrder === 'desc' ? 'asc' : 'desc';
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "hidden": ["parseMyObjectProp"],
    "sortOrder": ["sortOrderChange"]
  }; }
};
GridColumn.style = gridColumnCss;

exports.wcs_grid_column = GridColumn;

//# sourceMappingURL=wcs-grid-column.cjs.entry.js.map