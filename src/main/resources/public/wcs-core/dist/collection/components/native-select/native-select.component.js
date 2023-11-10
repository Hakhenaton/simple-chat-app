import { h, Host } from '@stencil/core';
import { SelectArrow } from '../select/select-arrow';
/**
 * The `wcs-native-select` component is designed to accept a native <select> element as a slotted child. This choice
 * allows developers to bind the <select> element using the framework of their choice, without the need to re-expose all the
 * properties of the <select> and <option> elements in this component.
 *
 * The component wraps the native <select> element and provides custom styles and behavior, while preserving the native
 * functionality and accessibility.
 *
 * Example usage:
 *
 * <wcs-native-select>
 *   <select>
 *     <option value="option1">Option 1</option>
 *     <option value="option2">Option 2</option>
 *     <option value="option3">Option 3</option>
 *   </select>
 * </wcs-native-select>
 */
export class NativeSelect {
  constructor() {
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
  static get is() { return "wcs-native-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["native-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["native-select.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsNativeSelectSize",
          "resolved": "\"l\" | \"m\"",
          "references": {
            "WcsNativeSelectSize": {
              "location": "local",
              "path": "/builds/SNCF/wcs/src/components/native-select/native-select.component.tsx"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The `size` property controls the size of the slotted `select` element by adjusting its padding.\nThere are two possible size options:\n- 'm': medium size\n- 'l': large size\n\nThe default value is 'm'."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      }
    };
  }
  static get states() {
    return {
      "expanded": {},
      "disabled": {}
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=native-select.component.js.map
