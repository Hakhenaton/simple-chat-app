import { h } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { isWcsButtonSize, WcsButtonSizeValues } from './button-interface';
import { hasShadowDom } from '../../utils/helpers';
/**
 * Button component, can also be a link when specifying href.
 *
 * ## Click event
 *
 * The WCS button relies on the native click event to pass a user click to your app.
 * For now, it's not possible for us to prevent the click event to be fired when the button's disabled attribute is true.
 * This means you'll receive click events on a disabled wcs button.
 * If you're using the button with a library like Angular or React, they have internal mechanisms to prevent this behavior. Your callbacks will therefore not be called.
 * To fix this problem, we plan to provide a wcsClick event in addition to the native click for applications developed without frameworks.
 */
export class Button {
  constructor() {
    this.type = 'button';
    this.href = undefined;
    this.target = undefined;
    this.disabled = false;
    this.ripple = true;
    this.size = 'm';
    this.shape = 'normal';
    this.mode = 'plain';
    this.loading = false;
  }
  /**
   * Native event click is emit event if we decide to stop propagation of it
   * @param ev
   */
  onClick(ev) {
    if (this.disabled || this.loading) {
      ev.stopImmediatePropagation();
    }
    if (this.type !== 'button' && hasShadowDom(this.el)) {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = window.document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
  componentWillLoad() {
    if (!isWcsButtonSize(this.size)) {
      console.error(`Invalid size value for wcs-button : "${this.size}". Must be one of "${WcsButtonSizeValues.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
  }
  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.el.shadowRoot.querySelector('.wcs-inner-button'));
  }
  enabledRippleEffect() {
    this.mdcRipple.disabled = false;
  }
  disabledRippleEffect() {
    this.mdcRipple.disabled = true;
  }
  getTagName() {
    return this.href !== undefined ? 'a' : 'button';
  }
  onRippleChange() {
    if (this.ripple) {
      this.enabledRippleEffect();
    }
    else {
      this.disabledRippleEffect();
    }
  }
  render() {
    const TagType = this.getTagName();
    const attrs = this.href !== undefined
      ? { href: this.href, role: 'button', target: this.target }
      : { type: this.type };
    return (h(TagType, Object.assign({}, attrs, { class: "wcs-inner-button", disabled: this.disabled || this.loading }), this.loading && h("wcs-spinner", null), h("slot", null)));
  }
  static get is() { return "wcs-button"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "WcsButtonType",
          "resolved": "\"button\" | \"submit\"",
          "references": {
            "WcsButtonType": {
              "location": "import",
              "path": "./button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the button type."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "href": {
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
          "text": "Set a URL to point to.<br/>\nIf specified use a `a` tag instead of `btn`."
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'_blank' | '_self'",
          "resolved": "\"_blank\" | \"_self\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies where to open the linked document when using href (see prop above)<br/>\nDefault '_self' will open the linked document in the same frame as it was clicked"
        },
        "attribute": "target",
        "reflect": false
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
          "text": "Specify whether the button is disabled or not."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "ripple": {
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
          "text": "Specify whether the button should have a ripple effect or not."
        },
        "attribute": "ripple",
        "reflect": false,
        "defaultValue": "true"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsButtonSize",
          "resolved": "\"l\" | \"m\" | \"s\"",
          "references": {
            "WcsButtonSize": {
              "location": "import",
              "path": "./button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the size of the button."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsButtonShape",
          "resolved": "\"normal\" | \"round\" | \"square\"",
          "references": {
            "WcsButtonShape": {
              "location": "import",
              "path": "./button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the shape of the button."
        },
        "attribute": "shape",
        "reflect": true,
        "defaultValue": "'normal'"
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsButtonMode",
          "resolved": "\"clear\" | \"plain\" | \"stroked\"",
          "references": {
            "WcsButtonMode": {
              "location": "import",
              "path": "./button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This attribute specify the appearance of the button."
        },
        "attribute": "mode",
        "reflect": true,
        "defaultValue": "'plain'"
      },
      "loading": {
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
          "text": "Flag to display spinner until the end of action"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "ripple",
        "methodName": "onRippleChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=button.js.map
