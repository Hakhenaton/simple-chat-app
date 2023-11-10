import { h, Host, Build, readTask } from '@stencil/core';
import { debounceEvent, findItemLabel, inheritAttributes, raf } from '../../utils/helpers';
/**
 * Mainly inspired from Ionic Textarea Component
 *
 * @cssprop --wcs-textarea-max-height - Max height of the text area component
 *
 */
export class Textarea {
  constructor() {
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
    this.wcsChange = debounceEvent(this.wcsChange, this.debounce);
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
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('wcsInputDidLoad', {
        detail: this.el
      }));
    }
  }
  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('wcsInputDidUnload', {
        detail: this.el
      }));
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['title']);
  }
  componentDidLoad() {
    raf(() => this.runAutoGrow());
  }
  runAutoGrow() {
    const nativeInput = this.nativeInput;
    if (nativeInput && this.autoGrow) {
      readTask(() => {
        nativeInput.style.height = 'auto';
        nativeInput.style.height = nativeInput.scrollHeight + 'px';
      });
    }
  }
  /**
   * This method make the textarea automatically adopt the size of the content without a scroll bar
   */
  async fitContent() {
    raf(() => this.runAutoGrow());
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
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    const style = Object.assign({}, (this.resize && { 'resize': this.resize }));
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, this.icon ? (h("wcs-mat-icon", { icon: this.icon, size: "m" })) : null, h("textarea", Object.assign({ class: "native-textarea", "aria-labelledby": label ? labelId : null, ref: el => this.nativeInput = el, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, style: style }, this.inheritedAttributes), value)));
  }
  static get is() { return "wcs-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["textarea.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["textarea.css"]
    };
  }
  static get properties() {
    return {
      "fireFocusEvents": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "This is required for a WebKit bug which requires us to\nblur and focus an input to properly focus the input in\nan item with delegatesFocus. It will no longer be needed\nwith iOS 14."
        },
        "attribute": "fire-focus-events",
        "reflect": false,
        "defaultValue": "true"
      },
      "autocapitalize": {
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
          "text": "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user."
        },
        "attribute": "autocapitalize",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "autofocus": {
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
          "text": "This Boolean attribute lets you specify that a form control should have input focus when the page loads."
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearOnEdit": {
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
          "text": "If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `\"password\"`, `false` for all other types."
        },
        "attribute": "clear-on-edit",
        "reflect": false,
        "defaultValue": "false"
      },
      "debounce": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `wcsChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "disabled": {
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
          "text": "If `true`, the user cannot interact with the textarea."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
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
          "text": "Name of the material icon to add to the input"
        },
        "attribute": "icon",
        "reflect": false
      },
      "inputmode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'",
          "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A hint to the browser for which keyboard to display.\nPossible values: `\"none\"`, `\"text\"`, `\"tel\"`, `\"url\"`,\n`\"email\"`, `\"numeric\"`, `\"decimal\"`, and `\"search\"`."
        },
        "attribute": "inputmode",
        "reflect": false
      },
      "enterkeyhint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
          "resolved": "\"done\" | \"enter\" | \"go\" | \"next\" | \"previous\" | \"search\" | \"send\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A hint to the browser for which enter key to display.\nPossible values: `\"enter\"`, `\"done\"`, `\"go\"`, `\"next\"`,\n`\"previous\"`, `\"search\"`, and `\"send\"`."
        },
        "attribute": "enterkeyhint",
        "reflect": false
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
        },
        "attribute": "maxlength",
        "reflect": false
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
        },
        "attribute": "minlength",
        "reflect": false
      },
      "name": {
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
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.inputId"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Instructional text that shows before the input has a value."
        },
        "attribute": "placeholder",
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
          "text": "If `true`, the user cannot modify the value."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "If `true`, the user must fill in a value before submitting a form."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "spellcheck": {
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
          "text": "If `true`, the element will have its spelling and grammar checked."
        },
        "attribute": "spellcheck",
        "reflect": false,
        "defaultValue": "false"
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'initial' | 'error'",
          "resolved": "\"error\" | \"initial\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the state of the input. By default the input is in an initial state but you can set it to 'error' state if the data given by the user is not valid."
        },
        "attribute": "state",
        "reflect": true,
        "defaultValue": "'initial'"
      },
      "cols": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The visible width of the text control, in average character widths. If it is specified, it must be a positive integer."
        },
        "attribute": "cols",
        "reflect": false
      },
      "rows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The number of visible text lines for the control."
        },
        "attribute": "rows",
        "reflect": false
      },
      "wrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'hard' | 'soft' | 'off'",
          "resolved": "\"hard\" | \"off\" | \"soft\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Indicates how the control wraps text."
        },
        "attribute": "wrap",
        "reflect": false
      },
      "autoGrow": {
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
          "text": "If `true`, the element height will increase based on the value."
        },
        "attribute": "auto-grow",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the textarea."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      },
      "resize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'both' | 'none' | 'vertical' | 'horizontal'",
          "resolved": "\"both\" | \"horizontal\" | \"none\" | \"vertical\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Indicates how the textarea should be resizable.\nPossible values 'both' | 'none' | 'vertical' | 'horizontal'"
        },
        "attribute": "resize",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {}
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
          "text": "Emitted when the input value has changed."
        },
        "complexType": {
          "original": "TextareaChangeEventDetail",
          "resolved": "TextareaChangeEventDetail",
          "references": {
            "TextareaChangeEventDetail": {
              "location": "import",
              "path": "./textarea-interface"
            }
          }
        }
      }, {
        "method": "wcsInput",
        "name": "wcsInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a keyboard input occurred."
        },
        "complexType": {
          "original": "KeyboardEvent",
          "resolved": "KeyboardEvent",
          "references": {
            "KeyboardEvent": {
              "location": "global"
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
          "text": "Emitted when the input loses focus."
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
      }, {
        "method": "wcsFocus",
        "name": "wcsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has focus."
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
  static get methods() {
    return {
      "fitContent": {
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
          "text": "This method make the textarea automatically adopt the size of the content without a scroll bar",
          "tags": []
        }
      },
      "setFocus": {
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
          "text": "Sets focus on the native `textarea` in `wcs-textarea`. Use this method instead of the global\n`textarea.focus()`.",
          "tags": []
        }
      },
      "setBlur": {
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
          "text": "Sets blur on the native `textarea` in `wcs-textarea`. Use this method instead of the global\n`textarea.blur()`.",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLTextAreaElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLTextAreaElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLTextAreaElement>"
        },
        "docs": {
          "text": "Returns the native `<textarea>` element used under the hood.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "debounce",
        "methodName": "debounceChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
let textareaIds = 0;
//# sourceMappingURL=textarea.js.map
