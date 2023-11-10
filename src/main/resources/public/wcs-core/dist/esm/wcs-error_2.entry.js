import { r as registerInstance, h, H as Host, g as getElement } from './index-dc4d96d4.js';

const errorCss = ":host{margin-top:0.25rem;color:var(--wcs-red)}";

const Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { slot: "error" }, h("slot", null)));
  }
};
Label.style = errorCss;

const formFieldCss = ":host{--wcs-form-field-border-radius-left:var(--wcs-border-radius);--wcs-form-field-border-radius-right:var(--wcs-border-radius);display:flex;flex-direction:column}.input-container{display:flex}::slotted(wcs-radio-group){margin-left:var(--wcs-base-margin)}::slotted(wcs-radio-group[mode=option]){margin-left:0}::slotted(wcs-select:not([slot=prefix])){width:100%}::slotted(label){font-weight:500;margin-bottom:8px}:host(.has-prefix){--wcs-input-border-radius-left:0}:host(.has-suffix){--wcs-input-border-radius-right:0}::slotted([slot=prefix]){--wcs-select-border-radius:var(--wcs-border-radius) 0 0 var(--wcs-border-radius);--wcs-select-background-color:var(--wcs-gray-light);--wcs-select-value-color:var(--wcs-white);--wcs-select-placeholder-color:var(--wcs-white);--wcs-select-border-color:var(--wcs-gray-light)}::slotted([slot=suffix]){--wcs-button-border-radius:0 var(--wcs-border-radius) var(--wcs-border-radius) 0;--wcs-select-border-radius:0 var(--wcs-border-radius) var(--wcs-border-radius) 0}";

const FormField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isError = false;
    this.hasPrefix = false;
    this.hasSuffix = false;
    this.spiedElement = undefined;
  }
  componentWillLoad() {
    this.hasSuffix = this.el.querySelector('wcs-button') !== null;
    this.hasPrefix = this.el.querySelector('wcs-select') !== null;
  }
  componentDidLoad() {
    this.initSpiedElement();
    this.addRequiredMarkerToLabel();
    this.updateErrorStateOnInput(this.isError);
  }
  isErrorChange(newValue) {
    this.updateErrorStateOnInput(newValue);
  }
  updateErrorStateOnInput(newValue) {
    if (this.spiedElementIsOfType('wcs-input', 'wcs-textarea')) {
      if (newValue) {
        this.spiedElement.setAttribute('state', 'error');
      }
      else {
        this.spiedElement.setAttribute('state', 'initial');
      }
    }
  }
  /**
   * This function return true if the form field contains an element with tagName matches a value of the types param
   * @param types
   * @private
   */
  spiedElementIsOfType(...types) {
    var _a;
    for (const type of types) {
      if (((_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.tagName) === type.toUpperCase())
        return true;
    }
    return false;
  }
  addRequiredMarkerToLabel() {
    var _a;
    // TODO: deprecate this in favor of the 'required' component attribute
    const label = this.el.querySelector('wcs-label');
    this.observer = new MutationObserver(mutations => {
      var _a;
      const requiredAttMutation = mutations.filter(m => m.attributeName === 'required')[0];
      if (requiredAttMutation) {
        this.updateLabelRequiredFlag((_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.hasAttribute('required'), label);
      }
    });
    if (this.spiedElement) {
      this.observer.observe(this.spiedElement, { attributes: true });
    }
    const isRequired = (_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.hasAttribute('required');
    this.updateLabelRequiredFlag(isRequired, label);
  }
  initSpiedElement() {
    var _a, _b;
    const SUPPORTED_COMPONENTS = ['wcs-input', 'wcs-select', 'wcs-textarea', 'wcs-radio-group', 'wcs-switch', 'wcs-checkbox', 'wcs-native-select', 'wcs-counter'];
    this.spiedElement = (_a = this.el.shadowRoot.querySelector('slot:not([name])')) === null || _a === void 0 ? void 0 : _a.assignedElements().filter(n => [...SUPPORTED_COMPONENTS, 'SLOT'].map(x => x.toUpperCase()).indexOf(n.nodeName) !== -1)[0];
    // If the component is used in another web component
    if (((_b = this.spiedElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'SLOT') {
      this.spiedElement = (this.spiedElement
        .assignedElements()
        .filter(n => SUPPORTED_COMPONENTS.map(x => x.toUpperCase()).indexOf(n.nodeName) !== -1)[0]);
    }
    if (!this.spiedElement) {
      // tslint:disable-next-line:no-console
      console.warn('Form-field component support only ' + SUPPORTED_COMPONENTS.toString() + '. Some features may not work with the provided component.');
      return;
    }
  }
  updateLabelRequiredFlag(isRequired, label) {
    if (isRequired && label) {
      label.setAttribute('required', 'true');
    }
    else if (!isRequired && label) {
      label.removeAttribute('required');
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    let classes = '';
    const isError = this.isError;
    if (this.hasSuffix) {
      classes += ' has-suffix';
    }
    if (this.hasPrefix) {
      classes += ' has-prefix';
    }
    return (h(Host, { class: classes }, h("slot", { name: "label" }), h("div", { class: "input-container" }, h("slot", { name: "prefix" }), h("slot", { onSlotchange: () => this.onFormInputSlotChange() }), h("slot", { name: "suffix" })), isError ? (h("slot", { name: "error" })) : '', h("slot", { name: "messages" })));
  }
  onFormInputSlotChange() {
    this.initSpiedElement();
    this.addRequiredMarkerToLabel();
    this.updateErrorStateOnInput(this.isError);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isError": ["isErrorChange"]
  }; }
};
FormField.style = formFieldCss;

export { Label as wcs_error, FormField as wcs_form_field };

//# sourceMappingURL=wcs-error_2.entry.js.map