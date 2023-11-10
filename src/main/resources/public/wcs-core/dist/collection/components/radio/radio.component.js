import { h, Host } from '@stencil/core';
import { isEnterKey, isSpaceKey } from '../../utils/helpers';
export class Radio {
  constructor() {
    this.inputId = `wcs-rb-${radioButtonIds++}`;
    this.mode = 'radio';
    this.value = undefined;
    this.label = undefined;
    this.checked = false;
    this.disabled = false;
  }
  onKeyDown(_event) {
    if ((isSpaceKey(_event) || isEnterKey(_event)) && !this.el.checked) {
      this.el.checked = true;
      this.emitRadioChangeEvent();
    }
  }
  componentWillLoad() {
    if (this.value === undefined) {
      // If no value was given we use the text content instead.
      this.value = this.el.innerText || '';
    }
  }
  componentDidLoad() {
    this.inputEl = this.el.shadowRoot.querySelector('input');
    this.inputEl.addEventListener('change', _ => {
      this.emitRadioChangeEvent();
      this.checked = true;
    });
  }
  emitRadioChangeEvent() {
    this.wcsRadioClick.emit({
      label: this.label,
      source: this.el,
      value: this.value
    });
  }
  render() {
    return (h(Host, { slot: "option" }, h("input", { id: this.inputId, type: "radio", value: this.value, checked: this.checked, disabled: this.disabled, "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.checked}` }), h("label", { htmlFor: `${this.inputId}` }, this.label)));
  }
  static get is() { return "wcs-radio"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["radio.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["radio.css"]
    };
  }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "RadioGroupMode",
          "resolved": "\"horizontal\" | \"option\" | \"radio\"",
          "references": {
            "RadioGroupMode": {
              "location": "import",
              "path": "../radio-group/radio-group-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "mode",
        "reflect": true,
        "defaultValue": "'radio'"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any | any[] | undefined | null",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": true
      },
      "label": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label",
        "reflect": true
      },
      "checked": {
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
          "text": "If `true`, the radio is selected."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "If `true`, the user cannot interact with the radio."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsRadioClick",
        "name": "wcsRadioClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "RadioChosedEvent",
          "resolved": "RadioChosedEvent",
          "references": {
            "RadioChosedEvent": {
              "location": "import",
              "path": "./radio-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
let radioButtonIds = 0;
//# sourceMappingURL=radio.component.js.map
