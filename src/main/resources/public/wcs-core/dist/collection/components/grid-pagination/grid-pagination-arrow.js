import { h } from '@stencil/core';
export const GridPaginationArrow = ({ active, order, double = false }) => (h("svg", { style: { marginLeft: 'auto', cursor: 'pointer' }, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "20", viewBox: "0 0 24 20" }, h("style", { type: "text/css" }, `
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
        `), h("g", { fill: "none", class: order + ' arrow-group' }, h("path", { class: (active ? 'active' : '') + ' arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }), h("path", { d: "M0 0h24v24H0z", fill: "none" })), double ?
  h("g", { fill: "none", class: order + ' arrow-group' }, h("path", { class: (active ? 'active' : '') + ' arrow second-arrow', d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }), h("path", { d: "M0 0h24v24H0z", fill: "none" }))
  : ''));
//# sourceMappingURL=grid-pagination-arrow.js.map
