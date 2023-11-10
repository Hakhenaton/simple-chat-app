import { h, Host } from '@stencil/core';
import { HorizontalStep } from './horizontal-step';
export class HorizontalStepper {
  constructor() {
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
  static get is() { return "wcs-horizontal-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["horizontal-stepper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["horizontal-stepper.css"]
    };
  }
  static get properties() {
    return {
      "currentStep": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "index of the active step. The index corresponds to the index of the step in the 'steps' list"
        },
        "attribute": "current-step",
        "reflect": false,
        "defaultValue": "0"
      },
      "steps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "HorizontalStepConfig[]",
          "resolved": "HorizontalStepConfig[]",
          "references": {
            "HorizontalStepConfig": {
              "location": "import",
              "path": "./horizontal-stepper-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "steps to display"
        }
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "HorizontalStepperMode",
          "resolved": "\"linear\" | \"nonLinear\"",
          "references": {
            "HorizontalStepperMode": {
              "location": "import",
              "path": "./horizontal-stepper-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies if the stepper is in linear mode (the user can only click on the next step)\nor non-linear (the user can click on any step)"
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'nonLinear'"
      },
      "checkOnComplete": {
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
          "text": "Specifies whether a check should be displayed when a step is passed."
        },
        "attribute": "check-on-complete",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "internalCurrentStep": {}
    };
  }
  static get events() {
    return [{
        "method": "wcsHorizontalStepClick",
        "name": "wcsHorizontalStepClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when the user selects a new step."
        },
        "complexType": {
          "original": "HorizontalStepClickEvent",
          "resolved": "HorizontalStepClickEvent",
          "references": {
            "HorizontalStepClickEvent": {
              "location": "import",
              "path": "./horizontal-stepper-interface"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "previous": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "next": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "currentStep",
        "methodName": "onCurrentStepChange"
      }];
  }
}
//# sourceMappingURL=horizontal-stepper.js.map
