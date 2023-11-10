import { h, Host } from '@stencil/core';
// We use the Tippy.js library for the tooltip. At first by using directly the styles of tippy because
// the design system does not specify any spec for the tooltips.
//
// In a second time, if a need of customization is felt, it will be possible to use the lib in a
// "Headless" mode where the rendering of the tooltip will be entirely in our charge, without
// modifications in the API : https://atomiks.github.io/tippyjs/v6/headless-tippy/
import tippy from 'tippy.js';
/**
 * Tooltips are used to provide additional information for features available on the website. These can improve the user
 * experience or simply show additional information. Tooltips appear when the user rolls over or clicks on them
 * (for longer content).
 *
 * Note that this component is based on the Tippy.js library : https://atomiks.github.io/tippyjs/
 */
export class Tooltip {
  constructor() {
    this.for = undefined;
    this.position = 'bottom';
    this.interactive = false;
    this.maxWidth = 350;
    this.delay = 0;
    this.duration = [300, 250];
    this.trigger = 'mouseenter focus';
    this.theme = 'wcs';
    this.content = undefined;
    this.appendTo = undefined;
  }
  componentWillLoad() {
    this.tippyInstance = tippy(document.getElementById(this.for), {
      appendTo: this.appendTo || (() => document.body),
      theme: this.theme,
      allowHTML: true,
      content: this.getTooltipContentFromPropAndSlot(),
      maxWidth: this.maxWidth,
      placement: this.position,
      delay: this.delay,
      duration: this.duration,
      interactive: this.interactive,
      trigger: this.trigger
    });
  }
  getTooltipContentFromPropAndSlot() {
    if (this.content) {
      return this.content + this.el.innerHTML;
    }
    return this.el.innerHTML;
  }
  updateProps() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.setProps({
      interactive: this.interactive,
      placement: this.position,
      maxWidth: this.maxWidth,
      theme: this.theme,
      delay: this.delay,
      duration: this.duration,
      trigger: this.trigger
    });
  }
  updateTippyContent() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.setProps({
      content: this.getTooltipContentFromPropAndSlot()
    });
  }
  /**
   * Programmatically hide the tooltip
   */
  async hide() {
    this.tippyInstance.hide();
  }
  /**
   * Programmatically show the tooltip
   */
  async show() {
    this.tippyInstance.show();
  }
  /**
   * Temporarily prevent the tooltip from showing or hiding
   */
  async disable() {
    this.tippyInstance.disable();
  }
  /**
   * Re-enable a disabled tooltip
   */
  async enable() {
    this.tippyInstance.enable();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: _ => this.updateTippyContent() })));
  }
  static get is() { return "wcs-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tooltip.css"]
    };
  }
  static get properties() {
    return {
      "for": {
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
          "tags": [{
              "name": "example",
              "text": "```html\n<span id=\"tooltiped\">Some content</span>\n<wcs-tooltip for=\"tooltiped\">A tooltip!</wcs-tooltip>\n```"
            }],
          "text": "The **id** of the element the tooltip's going to describe.\n\nThis property cannot be modified after initialization."
        },
        "attribute": "for",
        "reflect": false
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsTooltipPosition",
          "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
          "references": {
            "WcsTooltipPosition": {
              "location": "import",
              "path": "./tooltip-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Where the tooltip is going to show relative to the element it's describing."
        },
        "attribute": "position",
        "reflect": true,
        "defaultValue": "'bottom'"
      },
      "interactive": {
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
          "text": "Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside\nwithout hiding."
        },
        "attribute": "interactive",
        "reflect": false,
        "defaultValue": "false"
      },
      "maxWidth": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the maximum width of the tooltip. Useful to prevent it from being too horizontally wide to read.\n\nIf the viewport's width is smaller than maxWidth, core CSS ensures the tippy remains smaller than the screen."
        },
        "attribute": "max-width",
        "reflect": false,
        "defaultValue": "350"
      },
      "delay": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number | [number, number]",
          "resolved": "[number, number] | number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Delay in ms once a trigger event is fired before the tooltip shows or hides.\n\nYou can provide an array with two values to define a different duration for show and hide.\n\n`[showDelay, hideDelay]`\n\nUse null to use default value."
        },
        "attribute": "delay",
        "reflect": false,
        "defaultValue": "0"
      },
      "duration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number | [number, number]",
          "resolved": "[number, number] | number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Duration in ms of the transition animation."
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "[300, 250]"
      },
      "trigger": {
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
          "text": "Determines the events that cause the tooltip to show. Multiple event names are separated by spaces.\n\nSee: https://atomiks.github.io/tippyjs/v6/all-props/#trigger"
        },
        "attribute": "trigger",
        "reflect": false,
        "defaultValue": "'mouseenter focus'"
      },
      "theme": {
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
          "text": "Allows you to change the theme used by tippy.\n\nThe WCS theme is used by default and uses the WCS CSS variables.\n\nYou can create a theme by following this documentation and choosing a custom name :\nhttps://atomiks.github.io/tippyjs/v6/themes/"
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'wcs'"
      },
      "content": {
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
          "text": "You can use this property instead of the slot API to affect content in the tooltip.\n\nThis makes it easier to manage the update if the tooltip contains elements that are not mutated when their\ncontent changes. Indeed, if the slot is used, the tooltip is updated only if the structure of the slotted DOM\nchanges (the DOM must be mutated).\n\nThe two APIs are not mutually exclusive, if both are filled in (the prop + the slot) the rendering will first\ndisplay the content of this property and then the slotted elements."
        },
        "attribute": "content",
        "reflect": false
      },
      "appendTo": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsTooltipAppendTo",
          "resolved": "\"parent\" | ((ref: Element) => Element) | Element",
          "references": {
            "WcsTooltipAppendTo": {
              "location": "import",
              "path": "./tooltip-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The element to append the tooltip to. Default behaviour is `() => document.body`. If interactive: true,\nthe default behavior is appendTo: \"parent\"\n\nSee: https://atomiks.github.io/tippyjs/v6/all-props/#appendto"
        },
        "attribute": "append-to",
        "reflect": false
      }
    };
  }
  static get methods() {
    return {
      "hide": {
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
          "text": "Programmatically hide the tooltip",
          "tags": []
        }
      },
      "show": {
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
          "text": "Programmatically show the tooltip",
          "tags": []
        }
      },
      "disable": {
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
          "text": "Temporarily prevent the tooltip from showing or hiding",
          "tags": []
        }
      },
      "enable": {
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
          "text": "Re-enable a disabled tooltip",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "interactive",
        "methodName": "updateProps"
      }, {
        "propName": "position",
        "methodName": "updateProps"
      }, {
        "propName": "maxWidth",
        "methodName": "updateProps"
      }, {
        "propName": "theme",
        "methodName": "updateProps"
      }, {
        "propName": "delay",
        "methodName": "updateProps"
      }, {
        "propName": "duration",
        "methodName": "updateProps"
      }, {
        "propName": "trigger",
        "methodName": "updateProps"
      }, {
        "propName": "content",
        "methodName": "updateTippyContent"
      }];
  }
}
//# sourceMappingURL=tooltip.js.map
