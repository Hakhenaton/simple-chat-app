'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');

const comNavCategoryCss = ":host{display:block;padding-bottom:var(--wcs-padding);}:host .label-container{display:block;padding-left:calc(9 * var(--wcs-base-margin));color:var(--wcs-gray)}:host ::slotted(a):after{font-family:icons;padding-left:var(--wcs-base-margin);font-size:0.6rem;content:\"\\f107\";line-height:1;box-sizing:border-box}:host ::slotted(a){display:block;cursor:pointer;text-decoration:none;font-size:16px;color:var(--wcs-gray);padding-left:calc(12 * var(--wcs-base-margin));padding-top:calc(1.5 * var(--wcs-base-margin));padding-bottom:calc(1.5 * var(--wcs-base-margin))}:host ::slotted(a:focus-visible){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host ::slotted(a:focus-within){outline:2px dashed var(--wcs-primary);outline-offset:0.1rem;border-radius:2px}}@media screen and (min-width: 576px){:host{padding-bottom:unset}:host .item-container:not([data-open]){display:none}:host .label:after{font-family:icons;padding-left:var(--wcs-base-margin);font-size:0.6rem;content:\"\\f107\";line-height:1;box-sizing:border-box}:host .label-container{cursor:pointer;user-select:none;display:flex;align-items:center;padding-left:unset;color:var(--wcs-white)}:host .label-container:focus-visible{outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:5px}@supports not selector(.label-container:focus-visible){:host .label-container:focus-within{outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:5px}}:host .label-container[data-open]:after{position:absolute;left:calc(50% + var(--wcs-com-content-max-width) / 8 - 0.5625rem);z-index:2;display:block;width:1.125rem;height:1.125rem;content:\"\";background-color:var(--wcs-primary);transform:rotate(45deg)}:host .item-container[data-open]{position:absolute;left:calc(50% + var(--wcs-com-content-max-width) / 8);top:0;right:0;padding:50px 0 50px 50px;background-blend-mode:multiply;background-color:rgba(0, 0, 0, 0.15);box-sizing:border-box;height:100%;display:flex;flex-direction:column;align-items:start}:host .item-container[data-open] ::slotted(a:not(:first-child)){margin-top:24px}:host .item-container[data-open] ::slotted(a){display:unset;color:var(--wcs-white);padding-left:unset;padding-top:unset;padding-bottom:unset}:host .item-container[data-open] ::slotted(a:focus-visible){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}@supports not selector(::slotted(a:focus-visible)){:host .item-container[data-open] ::slotted(a:focus-within){outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:2px}}}";

const ComNavCategory = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsCategoryOpened = index.createEvent(this, "wcsCategoryOpened", 7);
    this.wcsCategoryItemClicked = index.createEvent(this, "wcsCategoryItemClicked", 7);
    this.label = undefined;
    this.categoryOpen = false;
  }
  onWindowClickEvent(_) {
    if (this.categoryOpen)
      this.categoryOpen = false;
  }
  onSubmenuOpened(event) {
    if (event.detail.categoryElement !== this.el) {
      this.categoryOpen = false;
    }
  }
  /**
   * Open the menu if it is closed and closed the menu if it is already opened
   * @param _event the keyboard event
   * @private
   */
  handleMenuKeyDown(_event) {
    if ((helpers.isSpaceKey(_event)) || helpers.isEnterKey(_event)) {
      this.categoryOpen = !this.categoryOpen;
    }
  }
  /**
   * Handle key down on category items
   * @param _event the keyboard event
   * @private
   */
  handleCategoryItemsKeyDown(_event) {
    if ((helpers.isSpaceKey(_event)) || helpers.isEnterKey(_event)) {
      this.handleItemClick(_event);
    }
  }
  /**
   * Close the category
   */
  async close() {
    this.categoryOpen = false;
  }
  /**
   * Opens the category
   */
  async open() {
    this.categoryOpen = true;
  }
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  onClick(evt) {
    evt.stopPropagation();
    this.wcsCategoryOpened.emit({ categoryElement: this.el });
  }
  /**
   * Close the category and fire item click if we detect a mouse click on a slotted `a` element.
   * @param evt
   * @private
   */
  handleItemClick(evt) {
    if (evt.target.tagName === 'A') {
      this.close();
      this.wcsCategoryItemClicked.emit(evt);
    }
  }
  render() {
    return (index.h(index.Host, { onClick: evt => this.onClick(evt) }, index.h("div", { tabindex: screen.width < 576 ? "-1" : "0", class: "label-container", "data-open": this.categoryOpen, onKeyDown: evt => this.handleMenuKeyDown(evt), onClick: _ => this.categoryOpen = !this.categoryOpen }, index.h("span", { class: "label" }, this.label)), index.h("div", { class: "item-container", tabIndex: -1, "data-open": this.categoryOpen, onKeyDown: evt => this.handleCategoryItemsKeyDown(evt), onClick: (evt) => this.handleItemClick(evt) }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
ComNavCategory.style = comNavCategoryCss;

exports.wcs_com_nav_category = ComNavCategory;

//# sourceMappingURL=wcs-com-nav-category.cjs.entry.js.map