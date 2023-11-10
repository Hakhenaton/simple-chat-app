import { r as registerInstance, h, H as Host, g as getElement } from './index-dc4d96d4.js';
import { S as SelectArrow } from './select-arrow-81d069f7.js';

const nativeSelectCss = ":host{box-sizing:border-box}::slotted(select){box-sizing:border-box;-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;--wcs-select-native-ligther-percentage:40;--wcs-select-native-border-radius:var(--wcs-border-radius);--wcs-select-native-background-color:var(--wcs-light);--wcs-select-native-placeholder-color:var(--wcs-text-medium);--wcs-select-native-value-color:var(--wcs-primary);--wcs-select-native-border-color:transparent;--wcs-select-native-overlay-max-height:360px;--wcs-select-native-border-width:2px;background-color:var(--wcs-select-native-background-color);color:var(--wcs-select-native-color);border-radius:var(--wcs-border-radius);border:none;outline:none;user-select:none;cursor:pointer;line-height:1.5;font-size:1rem;max-width:100%;flex-grow:1;padding-right:calc(var(--wcs-base-margin) * 2 + 24px);padding-left:calc(var(--wcs-base-margin) * 2)}::slotted(select:disabled){cursor:not-allowed;color:var(--wcs-text-disabled)}:host([data-disabled]) .select-wrapper .arrow-container .arrow{fill:var(--wcs-text-medium)}:host([data-size=m]) ::slotted(select){height:var(--wcs-size-m)}:host([data-size=l]) ::slotted(select){height:var(--wcs-size-l)}::slotted(select:focus){background-clip:padding-box;box-shadow:inset 0 0 0 var(--wcs-select-native-border-width) var(--wcs-primary);background-color:var(--wcs-white)}.select-wrapper{position:relative;display:flex;flex-wrap:nowrap}svg{flex-shrink:0}.arrow{fill:var(--wcs-primary)}.arrow-container{pointer-events:none;display:flex;align-items:center;vertical-align:center;position:absolute;top:0;bottom:0;right:calc(var(--wcs-padding) - 1px);margin:auto 0}";

const NativeSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.SLOTTED_SELECT_TRACKED_ATTRIBUTES_LIST = ['disabled'];
    this.size = 'm';
    this.expanded = false;
    this.disabled = undefined;
  }
  componentWillLoad() {
    this.selectElement = this.el.querySelector('select');
    if (!this.selectElement)
      throw new Error("wcs-native-select must be used with a native slotted select, please refer to the documentation.");
    this.onSelectedOptionChange();
    /**
     * We use an event listener to apply the default style to the select when user chose an active option
     */
    this.selectElement.addEventListener('change', () => {
      this.onSelectedOptionChange();
    });
    this.observer = new MutationObserver(mutations => {
      const hasSpiedAttrMutation = mutations.filter(m => this.SLOTTED_SELECT_TRACKED_ATTRIBUTES_LIST.includes(m.attributeName)).length > 0;
      if (hasSpiedAttrMutation) {
        this.updateHostAttributeWithSlottedSelect();
      }
    });
    this.updateHostAttributeWithSlottedSelect();
    this.observer.observe(this.selectElement, { attributes: true });
  }
  onSelectedOptionChange() {
    if (this.isPlaceholderOptionSelected()) {
      this.applyPlaceholderStylesOnNativeSlottedSelectElement();
    }
    else {
      this.applySelectedOptionStylesOnNativeSlottedSelectElement();
    }
  }
  isPlaceholderOptionSelected() {
    var _a;
    return ((_a = Array.from(this.selectElement.options).filter(o => o.selected)[0]) === null || _a === void 0 ? void 0 : _a.disabled) == true;
  }
  /**
   * This method should always unset all styles modified by the `applyPlaceholderStylesOnNativeSlottedSelectElement()`
   * @private
   */
  applySelectedOptionStylesOnNativeSlottedSelectElement() {
    this.selectElement.style.color = "var(--wcs-primary)";
    this.selectElement.style.fontStyle = 'normal';
    this.selectElement.style.fontWeight = '500';
    Array.from(this.selectElement.options).forEach(option => {
      option.style.fontStyle = 'normal';
      if (!option.disabled) {
        option.style.color = "black";
      }
    });
  }
  /**
   * This method apply styles when the placeholder is shown.
   *
   * We use javascript because we cannot achieve that behaviour in pure css when the native select is not required
   * @private
   */
  applyPlaceholderStylesOnNativeSlottedSelectElement() {
    this.selectElement.style.color = "var(--wcs-text-medium)";
    this.selectElement.style.fontWeight = '400';
    this.selectElement.style.fontStyle = 'italic';
    Array.from(this.selectElement.options).forEach(option => {
      option.style.fontStyle = 'normal';
      if (!option.disabled) {
        option.style.color = "black";
      }
    });
  }
  updateHostAttributeWithSlottedSelect() {
    var _a;
    this.disabled = (_a = this.selectElement) === null || _a === void 0 ? void 0 : _a.hasAttribute('disabled');
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.selectElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("change", () => {
      this.onSelectedOptionChange();
    });
  }
  render() {
    return (h(Host, { class: `${this.expanded ? 'expanded' : ''}`, "data-disabled": this.disabled, "data-size": this.size }, h("div", { class: "select-wrapper" }, h("slot", null), h("div", { class: "arrow-container" }, h(SelectArrow, { up: this.expanded })))));
  }
  get el() { return getElement(this); }
};
NativeSelect.style = nativeSelectCss;

export { NativeSelect as wcs_native_select };

//# sourceMappingURL=wcs-native-select.entry.js.map