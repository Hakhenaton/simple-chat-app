import { h } from '@stencil/core';
export const SelectChips = ({ disabled, option, onRemove }) => {
  const style = {};
  if (option.chipColor) {
    style['color'] = option.chipColor;
  }
  if (option.chipBackgroundColor) {
    style['background-color'] = option.chipBackgroundColor;
  }
  return (h("label", { class: "wcs-select-chip", style: style, onClick: (e) => e.stopImmediatePropagation() }, h("div", null, option.displayText), disabled ?
    null :
    h("div", { onClick: () => onRemove(option) }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "12", viewBox: "0 0 20 12", class: "chip" }, h("path", { d: "M2,0 6,4 10,0 12,2 8,6 12,10 10,12 6,8 2,12 0,10 4,6 0,2 2,0", fill: option.chipColor, transform: "translate(8 0)" })))));
};
//# sourceMappingURL=select-chips.js.map
