import { h, Host } from '@stencil/core';
import { isEndKey, isHomeKey, isKeydown, isKeyup } from '../../utils/helpers';
import { isWcsCounterSize, WcsCounterSizeValues } from './counter-interface';
const ANIMATION_DURATION = 0.175; // seconds
/**
 * Counter component, meant to be used for small range of values (e.g : 0 - 5).<br>
 * For larger or specific ranges, please use [wcs-input (type number)](.?path=/docs/components-input--documentation)
 */
export class Counter {
  constructor() {
    this.animateRunning = false;
    this.getCounterContainer = () => {
      return Array.from(this.el.shadowRoot.children)
        .find(el => el.tagName === 'DIV');
    };
    this.handleDecrement = () => {
      if (this.min === undefined || this.value > this.min) {
        // we set animateRunning here to prevent the watch method on value prop from affecting the displayed value
        // before the animation runs.
        this.animateRunning = true;
        this.value -= this.step;
        this.notifyChange();
        this.animate('up');
      }
    };
    this.handleIncrement = () => {
      if (this.max === undefined || this.value < this.max) {
        // we set animateRunning here to prevent the watch method on value prop from affecting the displayed value
        // before the animation runs.
        this.animateRunning = true;
        this.value += this.step;
        this.notifyChange();
        this.animate('down');
      }
    };
    this.animate = (direction) => {
      // In case someone call animate function, we want ensured that animateRunning is set to true to prevent other 
      // method to mutate the displayedValue.
      this.animateRunning = true;
      const counterContainer = this.getCounterContainer();
      const outliers = Array.from(counterContainer.children)
        .filter((span) => span.classList.contains('outliers'));
      counterContainer.classList.add('animate-' + direction);
      outliers.forEach((span) => {
        span.classList.remove('hidden');
      });
      setTimeout(() => {
        counterContainer.classList.remove('animate-' + direction);
        outliers.forEach((span) => {
          span.classList.add('hidden');
        });
        this.displayedValue = this.value;
        this.animateRunning = false;
      }, 1000 * ANIMATION_DURATION - 20);
    };
    this.size = 'm';
    this.label = undefined;
    this.min = undefined;
    this.max = undefined;
    this.step = 1;
    this.value = undefined;
    this.displayedValue = undefined;
  }
  componentWillLoad() {
    this.handleValueChange();
    if (!isWcsCounterSize(this.size)) {
      console.error(`Invalid size value for wcs-counter : "${this.size}". Must be one of "${WcsCounterSizeValues.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
  }
  /**
   * Current value change => handle event and interval
   */
  valueChange(newVal, oldVal) {
    if (oldVal === newVal)
      return;
    this.handleValueChange();
  }
  handleValueChange() {
    this.setMinimumIfValueIsUndefinedOrNull();
    this.ensureValueIsNotOutOfMinMax();
    this.updateDisplayValueIfNoAnimationRunning();
  }
  updateDisplayValueIfNoAnimationRunning() {
    if (!this.animateRunning) {
      this.displayedValue = this.value;
    }
  }
  ensureValueIsNotOutOfMinMax() {
    if (this.max !== undefined && this.value > this.max) {
      this.value = this.max;
    }
    else if (this.min !== undefined && this.value < this.min) {
      this.value = this.min;
    }
  }
  setMinimumIfValueIsUndefinedOrNull() {
    var _a;
    if (this.value === undefined || this.value === null) {
      this.value = (_a = this.min) !== null && _a !== void 0 ? _a : 0;
    }
  }
  onKeyDown(_event) {
    if (isKeyup(_event)) {
      _event.preventDefault();
      this.handleIncrement();
    }
    if (isKeydown(_event)) {
      _event.preventDefault();
      this.handleDecrement();
    }
    if (isHomeKey(_event)) {
      _event.preventDefault();
      if (this.min != null) {
        this.value = this.min;
        this.displayedValue = this.value;
        this.notifyChange();
      }
    }
    if (isEndKey(_event)) {
      _event.preventDefault();
      if (this.max != null) {
        this.value = this.max;
        this.displayedValue = this.value;
        this.notifyChange();
      }
    }
  }
  notifyChange() {
    this.wcsChange.emit({
      value: this.value
    });
  }
  render() {
    return (h(Host, null, h("wcs-button", { class: "wcs-primary", shape: "round", size: "s", tabindex: -1, onClick: () => this.handleDecrement(), onBlur: (event) => this.wcsBlur.emit(event), disabled: this.value === this.min }, h("wcs-mat-icon", { icon: "remove", size: "s" })), h("div", { class: "counter-container" }, h("span", { id: "outlier-down", class: "outliers hidden", "aria-hidden": "true" }, this.displayedValue - this.step), h("span", { tabindex: "0", role: "spinbutton", class: "current-value", onBlur: (event) => this.wcsBlur.emit(event), onKeyDown: (event) => this.onKeyDown(event), "aria-valuenow": this.value, "aria-valuetext": this.value, "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-label": this.label }, this.displayedValue), h("span", { id: "outlier-up", class: "outliers hidden", "aria-hidden": "true" }, this.displayedValue + this.step)), h("wcs-button", { class: "wcs-primary", shape: "round", size: "s", tabindex: -1, onClick: () => this.handleIncrement(), onBlur: (event) => this.wcsBlur.emit(event), disabled: this.value === this.max }, h("wcs-mat-icon", { icon: "add", size: "s" }))));
  }
  static get is() { return "wcs-counter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["counter.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["counter.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsCounterSize",
          "resolved": "\"l\" | \"m\"",
          "references": {
            "WcsCounterSize": {
              "location": "import",
              "path": "./counter-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the size (height) of the counter."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The label of the counter.<br/>\ne.g. Number of passengers, train carriages, railroad tracks..."
        },
        "attribute": "label",
        "reflect": false
      },
      "min": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The minimum value of the counter.\nIf the value of the min attribute isn't set, then the element has no minimum value."
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The maximum value of the counter.\nIf the value of the max attribute isn't set, then the element has no maximum value."
        },
        "attribute": "max",
        "reflect": false
      },
      "step": {
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
          "text": "Defines by how much the counter will be incremented or decremented."
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The current value of the counter."
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "displayedValue": {}
    };
  }
  static get events() {
    return [{
        "method": "wcsChange",
        "name": "wcsChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value of the counter has changed."
        },
        "complexType": {
          "original": "CounterChangeEventDetail",
          "resolved": "CounterChangeEventDetail",
          "references": {
            "CounterChangeEventDetail": {
              "location": "import",
              "path": "./counter-interface"
            }
          }
        }
      }, {
        "method": "wcsBlur",
        "name": "wcsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the counter loses focus."
        },
        "complexType": {
          "original": "FocusEvent",
          "resolved": "FocusEvent",
          "references": {
            "FocusEvent": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueChange"
      }];
  }
}
//# sourceMappingURL=counter.js.map
