import { h, r as registerInstance, c as createEvent, H as Host, g as getElement } from './index-dc4d96d4.js';

const HorizontalStep = ({ step, checkOnComplete, complete, passed, active, first, disable, onClick }) => {
  return (h("div", { class: "graphic-step", "data-first": first },
    first ? null : (h("wcs-progress-bar", { value: passed ? 100 : 0 })),
    h("wcs-button", { style: { 'backgroundColor': 'white' }, shape: "round", onClick: _ => onClick(step), mode: (active || complete) && !step.disable ? 'plain' : 'stroked', disabled: disable }, getButtonContent(step.button, checkOnComplete, complete, active))));
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

const horizontalStepperCss = ":host{display:block}:host .steps{display:flex;flex-direction:row;flex:1}:host .graphic-step{display:flex;flex-direction:row;flex:1;align-items:center}:host .graphic-step[data-first]{flex:0}:host wcs-progress-bar{--wcs-internal-progress-bar-border-radius:0;flex:1;margin:0 -1px}:host .label-container{justify-content:space-between;display:flex;flex-direction:row;margin-top:var(--wcs-base-margin)}:host .label-container>*{width:100%;text-align:center;flex:1;color:var(--wcs-text-medium);font-weight:500}:host .label-container>*[data-disable]{color:var(--wcs-text-light)}:host .label-container>*[data-current]{color:var(--wcs-primary)}:host .label-container>div[data-first]{margin-left:20px;text-align:left;flex:0.5}:host .label-container>div[data-first]>span{margin-left:-20px}:host .label-container>div[data-last]{margin-right:20px;text-align:right;flex:0.5}:host .label-container>div[data-last]>span{margin-right:-20px}";

const HorizontalStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsHorizontalStepClick = createEvent(this, "wcsHorizontalStepClick", 7);
    this.currentStep = 0;
    this.steps = undefined;
    this.mode = 'nonLinear';
    this.checkOnComplete = undefined;
    this.internalCurrentStep = undefined;
  }
  componentWillLoad() {
    this.internalCurrentStep = this.currentStep;
    if (this.steps.length < 1) {
      throw new Error('You must add at least one step');
    }
  }
  onCurrentStepChange(newValue, oldValue) {
    //Check if the function is called before the component has finished its initialization in which case we do nothing
    if (this.internalCurrentStep !== undefined) {
      const stepInterval = Math.abs(oldValue - newValue);
      this.el.style.setProperty('--wcs-progress-bar-animation-duration', 375 / stepInterval + 'ms');
      if (newValue !== oldValue) {
        for (let i = 0; i < stepInterval; i++) {
          setTimeout(() => {
            this.internalCurrentStep -= (oldValue - newValue) > 0 ? 1 : -1;
            if (i === stepInterval - 1) {
              this.el.style.removeProperty('--wcs-progress-bar-animation-duration');
            }
          }, (i * (375 / stepInterval)));
        }
      }
    }
  }
  async previous() {
    this.navigateToIndex(this.internalCurrentStep - 1, 'backward');
  }
  async next() {
    this.navigateToIndex(this.internalCurrentStep + 1, 'forward');
  }
  navigateToIndex(index, direction) {
    var _a, _b;
    if (index >= 0 && index <= this.steps.length - 1) {
      if (((_a = this.steps[index]) === null || _a === void 0 ? void 0 : _a.complete) || ((_b = this.steps[index]) === null || _b === void 0 ? void 0 : _b.disable)) {
        this.navigateToIndex(index + (direction === 'forward' ? 1 : -1), direction);
      }
      else {
        this.currentStep = index;
      }
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "steps" }, this.steps.map((step, index) => (h(HorizontalStep, { step: step, passed: index <= this.internalCurrentStep, checkOnComplete: this.checkOnComplete, complete: this.isComplete(step, index), active: index === this.internalCurrentStep, first: index === 0, disable: this.isDisable(step, index), onClick: step => this.wcsHorizontalStepClick.emit({ step, index }) })))), this.renderLabels()));
  }
  isComplete(step, index) {
    return index <= this.internalCurrentStep || step.complete;
  }
  renderLabels() {
    if (this.steps.map(s => s.text).every(s => !s)) {
      return null;
    }
    else {
      return h("div", { class: "label-container" }, this.steps.map((step, index) => (h("div", { "data-first": index === 0, "data-current": index === this.internalCurrentStep && !step.disable, "data-disable": this.isDisable(step, index), "data-last": index === this.steps.length - 1 }, h("span", null, step.text)))));
    }
  }
  isDisable(step, index) {
    return step.disable || (this.mode === 'linear' && (!this.isNextPossibleStep(index) && this.internalCurrentStep < index));
  }
  isNextPossibleStep(index) {
    var _a;
    if (index === 0)
      return true;
    if (((_a = this.steps[index - 1]) === null || _a === void 0 ? void 0 : _a.disable) || this.previousStepIsCompleteAndNotActive(index))
      return this.isNextPossibleStep(index - 1);
    return this.internalCurrentStep === index - 1;
  }
  previousStepIsCompleteAndNotActive(index) {
    var _a;
    return ((_a = this.steps[index - 1]) === null || _a === void 0 ? void 0 : _a.complete) && index - 1 !== this.internalCurrentStep;
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "currentStep": ["onCurrentStepChange"]
  }; }
};
HorizontalStepper.style = horizontalStepperCss;

export { HorizontalStepper as wcs_horizontal_stepper };

//# sourceMappingURL=wcs-horizontal-stepper.entry.js.map