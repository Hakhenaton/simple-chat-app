import { h } from '@stencil/core';
export const HorizontalStep = ({ step, checkOnComplete, complete, passed, active, first, disable, onClick }) => {
  return (h("div", { class: "graphic-step", "data-first": first }, first ? null : (h("wcs-progress-bar", { value: passed ? 100 : 0 })), h("wcs-button", { style: { 'backgroundColor': 'white' }, shape: "round", onClick: _ => onClick(step), mode: (active || complete) && !step.disable ? 'plain' : 'stroked', disabled: disable }, getButtonContent(step.button, checkOnComplete, complete, active))));
};
const getButtonContent = (stepButton, checkOnComplete, complete, active) => {
  if (checkOnComplete && complete && !active) {
    return (h("wcs-mat-icon", { size: "m", icon: "done", family: "outlined" }));
  }
  switch (stepButton.kind) {
    case 'Icon':
      return (h("wcs-mat-icon", { size: "m", icon: stepButton.iconName, family: stepButton.family ? stepButton.family : 'outlined' }));
    case 'Text':
      return (stepButton.text);
  }
};
//# sourceMappingURL=horizontal-step.js.map
