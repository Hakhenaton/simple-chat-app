'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');

const textareaCss = ":host{--wcs-textarea-icon-color:var(--wcs-text-medium);--wcs-internal-textarea-border-radius-left:var(--wcs-textarea-border-radius-left, var(--wcs-border-radius));--wcs-internal-textarea-border-radius-right:var(--wcs-textarea-border-radius-right, var(--wcs-border-radius));--wcs-internal-textarea-border-width:2px;--wcs-textarea-max-height:unset;display:flex;flex-direction:row;width:100%;border-radius:var(--wcs-internal-textarea-border-radius-left) var(--wcs-internal-textarea-border-radius-right) var(--wcs-internal-textarea-border-radius-right) var(--wcs-internal-textarea-border-radius-left);background-color:var(--wcs-light);border:var(--wcs-internal-textarea-border-width) solid var(--wcs-light);background-clip:padding-box}:host ::placeholder{font-weight:400;font-style:italic}:host textarea{overflow:auto;flex:1;width:100%;box-sizing:border-box;min-height:var(--wcs-size-m);max-height:var(--wcs-textarea-max-height);background-color:transparent;font-family:var(--wcs-font-sans-serif);color:var(--wcs-primary);font-weight:var(--wcs-font-weight-form-value) !important;border:none;padding:calc(var(--wcs-padding) / 2 - var(--wcs-internal-textarea-border-width) / 2) calc(var(--wcs-padding) - var(--wcs-internal-textarea-border-width));font-size:1rem;line-height:1.5}:host textarea:focus{box-shadow:none;outline:0}:host wcs-mat-icon{position:relative;margin-top:7px;margin-left:8px;margin-right:-8px}:host([disabled]) textarea{color:var(--wcs-text-disabled);cursor:not-allowed}:host([state=error]){border-color:var(--wcs-red) !important}:host(:focus-within){border:dashed var(--wcs-internal-textarea-border-width) var(--wcs-primary)}:host(:focus-within) wcs-mat-icon{color:var(--wcs-primary)}";

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsChange = index.createEvent(this, "wcsChange", 7);
    this.wcsInput = index.createEvent(this, "wcsInput", 7);
    this.wcsBlur = index.createEvent(this, "wcsBlur", 7);
    this.wcsFocus = index.createEvent(this, "wcsFocus", 7);
    this.inputId = `wcs-textarea-${textareaIds++}`;
    this.didBlurAfterEdit = false;
    this.inheritedAttributes = {};
    this.onInput = (ev) => {
      if (this.nativeInput) {
        this.value = this.nativeInput.value;
      }
      this.wcsInput.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.focusChange();
      if (this.fireFocusEvents) {
        this.wcsFocus.emit(ev);
      }
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.focusChange();
      if (this.fireFocusEvents) {
        this.wcsBlur.emit(ev);
      }
    };
    this.onKeyDown = () => {
      this.checkClearOnEdit();
    };
    this.fireFocusEvents = true;
    this.hasFocus = false;
    this.autocapitalize = 'none';
    this.autofocus = false;
    this.clearOnEdit = false;
    this.debounce = 0;
    this.disabled = false;
    this.icon = undefined;
    this.inputmode = undefined;
    this.enterkeyhint = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.name = this.inputId;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.state = 'initial';
    this.cols = undefined;
    this.rows = undefined;
    this.wrap = undefined;
    this.autoGrow = false;
    this.value = '';
    this.resize = undefined;
  }
  debounceChanged() {
    this.wcsChange = helpers.debounceEvent(this.wcsChange, this.debounce);
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
    this.wcsChange.emit({ value });
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
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['title']);
  }
  componentDidLoad() {
    helpers.raf(() => this.runAutoGrow());
  }
  runAutoGrow() {
    const nativeInput = this.nativeInput;
    if (nativeInput && this.autoGrow) {
      index.readTask(() => {
        nativeInput.style.height = 'auto';
        nativeInput.style.height = nativeInput.scrollHeight + 'px';
      });
    }
  }
  /**
   * This method make the textarea automatically adopt the size of the content without a scroll bar
   */
  async fitContent() {
    helpers.raf(() => this.runAutoGrow());
  }
  /**
   * Sets focus on the native `textarea` in `wcs-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `textarea` in `wcs-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   * @internal
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  getInputElement() {
    // tslint:disable-next-line:no-non-null-assertion
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  checkClearOnEdit() {
    if (!this.clearOnEdit) {
      return;
    }
    // Did the input value change after it was blurred and edited?
    if (this.didBlurAfterEdit && this.hasValue()) {
      // Clear the input
      this.value = '';
    }
    // Reset the flag
    this.didBlurAfterEdit = false;
  }
  focusChange() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }
  hasValue() {
    return this.getValue() !== '';
  }
  getValue() {
    return this.value || '';
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = helpers.findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    const style = Object.assign({}, (this.resize && { 'resize': this.resize }));
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null }, this.icon ? (index.h("wcs-mat-icon", { icon: this.icon, size: "m" })) : null, index.h("textarea", Object.assign({ class: "native-textarea", "aria-labelledby": label ? labelId : null, ref: el => this.nativeInput = el, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, style: style }, this.inheritedAttributes), value)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
let textareaIds = 0;
Textarea.style = textareaCss;

exports.wcs_textarea = Textarea;

//# sourceMappingURL=wcs-textarea.cjs.entry.js.map