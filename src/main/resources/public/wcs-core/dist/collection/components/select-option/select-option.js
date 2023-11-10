import { h, Host } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { isEnterKey, generateUniqueId, isSpaceKey } from "../../utils/helpers";
/**
 * Select option component, use in conjunction with wcs-select.
 */
export class SelectOption {
  constructor() {
    this.selectOptionId = generateUniqueId(this.el.tagName);
    this.disabled = false;
    this.selected = false;
    this.value = undefined;
    this.chipColor = undefined;
    this.chipBackgroundColor = undefined;
    this.multiple = false;
  }
  componentWillLoad() {
    if (this.value === undefined) {
      // If no value was given we use the text content instead.
      this.value = this.el.innerText || '';
    }
  }
  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.el);
  }
  chooseOption(event) {
    if (!this.disabled) {
      event.stopPropagation();
      // We select inner HTML as it's what's passed into the slot.
      const displayText = this.el.innerText;
      this.wcsSelectOptionClick.emit({
        source: this.el,
        value: this.value,
        displayText
      });
    }
  }
  onMouseDown(event) {
    this.chooseOption(event);
  }
  /**
   * Handles the keydown event to update the selection.
   * @param event keyboard event
   */
  handleKeydown(event) {
    if (isEnterKey(event) || isSpaceKey(event)) {
      this.chooseOption(event);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    return (h(Host, { id: this.selectOptionId, "aria-selected": this.selected ? 'true' : 'false', slot: "wcs-select-option", role: "option", tabindex: "-1" }, this.multiple &&
      h("wcs-checkbox", { tabindex: "-1", checked: this.selected }), h("slot", null)));
  }
  static get is() { return "wcs-select-option"; }
  static get originalStyleUrls() {
    return {
      "$": ["select-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select-option.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Wether this option can be selected."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "selected": {
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
          "text": "Wether this option is selected."
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The option value, not what's displayed, use inner text instead."
        },
        "attribute": "value",
        "reflect": false
      },
      "chipColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Chip's displayed text color."
        },
        "attribute": "chip-color",
        "reflect": false
      },
      "chipBackgroundColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Chip's background color."
        },
        "attribute": "chip-background-color",
        "reflect": false
      },
      "multiple": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }, {
              "name": "ignore",
              "text": undefined
            }],
          "text": "This property musn't be set by hand, it is used by the `wcs-select` component.\nIf you want a multiple select, set `multiple` attribute on the parent select instead."
        },
        "attribute": "multiple",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsSelectOptionClick",
        "name": "wcsSelectOptionClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SelectOptionChosedEvent",
          "resolved": "SelectOptionChosedEvent",
          "references": {
            "SelectOptionChosedEvent": {
              "location": "import",
              "path": "./select-option-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "mousedown",
        "method": "onMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "keydown",
        "method": "handleKeydown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=select-option.js.map
