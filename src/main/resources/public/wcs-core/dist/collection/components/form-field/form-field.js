import { h, Host } from '@stencil/core';
/**
 * TODO:
 * - [ ] Suffix button style
 */
export class FormField {
  constructor() {
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
  static get is() { return "wcs-form-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-field.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-field.css"]
    };
  }
  static get properties() {
    return {
      "isError": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies whether the form field is in an error state. Displays the field border in red and the message contained in the wcs-error component"
        },
        "attribute": "is-error",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasPrefix": {},
      "hasSuffix": {},
      "spiedElement": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "isError",
        "methodName": "isErrorChange"
      }];
  }
}
//# sourceMappingURL=form-field.js.map
