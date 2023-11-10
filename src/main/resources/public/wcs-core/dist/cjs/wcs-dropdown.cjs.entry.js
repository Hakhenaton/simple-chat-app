'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const selectArrow = require('./select-arrow-c9583ea9.js');
const helpers = require('./helpers-4a14051a.js');
const popper = require('./popper-e3b74571.js');

function isElementFocused(element) {
  return element === document.activeElement;
}

const dropdownCss = ":host{display:flex}wcs-button{--wcs-button-padding:8px 10px 8px 16px !important}:host([no-arrow]) wcs-button{--wcs-button-padding:8px 16px 8px 16px !important}:host([shape=small]) wcs-button{--wcs-button-padding:2px 10px 2px 16px !important}:host([shape=small][no-arrow]) wcs-button{--wcs-button-padding:2px 16px 2px 16px !important}.wcs-button-content-wrapper{display:flex}.popover{display:none;border:1px solid #d7d7d7;border-radius:var(--wcs-border-radius);background-color:var(--wcs-white);z-index:9999}.show{display:block}.container{border-radius:inherit;overflow:hidden;padding:calc(var(--wcs-padding) / 2) 0;background-color:var(--wcs-white)}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit;border:solid 1px #d7d7d7}#arrow{visibility:hidden;z-index:-1}#arrow::before{visibility:visible;content:\"\";transform:rotate(45deg)}.popover[data-popper-placement^=top]>#arrow{bottom:-5px}.popover[data-popper-placement^=bottom]>#arrow{top:-6px}.popover[data-popper-placement^=left]>#arrow{right:-4px}.popover[data-popper-placement^=right]>#arrow{left:-6px}";

const Dropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.noArrow = false;
    this.mode = 'stroked';
    this.shape = 'normal';
    this.disabled = false;
    this.placement = 'bottom-end';
    this.expanded = false;
  }
  placementChange() {
    this.popper.setOptions(Object.assign(Object.assign({}, this.popper.state.options), { placement: this.placement })).then(_ => this.popper.update());
  }
  componentDidLoad() {
    const wcsButtonElement = this.el.shadowRoot.querySelector('wcs-button');
    const buttonWrapper = wcsButtonElement.shadowRoot.querySelector('button');
    this.buttonTextColor = window.getComputedStyle(buttonWrapper).color;
    const popoverDiv = this.el.shadowRoot.querySelector('.popover');
    this.popper = popper.createPopper(wcsButtonElement, popoverDiv, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
    if (!this.noArrow) {
      this.el.shadowRoot.querySelector('.arrow').style.fill = this.buttonTextColor;
    }
    this.fixForFirefoxBelow63();
  }
  fixForFirefoxBelow63() {
    // If the items appear out of the slot we place them back
    const items = this.el.querySelectorAll('wcs-dropdown-item');
    const container = this.el.querySelector('.container');
    if (items.length > 0 && container) {
      items.forEach(i => {
        this.el.removeChild(i);
        container.appendChild(i);
      });
    }
  }
  onButtonClick(_) {
    this.expanded = !this.expanded;
  }
  onWindowClickEvent(event) {
    const clickedOnDropdownOrChildren = helpers.clickTargetIsElementOrChildren(event, this.el);
    if (this.expanded && !clickedOnDropdownOrChildren) {
      this.expanded = false;
    }
  }
  dropdownItemClick(_) {
    this.expanded = false;
  }
  onKeyDown(evt) {
    if (this.expanded && (helpers.isKeydown(evt) || helpers.isKeyup(evt))) {
      // If the user presses an arrow key (up or down), the browser is prevented from scrolling through
      evt.preventDefault();
      const items = Array.from(this.el.querySelectorAll('wcs-dropdown-item'));
      const currentFocusedItemIndex = items.findIndex(item => isElementFocused(item));
      // If the dropdown is expended by the user, but no item is focused and the keydown is pressed
      if (currentFocusedItemIndex === -1 && helpers.isKeydown(evt)) {
        this.focusFirstItemIfPresent(items);
      }
      else {
        this.moveFocusedItemByDirection(items, currentFocusedItemIndex, helpers.isKeydown(evt) ? 'down' : 'up');
      }
    }
    if (this.expanded && helpers.isEscapeKey(evt)) {
      this.closeOverlayAndFocusButton();
    }
  }
  focusFirstItemIfPresent(items) {
    if (items[0]) {
      items[0].focus();
    }
  }
  moveFocusedItemByDirection(items, currentFocusedItemIndex, direction) {
    const itemToFocus = items[(currentFocusedItemIndex) + (direction === 'down' ? 1 : -1)];
    if (itemToFocus) {
      itemToFocus.focus();
    }
  }
  closeOverlayAndFocusButton() {
    this.expanded = !this.expanded;
    const wcsButton = this.el.shadowRoot.querySelector('wcs-button');
    wcsButton.focus();
  }
  componentDidRender() {
    if (this.popper) {
      this.popper.update();
    }
    if (!this.noArrow) {
      this.el.shadowRoot.querySelector('.arrow').style.fill = this.buttonTextColor;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("wcs-button", { mode: this.mode, shape: this.shape, disabled: this.disabled, onClick: ($event) => this.onButtonClick($event) }, index.h("div", { class: "wcs-button-content-wrapper" }, index.h("slot", { name: "placeholder" }), this.noArrow ? null : (index.h(selectArrow.SelectArrow, { up: this.expanded })))), index.h("div", { class: (this.expanded ? 'show ' : '') + 'popover' }, index.h("div", { id: "arrow", "data-popper-arrow": true }), index.h("div", { class: "container" }, index.h("slot", { name: "item" })))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "placement": ["placementChange"]
  }; }
};
Dropdown.style = dropdownCss;

exports.wcs_dropdown = Dropdown;

//# sourceMappingURL=wcs-dropdown.cjs.entry.js.map