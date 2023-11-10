import { h, Host } from '@stencil/core';
export class RadioGroup {
  constructor() {
    this.value = undefined;
    this.name = undefined;
    this.mode = 'radio';
  }
  onValueChangeHandler(newValue) {
    this.updateOptionsState(newValue, true);
  }
  componentDidLoad() {
    if (this.value) {
      this.updateOptionsState(this.value, true);
    }
    if (this.mode === 'option' || this.mode === 'horizontal') {
      for (const option of this.options) {
        option.mode = this.mode;
      }
    }
  }
  get options() {
    const opts = this.el.querySelectorAll('wcs-radio');
    const slot = this.el.querySelector('slot');
    return opts.length !== 0
      ? opts
      : slot !== null
        ? slot.assignedElements()
        : [];
  }
  selectedOptionChanged(event) {
    this.updateOptionsState(event.detail.value, false);
    this.wcsChange.emit({
      value: event.detail.value
    });
  }
  updateOptionsState(value, markAsChecked) {
    for (const option of this.options) {
      if (option.value !== value) {
        option.removeAttribute('checked');
      }
      else {
        if (markAsChecked) {
          option.setAttribute('checked', '');
        }
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", { name: "option" })));
  }
  static get is() { return "wcs-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["radio-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["radio-group.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": false,
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
        "reflect": false
      },
      "name": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": true
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "RadioGroupMode",
          "resolved": "\"horizontal\" | \"option\" | \"radio\"",
          "references": {
            "RadioGroupMode": {
              "location": "import",
              "path": "./radio-group-interface"
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
      }
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
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "RadioGroupChangeEventDetail",
          "resolved": "RadioGroupChangeEventDetail",
          "references": {
            "RadioGroupChangeEventDetail": {
              "location": "import",
              "path": "./radio-group-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChangeHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "wcsRadioClick",
        "method": "selectedOptionChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=radio-group.js.map
