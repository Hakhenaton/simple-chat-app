import { h, Host } from '@stencil/core';
export class Switch {
  constructor() {
    this.switchId = `wcs-switch-${switchIds++}`;
    this.name = this.switchId;
    this.checked = false;
    this.labelAlignment = 'center';
    this.disabled = false;
  }
  toggleChange(_event) {
    this.checked = !this.checked;
    this.wcsChange.emit({
      checked: this.checked
    });
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.name, class: "wcs-container", "aria-disabled": this.disabled }, h("input", { onChange: (evt) => this.toggleChange(evt), checked: this.checked, class: "wcs-switch", type: "checkbox", name: this.name, disabled: this.disabled, id: this.name }), h("span", { class: "wcs-checkmark" }), h("span", { class: "text" }, h("slot", null)))));
  }
  static get is() { return "wcs-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["switch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["switch.css"]
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
        "defaultValue": "this.switchId"
      },
      "checked": {
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
          "text": "If `true`, the switch is selected."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "labelAlignment": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SwitchLabelAlignment",
          "resolved": "\"bottom\" | \"center\" | \"top\"",
          "references": {
            "SwitchLabelAlignment": {
              "location": "import",
              "path": "./switch-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifie the alignment of the switch with the label content"
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
          "text": "Specify wether the switch is disabled or not."
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
          "original": "SwitchChangeEventDetail",
          "resolved": "SwitchChangeEventDetail",
          "references": {
            "SwitchChangeEventDetail": {
              "location": "import",
              "path": "./switch-interface"
            }
          }
        }
      }];
  }
}
let switchIds = 0;
//# sourceMappingURL=switch.js.map
