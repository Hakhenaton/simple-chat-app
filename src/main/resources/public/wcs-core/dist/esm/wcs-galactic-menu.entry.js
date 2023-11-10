import { r as registerInstance, h, H as Host, g as getElement } from './index-dc4d96d4.js';
import { h as clickInsideElement } from './helpers-1f7170dd.js';
import { c as createPopper } from './popper-c7cca1bc.js';

const galacticMenuCss = "#menu{background-color:var(--wcs-gray);color:white;display:none;padding:var(--wcs-padding)}#menu[data-show]{display:block;z-index:9999}#menu[data-popper-placement^=top]>#arrow{bottom:-4px}#menu[data-popper-placement^=bottom]>#arrow{top:-4px}#menu[data-popper-placement^=left]>#arrow{right:-4px}#menu[data-popper-placement^=right]>#arrow{left:-4px}:host{display:flex;align-items:center;height:32px;padding-left:var(--wcs-padding);background-color:var(--wcs-gray-light)}#toggle-menu-icon{cursor:pointer;padding:0 var(--wcs-padding);user-select:none}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit}#arrow{visibility:hidden}#arrow::before{visibility:visible;content:\"\";transform:rotate(45deg)}";

const Galactic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
Galactic.style = galacticMenuCss;

export { Galactic as wcs_galactic_menu };

//# sourceMappingURL=wcs-galactic-menu.entry.js.map