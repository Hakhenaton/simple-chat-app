'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');

const WcsCounterSizeValues = ['m', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
function isWcsCounterSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsInputSizeValues
  return WcsCounterSizeValues.includes(size);
}

const counterCss = "@keyframes spin-animation-up{0%{transform:translateY(0);transform-origin:center;opacity:1}50%{opacity:0.5}100%{transform:translateY(30px);transform-origin:center;opacity:1}}@keyframes spin-animation-down{0%{transform:translateY(0);transform-origin:center;opacity:1}50%{opacity:0.5}100%{transform:translateY(-30px);transform-origin:center;opacity:1}}:host{box-sizing:border-box;height:var(--wcs-counter-host-height);--wcs-input-icon-color:var(--wcs-text-medium);--wcs-internal-input-border-radius:calc(var(--wcs-border-radius) * 10);--wcs-internal-input-border-width:2px;font-family:var(--wcs-font-sans-serif);font-size:var(--wcs-counter-font-size);font-weight:bold;display:flex;align-items:center;padding:var(--wcs-counter-host-padding);width:fit-content;overflow:hidden;border-radius:var(--wcs-internal-input-border-radius);background-color:var(--wcs-light);border:var(--wcs-internal-input-border-width) solid var(--wcs-light);background-clip:padding-box}:host .counter-container{height:var(--wcs-counter-host-height);display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 calc(2 * var(--wcs-base-margin));position:relative}:host .outliers{position:absolute}:host #outlier-down{top:calc(var(--wcs-counter-host-height) / 2 * -1)}:host #outlier-up{bottom:calc(var(--wcs-counter-host-height) / 2 * -1)}:host span.current-value:focus-visible{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:0.1rem}:host .animate-up{animation:spin-animation-up 0.175s ease-in-out}:host .animate-down{animation:spin-animation-down 0.175s ease-in-out}:host .hidden{opacity:0}:host([size=m]){--wcs-counter-host-padding:4px;--wcs-counter-host-height:var(--wcs-size-m);--wcs-counter-font-size:1rem}:host([size=l]){--wcs-counter-host-padding:8px;--wcs-counter-host-height:var(--wcs-size-l);--wcs-counter-font-size:1.0625rem}";

const ANIMATION_DURATION = 0.175; // seconds
const Counter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsChange = index.createEvent(this, "wcsChange", 7);
    this.wcsBlur = index.createEvent(this, "wcsBlur", 7);
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
    if (helpers.isKeyup(_event)) {
      _event.preventDefault();
      this.handleIncrement();
    }
    if (helpers.isKeydown(_event)) {
      _event.preventDefault();
      this.handleDecrement();
    }
    if (helpers.isHomeKey(_event)) {
      _event.preventDefault();
      if (this.min != null) {
        this.value = this.min;
        this.displayedValue = this.value;
        this.notifyChange();
      }
    }
    if (helpers.isEndKey(_event)) {
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
    return (index.h(index.Host, null, index.h("wcs-button", { class: "wcs-primary", shape: "round", size: "s", tabindex: -1, onClick: () => this.handleDecrement(), onBlur: (event) => this.wcsBlur.emit(event), disabled: this.value === this.min }, index.h("wcs-mat-icon", { icon: "remove", size: "s" })), index.h("div", { class: "counter-container" }, index.h("span", { id: "outlier-down", class: "outliers hidden", "aria-hidden": "true" }, this.displayedValue - this.step), index.h("span", { tabindex: "0", role: "spinbutton", class: "current-value", onBlur: (event) => this.wcsBlur.emit(event), onKeyDown: (event) => this.onKeyDown(event), "aria-valuenow": this.value, "aria-valuetext": this.value, "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-label": this.label }, this.displayedValue), index.h("span", { id: "outlier-up", class: "outliers hidden", "aria-hidden": "true" }, this.displayedValue + this.step)), index.h("wcs-button", { class: "wcs-primary", shape: "round", size: "s", tabindex: -1, onClick: () => this.handleIncrement(), onBlur: (event) => this.wcsBlur.emit(event), disabled: this.value === this.max }, index.h("wcs-mat-icon", { icon: "add", size: "s" }))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
};
Counter.style = counterCss;

exports.wcs_counter = Counter;

//# sourceMappingURL=wcs-counter.cjs.entry.js.map