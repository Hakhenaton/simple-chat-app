import { h, Host } from '@stencil/core';
import { isWcsEditableFieldSize, WcsEditableFieldSizeValues } from './editable-field-interface';
var EditableComponentState;
(function (EditableComponentState) {
  EditableComponentState[EditableComponentState["DISPLAY"] = 0] = "DISPLAY";
  EditableComponentState[EditableComponentState["EDIT"] = 1] = "EDIT";
  EditableComponentState[EditableComponentState["LOAD"] = 2] = "LOAD";
})(EditableComponentState || (EditableComponentState = {}));
export class EditableField {
  constructor() {
    // fixme: why this attr is never read?
    // ignoreNextChangeEvent: boolean = false;
    this.spiedElement = null;
    this.currentValue = null;
    this.currentState = EditableComponentState.DISPLAY;
    this.type = 'input';
    this.label = undefined;
    this.readonly = false;
    this.value = undefined;
    this.validateFn = undefined;
    this.formatFn = undefined;
    this.errorMsg = null;
    this.size = 'm';
    this.isError = false;
  }
  componentWillLoad() {
    if (!isWcsEditableFieldSize(this.size)) {
      console.error(`Invalid size value for wcs-editable-field : "${this.size}". Must be one of "${WcsEditableFieldSizeValues.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
    this.currentValue = this.value;
  }
  componentDidRender() {
    const assignedElements = this.el.shadowRoot.querySelector('slot').assignedElements();
    switch (this.type) {
      case 'input':
        this.initWithInput(assignedElements);
        break;
      case 'textarea':
        this.initWithTextArea(assignedElements);
        break;
      case 'select':
        this.initWithSelect(assignedElements);
        break;
    }
  }
  initWithInput(assignedElements) {
    const element = assignedElements.filter(x => {
      return x.tagName === 'WCS-INPUT';
    })[0];
    if (!element)
      throw new Error('You must provide a slotted input element to handle edition');
    this.spiedElement = element;
    this.addChangeHandlerForWcsComponents(this.spiedElement);
    this.spiedElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.sendCurrentValue();
      }
      if (event.key === 'Escape') {
        this.discardChanges();
      }
    });
  }
  initWithTextArea(assignedElements) {
    const element = assignedElements.filter(x => {
      return x.tagName === 'WCS-TEXTAREA';
    })[0];
    if (!element)
      throw new Error('You must provide a slotted textarea element to handle edition');
    this.spiedElement = element;
    this.addChangeHandlerForWcsComponents(this.spiedElement);
    this.spiedElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && event.ctrlKey) {
        this.sendCurrentValue();
      }
      if (event.key === 'Escape') {
        this.discardChanges();
      }
    });
  }
  initWithSelect(assignedElements) {
    const element = assignedElements.filter(x => {
      return x.tagName === 'WCS-SELECT';
    })[0];
    if (!element)
      throw new Error('You must provide a slotted select element to handle edition');
    this.spiedElement = element;
    this.addChangeHandlerForWcsComponents(this.spiedElement);
  }
  /**
   * This method subscribes the component to the change events produced by the other WCS components
   * (provided by the user in slot)
   * @private
   */
  addChangeHandlerForWcsComponents(elt) {
    elt.addEventListener('wcsChange', (event) => {
      event.stopImmediatePropagation();
      this.currentValue = event.detail.value;
      if (this.validateFn) {
        this.isError = !this.validateFn(this.currentValue);
      }
    });
  }
  sendCurrentValue() {
    if (this.currentState === EditableComponentState.EDIT) {
      if (this.value === this.currentValue) {
        this.currentState = EditableComponentState.DISPLAY;
      }
      else {
        this.isError = this.validateFn ? !this.validateFn(this.currentValue) : false;
        if (!this.isError) {
          this.currentState = EditableComponentState.LOAD;
          this.wcsChange.emit({
            newValue: this.currentValue,
            successHandler: () => this.forceDisplayStateAndValidate(),
            errorhandler: () => this.errorHandler()
          });
        }
      }
    }
  }
  discardChanges() {
    this.currentValue = this.value;
    this.currentState = EditableComponentState.DISPLAY;
    this.isError = false;
  }
  forceDisplayStateAndValidate() {
    if (this.currentState === EditableComponentState.LOAD) {
      this.value = this.currentValue;
      this.currentState = EditableComponentState.DISPLAY;
    }
    else {
      throw new Error('You cannot set display state from ' + EditableComponentState[this.currentState] + ' state');
    }
  }
  onWindowClickEvent(event) {
    if (!this.clickInsideComponent(event)) {
      if (this.currentState === EditableComponentState.EDIT) {
        if (this.isError) {
          this.discardChanges();
        }
        else {
          this.sendCurrentValue();
        }
      }
    }
  }
  clickInsideComponent(event) {
    return event.x >= this.el.getBoundingClientRect().x && event.x <= this.el.getBoundingClientRect().x + this.el.getBoundingClientRect().width
      && event.y >= this.el.getBoundingClientRect().y && event.y <= this.el.getBoundingClientRect().y + this.el.getBoundingClientRect().height;
  }
  /**
   * discard changes and force component state to DISPLAY
   * <br/>
   * This method must be call when component is in LOAD state
   */
  errorHandler() {
    this.discardChanges();
  }
  onValueChange() {
    this.currentState = EditableComponentState.DISPLAY;
  }
  onDisplayContainerClick() {
    if (this.currentState === EditableComponentState.DISPLAY && this.readonly === false) {
      this.currentState = EditableComponentState.EDIT;
      // fixme: why this attr is never read?
      // this.ignoreNextChangeEvent = true;
      this.spiedElement['value'] = this.currentValue;
      if (this.validateFn) {
        this.isError = !this.validateFn(this.currentValue);
      }
      // We wait until the element is displayed on the page otherwise the focus does not work
      const DELAY_FOR_RENDER = 20;
      setTimeout(() => {
        if (this.type === 'input') {
          this.spiedElement.setFocus();
        }
        else if (this.type === 'textarea') {
          this.spiedElement.fitContent();
          this.spiedElement.setFocus();
        }
      }, DELAY_FOR_RENDER);
    }
  }
  render() {
    const { formattedValue, formattedCurrentValue } = this.formatValues();
    return (h(Host, null, h("div", { class: "label" }, this.label), h("div", { class: 'display-container ' + (this.currentState !== EditableComponentState.DISPLAY ? 'display-none' : ''), onClick: () => this.onDisplayContainerClick() }, formattedValue, h("wcs-mat-icon", { icon: "edit", size: "s" }), this.readonly ? this.getReadonlySvgIcon() : null), h("div", { class: 'load-container ' + (this.currentState !== EditableComponentState.LOAD ? 'display-none' : '') }, formattedCurrentValue, h("wcs-spinner", null)), h("wcs-form-field", { "is-error": this.isError, class: 'edit-container ' + (this.currentState !== EditableComponentState.EDIT ? 'display-none' : '') }, h("slot", null), this.isError && this.errorMsg
      ? h("wcs-error", null, this.errorMsg)
      : null)));
  }
  getReadonlySvgIcon() {
    return h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "24", viewBox: "0 0 27 25", class: "readonly-icon" }, h("path", { d: "M26.79,25.05H1.21a.73.73,0,0,0,0,1.45H26.79a.73.73,0,0,0,0-1.45Z", transform: "translate(-0.5 -1.5)" }), h("path", { d: "M19.8,8.87h-.61V6.73a5.23,5.23,0,0,0-10.46,0V8.87H8.2a1.63,1.63,0,0,0-1.63,1.62V21.32A1.62,1.62,0,0,0,8.2,22.94H19.8a1.62,1.62,0,0,0,1.63-1.62V10.49A1.63,1.63,0,0,0,19.8,8.87ZM10.93,6.73a3,3,0,1,1,6.06,0V8.87H10.93Zm3,14.15a5,5,0,1,1,5-5A5,5,0,0,1,14,20.88Z", transform: "translate(-0.5 -1.5)" }), h("path", { d: "M14,12.62a3.29,3.29,0,1,0,3.29,3.29A3.29,3.29,0,0,0,14,12.62Zm0,4.75a1.47,1.47,0,1,1,1.47-1.46A1.46,1.46,0,0,1,14,17.37Z", transform: "translate(-0.5 -1.5)" }));
  }
  formatValues() {
    let formattedValue = this.value;
    let formattedCurrentValue = this.currentValue;
    if (this.formatFn) {
      formattedValue = this.formatFn(this.value);
      formattedCurrentValue = this.formatFn(this.currentValue);
    }
    if (Array.isArray(this.value)) {
      formattedValue = this.value.join(', ');
    }
    if (Array.isArray(this.currentValue)) {
      formattedCurrentValue = this.currentValue.join(', ');
    }
    return {
      formattedValue: (formattedValue ? (h("span", null, formattedValue)) : (h("span", null))),
      formattedCurrentValue: (formattedCurrentValue ? (h("span", null, formattedCurrentValue)) : (h("span", null)))
    };
  }
  static get is() { return "wcs-editable-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["editable-field.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["editable-field.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "EditableFieldType",
          "resolved": "\"input\" | \"select\" | \"textarea\"",
          "references": {
            "EditableFieldType": {
              "location": "import",
              "path": "./editable-field-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies which component is used for editing"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'input'"
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
          "text": "Label of the field"
        },
        "attribute": "label",
        "reflect": false
      },
      "readonly": {
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
          "text": "Specify whether the field is editable or not"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Initial value of the field"
        },
        "attribute": "value",
        "reflect": false
      },
      "validateFn": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "ValidateFn<any>",
          "resolved": "(value: any) => boolean",
          "references": {
            "ValidateFn": {
              "location": "import",
              "path": "./editable-field-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Function to customize the validation of the data during the update"
        }
      },
      "formatFn": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "FormatFn<any>",
          "resolved": "(value: any) => string",
          "references": {
            "FormatFn": {
              "location": "import",
              "path": "./editable-field-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Function used to format the value"
        }
      },
      "errorMsg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed under the field if validation failed."
        },
        "attribute": "error-msg",
        "reflect": false,
        "defaultValue": "null"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsEditableFieldSize",
          "resolved": "\"l\" | \"m\"",
          "references": {
            "WcsEditableFieldSize": {
              "location": "import",
              "path": "./editable-field-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the size (height) of the editable field."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      }
    };
  }
  static get states() {
    return {
      "currentState": {},
      "isError": {}
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
          "text": "event called at each (valid) update of the field."
        },
        "complexType": {
          "original": "EditableComponentUpdateEvent",
          "resolved": "EditableComponentUpdateEvent",
          "references": {
            "EditableComponentUpdateEvent": {
              "location": "import",
              "path": "./editable-field-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onWindowClickEvent",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=editable-field.js.map
