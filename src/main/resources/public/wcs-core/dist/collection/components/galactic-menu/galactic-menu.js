import { h, Host } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import { clickInsideElement } from '../../utils/helpers';
export class Galactic {
  constructor() {
    this.showPopoverMenu = false;
    this.text = undefined;
  }
  componentDidLoad() {
    this.menu = this.el.shadowRoot.getElementById('toggle-menu-icon');
    this.tooltip = this.el.shadowRoot.getElementById('menu');
    this.popper = createPopper(this.menu, this.tooltip, {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
  }
  onWindowClickEvent(event) {
    if (clickInsideElement(event, this.tooltip) || clickInsideElement(event, this.menu)) {
      return;
    }
    else {
      if (this.showPopoverMenu) {
        this.toogleMenu();
      }
    }
  }
  toogleMenu() {
    this.showPopoverMenu = !this.showPopoverMenu;
  }
  componentDidRender() {
    if (this.popper) {
      this.popper.update();
    }
  }
  render() {
    return (h(Host, null, h("span", null, this.text), h("wcs-mat-icon", { id: "toggle-menu-icon", icon: "more_horiz", size: "m", onClick: _ => {
        this.toogleMenu();
      } }), h("span", { id: "menu", "data-show": this.showPopoverMenu }, h("div", { id: "arrow", "data-popper-arrow": true }), h("slot", null))));
  }
  static get is() { return "wcs-galactic-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["galactic-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["galactic-menu.css"]
    };
  }
  static get properties() {
    return {
      "text": {
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
          "text": "Text to be displayed in the galactic bar"
        },
        "attribute": "text",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "showPopoverMenu": {}
    };
  }
  static get elementRef() { return "el"; }
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
//# sourceMappingURL=galactic-menu.js.map
