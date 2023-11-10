import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-dc4d96d4.js';
import { j as debounceEvent, k as inheritAttributes, l as findItemLabel } from './helpers-1f7170dd.js';

const WcsInputSizeValues = ['s', 'm', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
function isWcsInputSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsInputSizeValues
  return WcsInputSizeValues.includes(size);
}

const inputCss = ":host{--wcs-input-icon-color:var(--wcs-text-medium);--wcs-internal-input-border-radius-left:var(--wcs-input-border-radius-left, var(--wcs-border-radius));--wcs-internal-input-border-radius-right:var(--wcs-input-border-radius-right, var(--wcs-border-radius));--wcs-internal-input-border-width:2px;display:flex;width:100%;height:var(--wcs-input-host-height);box-sizing:border-box;border-radius:var(--wcs-internal-input-border-radius-left) var(--wcs-internal-input-border-radius-right) var(--wcs-internal-input-border-radius-right) var(--wcs-internal-input-border-radius-left);background-color:var(--wcs-light);border:var(--wcs-internal-input-border-width) solid var(--wcs-light);background-clip:padding-box}:host ::placeholder{font-weight:400;font-style:italic}:host input{overflow:hidden;min-height:var(--wcs-size-xs);width:100%;background-color:transparent;font-family:var(--wcs-font-sans-serif);color:var(--wcs-primary);font-weight:var(--wcs-font-weight-form-value) !important;border:none;padding:0 calc(var(--wcs-padding) - var(--wcs-internal-input-border-width));font-size:var(--wcs-input-font-size, 1rem);line-height:1.5}:host input:focus{box-shadow:none;outline:0}:host wcs-mat-icon{position:relative;margin-left:8px;margin-right:-8px}:host .toggle_password{cursor:pointer;margin-left:-8px;margin-right:8px}:host .prefix,:host .suffix{color:var(--wcs-white);display:flex;white-space:nowrap;align-items:center;font-size:var(--wcs-input-font-size, 1rem);padding:0 calc(var(--wcs-padding) / 2);font-weight:var(--wcs-font-weight-form-value) !important;background-color:var(--wcs-text-disabled)}:host .prefix{border-radius:var(--wcs-internal-input-border-radius-left) 0 0 var(--wcs-internal-input-border-radius-left);margin:calc(-1 * var(--wcs-internal-input-border-width)) 0 calc(-1 * var(--wcs-internal-input-border-width)) calc(-1 * var(--wcs-internal-input-border-width));border-left:solid var(--wcs-internal-input-border-width) transparent;border-top:solid var(--wcs-internal-input-border-width) transparent;border-bottom:solid var(--wcs-internal-input-border-width) transparent}:host .suffix{border-radius:0 var(--wcs-internal-input-border-radius-right) var(--wcs-internal-input-border-radius-right) 0;margin:calc(-1 * var(--wcs-internal-input-border-width)) calc(-1 * var(--wcs-internal-input-border-width)) calc(-1 * var(--wcs-internal-input-border-width)) 0px;border-right:solid var(--wcs-internal-input-border-width) transparent;border-top:solid var(--wcs-internal-input-border-width) transparent;border-bottom:solid var(--wcs-internal-input-border-width) transparent}:host([size=l]){--wcs-input-host-height:var(--wcs-size-l);--wcs-input-font-size:1.0625rem}:host([size=m]){--wcs-input-host-height:var(--wcs-size-m);--wcs-input-font-size:1rem}:host([size=s]){--wcs-input-host-height:var(--wcs-size-s);--wcs-input-font-size:0.9375rem}:host([state=error]){border-color:var(--wcs-red) !important}:host([data-has-prefix]) input{padding-left:calc(var(--wcs-padding) / 2)}:host([data-has-suffix]) input{padding-left:calc(var(--wcs-padding) / 2)}:host([disabled]) input{color:var(--wcs-text-disabled);cursor:not-allowed}:host([disabled]) .prefix,:host([disabled]) .suffix{color:var(--wcs-light)}:host(:focus-within){border:dashed var(--wcs-internal-input-border-width) var(--wcs-primary)}:host(:focus-within) .prefix{border-left:dashed var(--wcs-internal-input-border-width) var(--wcs-primary);border-top:dashed var(--wcs-internal-input-border-width) var(--wcs-primary);border-bottom:dashed var(--wcs-internal-input-border-width) var(--wcs-primary)}:host(:focus-within) .suffix{border-right:dashed var(--wcs-internal-input-border-width) var(--wcs-primary);border-top:dashed var(--wcs-internal-input-border-width) var(--wcs-primary);border-bottom:dashed var(--wcs-internal-input-border-width) var(--wcs-primary)}:host(:focus-within) wcs-mat-icon{color:var(--wcs-primary)}";

