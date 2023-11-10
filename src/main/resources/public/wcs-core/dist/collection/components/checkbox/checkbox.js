import { h, Host } from '@stencil/core';
export class Checkbox {
  constructor() {
    this.checkboxId = `wcs-checkbox-${checkboxIds++}`;
    this.name = this.checkboxId;
    this.indeterminate = false;
    this.checked = false;
    this.labelAlignment = 'center';
    this.disabled = false;
  }
  handleChange(_event) {
    this.indeterminate = false;
    this.checked = !this.checked;
    this.wcsChange.emit({
      checked: this.checked
    });
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.name, class: "wcs-container", "aria-disabled": this.disabled }, h("input", { onChange: (evt) => this.handleChange(evt), checked: this.checked, class: "wcs-checkbox", type: "checkbox", name: this.name, disabled: this.disabled, id: this.name }), h("span", { class: "wcs-checkmark" }), h("span", { class: "text" }, h("slot", null)))));
  }
  static get is() { return "wcs-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["checkbox.css"]
    };
  }
  static get properties() {
    return {
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
          "text": ""
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.checkboxId"
      },
      "indeterminate": {
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
          "text": "If `true` the checkbox is in indeterminate state."
        },
        "attribute": "indeterminate",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "If `true`, the checkbox is selected."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "labelAlignment": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "CheckboxLabelAlignment",
          "resolved": "\"bottom\" | \"center\" | \"top\"",
          "references": {
            "CheckboxLabelAlignment": {
              "location": "import",
              "path": "./checkbox-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifie the alignment of the checkbox with the label content"
        },
        "attribute": "label-alignment",
        "reflect": true,
        "defaultValue": "'center'"
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
          "text": "Specify wether the checkbox is disabled or not."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Emitted when the checked property has changed."
        },
        "complexType": {
          "original": "CheckboxChangeEventDetail",
          "resolved": "CheckboxChangeEventDetail",
          "references": {
            "CheckboxChangeEventDetail": {
              "location": "import",
              "path": "./checkbox-interface"
            }
          }
        }
      }];
  }
}
let checkboxIds = 0;
//# sourceMappingURL=checkbox.js.map