const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsInput = createEvent(this, "wcsInput", 7);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.inputId = `wcs-input-${inputIds++}`;
    this.didBlurAfterEdit = false;
    this.inheritedAttributes = {};
    this.iconPassword = "visibility";
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.wcsInput.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.focusChanged();
      if (this.fireFocusEvents) {
        this.wcsBlur.emit(ev);
      }
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.focusChanged();
      if (this.fireFocusEvents) {
        this.wcsFocus.emit(ev);
      }
    };
    this.onKeydown = (ev) => {
      if (this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
    this.fireFocusEvents = true;
    this.hasFocus = false;
    this.passwordReveal = false;
    this.accept = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.clearInput = false;
    this.clearOnEdit = undefined;
    this.debounce = 0;
    this.prefixLabel = undefined;
    this.suffixLabel = undefined;
    this.disabled = false;
    this.enterkeyhint = undefined;
    this.size = 'm';
    this.icon = undefined;
    this.inputmode = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.multiple = undefined;
    this.name = this.inputId;
    this.pattern = undefined;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.state = 'initial';
    this.step = undefined;
    this.type = 'text';
    this.value = '';
  }
  debounceChanged() {
    this.wcsChange = debounceEvent(this.wcsChange, this.debounce);
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    var _a;
    this.wcsChange.emit({ value: (_a = this.value) === null || _a === void 0 ? void 0 : _a.toString() });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
    if (!isWcsInputSize(this.size)) {
      console.error(`Invalid size value for wcs-input : "${this.size}". Must be one of "${WcsInputSizeValues.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
  }
  connectedCallback() {
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('wcsInputDidLoad', {
        detail: this.el
      }));
    }
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('wcsInputDidUnload', {
        detail: this.el
      }));
    }
  }
  /**
   * @deprecated use the native focus method instead
   *
   * Sets focus on the native `input` in `wcs-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `wcs-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return (clearOnEdit === undefined)
      ? type === 'password'
      : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  focusChanged() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  passwordRevealIconClick() {
    this.passwordReveal = !this.passwordReveal;
  }
  onPasswordRevealChange() {
    this.iconPassword = this.passwordReveal ? 'visibility_off' : 'visibility';
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, "data-has-prefix": !!this.prefixLabel, "data-has-suffix": !!this.suffixLabel }, this.prefixLabel ? (h("span", { class: "prefix", part: "prefix" }, this.prefixLabel)) : null, this.icon ? (h("wcs-mat-icon", { icon: this.icon, size: "m" })) : null, h("input", Object.assign({ class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": label ? labelId : null, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, type: this.passwordReveal ? 'text' : this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }, this.inheritedAttributes)), this.type === "password" ? (h("wcs-mat-icon", { class: "toggle_password", icon: this.iconPassword, size: "m", onClick: () => this.passwordRevealIconClick() })) : null, this.suffixLabel ? (h("span", { class: "suffix", part: "suffix" }, this.suffixLabel)) : null));
  }
  static get delegatesFocus() { return true; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"],
    "passwordReveal": ["onPasswordRevealChange"]
  }; }
};
let inputIds = 0;
Input.style = inputCss;

export { Input as wcs_input };

//# sourceMappingURL=wcs-input.entry.js.map