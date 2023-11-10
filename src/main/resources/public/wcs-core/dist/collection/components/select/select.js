import { h, Host } from '@stencil/core';
import { interpret, Machine } from 'xstate';
import { isWcsSelectSize, WcsSelectSizeValue } from './select-interface';
import { SelectArrow } from './select-arrow';
import { isDownArrowKey, isElement, isEnterKey, isEscapeKey, isHomeKey, isLeftArrowKey, isPageDownKey, isPageUpKey, isRightArrowKey, isTabKey, isUpArrowKey, generateUniqueId, findItemLabel, isSpaceKey, } from '../../utils/helpers';
import { SelectChips } from './select-chips';
import { MDCRipple } from '@material/ripple';
import { createPopper } from '@popperjs/core';
import { isEqual } from 'lodash-es';
const SELECT_MACHINE_CONFIG = {
  key: 'select',
  initial: 'closed',
  states: {
    closed: {
      entry: ['close'],
      on: {
        CLICK: 'opened',
        OPEN: 'opened',
        OPTION_SELECTED: { actions: ['selectOption'] }
      },
    },
    opened: {
      entry: ['open'],
      on: {
        CLICK: 'closed',
        CLOSE: 'closed',
        OPTION_SELECTED: { actions: ['selectOption'] }
      },
    },
  }
};
/**
 * Select component, use in conjuction with wcs-select-option.
 *
 * @example ```hmtl
 *  <wcs-select>
 *      <wcs-select-option value="1">One</wcs-select-option>
 *  </wcs-select>```
 */
export class Select {
  constructor() {
    this.selectId = `wcs-select-${selectIds++}`;
    this.optionsId = generateUniqueId("OPTIONS");
    this.expanded = false;
    this.size = 'm';
    this.hasLoaded = false;
    this.displayText = undefined;
    this.focused = undefined;
    this.value = undefined;
    this.placeholder = undefined;
    this.disabled = false;
    this.multiple = false;
    this.chips = false;
    this.name = undefined;
    this.compareWith = (optionValue, selectedValue) => isEqual(optionValue, selectedValue);
    this.overlayDirection = 'bottom';
  }
  /** Open the component. */
  async open() {
    this.stateService.send('OPEN');
  }
  /** Close the component. */
  async close() {
    this.stateService.send('CLOSE');
  }
  onValueChangeHandler(newValue) {
    this.updateSelectedValue(newValue);
    this.emitChange(this.value);
  }
  updateSelectedValue(value) {
    // If no value is passed, the select is reset.
    if (!value) {
      this.reset();
    }
    if (this.multiple) {
      // If user don't give an array, we provide one
      if (!Array.isArray(value)) {
        value = [value];
      }
      this.values = [];
      this.options.forEach((opt) => {
        const isSelected = value ?
          value.findIndex(v => this.compareWith(opt.value, v)) !== -1
          : false;
        if (isSelected) {
          this.values.push({
            value: opt.value,
            displayText: opt.innerText,
            chipColor: opt.chipColor,
            chipBackgroundColor: opt.chipBackgroundColor
          });
        }
        opt.selected = isSelected;
      });
      // update select placeholder text
      this.displayText = this.values.length !== 0
        ? this.values.map(v => v.displayText).join(', ')
        : undefined;
    }
    else {
      this.options.forEach((opt) => {
        const isSelected = this.compareWith(opt.value, value);
        if (isSelected) {
          this.displayText = opt.innerText;
        }
        opt.selected = isSelected;
      });
    }
  }
  /**
   * Reset the select: unselects all options for multiple mode and displays the placeholder
   * @private
   */
  reset() {
    this.values = [];
    this.displayText = undefined;
    this.options.forEach((opt) => {
      opt.selected = false;
    });
  }
  componentDidLoad() {
    this.optionsEl = this.el.shadowRoot.querySelector('.wcs-select-options');
    this.controlEl = this.el.shadowRoot.querySelector('.wcs-select-control');
    const stateMachine = Machine(SELECT_MACHINE_CONFIG, this.initMachineOptions());
    // FIXME: type checking failed...
    // @ts-ignore
    this.stateService = interpret(stateMachine);
    if (this.multiple) {
      this.values = [];
    }
    this.addRippleEffect();
    this.stateService.start();
    if (this.optionsEl.querySelector('slot') === null) {
      this.replaceOptions_firefoxBefore63();
      this.listenDomUpdate_firefoxBefore63();
    }
    if (this.value !== undefined) {
      this.updateSelectedValue(this.value);
    }
    this.popper = this.createPopperInstance();
    // if the select is inside a wcs-form-field, we set an id to the wcs-label if present
    // the wcs-label element reference is kept to compute aria-label value during the rendering
    this.labelElement = findItemLabel(this.el);
    if (this.labelElement) {
      this.labelElement.id = this.selectId + "-lbl";
    }
    // TODO: is this still usefull for anything ?
    this.hasLoaded = true;
  }
  createPopperInstance() {
    return createPopper(this.controlEl, this.optionsEl, {
      placement: "bottom",
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 4] // we want 4px between select control and select options
          }
        }
      ]
    });
  }
  emitChange(newValue) {
    this.wcsChange.emit({
      value: newValue
    });
  }
  replaceOptions_firefoxBefore63() {
    Array.from(this.el.querySelectorAll('wcs-select-option'))
      .forEach(option => {
      if (option.parentNode === this.el) {
        this.el.removeChild(option);
        this.optionsEl.appendChild(option);
      }
    });
  }
  listenDomUpdate_firefoxBefore63() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          this.replaceOptions_firefoxBefore63();
        }
      }
    });
    observer.observe(this.el, { childList: true });
  }
  componentWillLoad() {
    if (!isWcsSelectSize(this.size)) {
      console.error(`Invalid size value for wcs-select : "${this.size}". Must be one of "${WcsSelectSizeValue.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
  }
  componentWillUpdate() {
    if (this.multiple) {
      this.options
        .forEach((opt) => opt.multiple = true);
    }
  }
  get options() {
    var _a;
    const opts = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll('wcs-select-option');
    if (opts && opts.length !== 0) {
      return opts;
    }
    return [];
  }
  get notDisabledOptions() {
    var _a;
    const opts = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll('wcs-select-option:not([disabled])');
    if (opts && opts.length !== 0) {
      return opts;
    }
    return [];
  }
  initMachineOptions() {
    return {
      actions: {
        open: () => {
          var _a;
          if (!this.disabled) {
            this.expanded = true;
            this.focused = false;
            if (this.notDisabledOptions.length > 0) {
              this.lastFocusedOptionElement = (_a = this.lastSelectedOptionElement) !== null && _a !== void 0 ? _a : this.notDisabledOptions[0];
              requestAnimationFrame(() => {
                var _a;
                (_a = this.lastFocusedOptionElement) === null || _a === void 0 ? void 0 : _a.focus();
              });
            }
          }
        },
        close: (_, event) => {
          var _a, _b;
          if (event.type === 'CLOSE') {
            if ((_a = event.value) === null || _a === void 0 ? void 0 : _a.shouldBlur) {
              (_b = this.el.closest("wcs-select")) === null || _b === void 0 ? void 0 : _b.focus();
              this.focused = false;
            }
            else {
              this.el.focus();
              this.focused = true;
            }
          }
          this.expanded = false;
        },
        selectOption: (_, event) => {
          if (event.type === 'OPTION_SELECTED') {
            this.handleClickEvent(event.value);
          }
        }
      },
      guards: {
        enabled: () => !this.disabled
      }
    };
  }
  handleClickEvent(event) {
    if (this.multiple) {
      this.handleClickOnMultiple(event);
    }
    else {
      this.handleNormalClick(event);
    }
  }
  handleClickOnMultiple(event) {
    const index = this.values.findIndex(v => v.value === event.value);
    if (index === -1) {
      const { value, displayText, chipColor, chipBackgroundColor } = event;
      this.values.push({ value, displayText, chipColor, chipBackgroundColor });
      event.source.selected = true;
      this.lastSelectedOptionElement = event.source;
    }
    else {
      event.source.selected = false;
      this.values.splice(index, 1);
      if (this.lastSelectedOptionElement === event.source)
        this.lastSelectedOptionElement = null;
    }
    this.updateValueWithValues();
  }
  updateValueWithValues() {
    this.value = this.values.map(v => v.value);
    this.displayText = this.values.length !== 0
      ? this.values.map(v => v.displayText).join(', ')
      : undefined;
  }
  handleNormalClick(event) {
    // Reset other options to false if they were selected.
    this.options
      .forEach(option => {
      if (option.selected)
        option.selected = false;
    });
    event.source.selected = true;
    this.value = event.value;
    this.displayText = event.displayText;
    this.lastSelectedOptionElement = event.source;
    this.stateService.send('CLOSE');
  }
  disconnectedCallback() {
    var _a;
    (_a = this.stateService) === null || _a === void 0 ? void 0 : _a.stop();
  }
  addRippleEffect() {
    // TODO: wrap MDCRipple dependency so we can eventually write our own or at least decouple a bit.
    const ripple = new MDCRipple(this.controlEl);
    ripple.unbounded = false;
  }
  get hasValue() {
    // TODO: change this behavior.
    return this.displayText !== undefined;
  }
  onMouseDown(event) {
    const clickOnScroll = isElement(event.target)
      && (event.offsetX > event.target.clientWidth
        || event.offsetY > event.target.clientHeight // If the click il located bellow the component height the click happen in the overlay
        || event.offsetY < 0); // If the click is made above the component
    const clickOnRemoveChip = event.composedPath()
      .filter(x => {
      const el = x;
      return el.nodeName === 'svg' && el.classList.contains('chip');
    })
      .length > 0;
    if (!clickOnScroll && !clickOnRemoveChip) {
      this.stateService.send('CLICK');
    }
  }
  onWindowClickEvent(event) {
    const firstSelectInEventPath = event.composedPath().filter(x => x.nodeName === 'WCS-SELECT')[0];
    const clickOnCurrentSelect = firstSelectInEventPath === this.el;
    // TODO: Move this logic in the state machine
    // FIXME: Doesnt work with single + disabled option
    if (this.expanded && !clickOnCurrentSelect) {
      this.stateService.send('CLOSE');
    }
  }
  onKeyDown(_event) {
    // close
    if (this.stateService.getSnapshot().matches("closed")) {
      if (isEnterKey(_event) || (_event.altKey && isDownArrowKey(_event)) || isSpaceKey(_event)) {
        _event.preventDefault();
        _event.stopPropagation();
        this.stateService.send('OPEN');
        return;
      }
      if (this.multiple) {
        if (isDownArrowKey(_event)) {
          this.stateService.send('OPEN');
        }
      }
      else {
        if (isDownArrowKey(_event) || isRightArrowKey(_event)) {
          _event.preventDefault();
          this.selectClosestOption("next");
        }
        if (isUpArrowKey(_event) || isLeftArrowKey(_event)) {
          _event.preventDefault();
          this.selectClosestOption("previous");
        }
        else if (isPageDownKey(_event)) {
          _event.preventDefault();
          this.selectLastOption();
        }
        else if (isPageUpKey(_event) || isHomeKey(_event)) {
          _event.preventDefault();
          this.selectFirstOption();
        }
      }
    }
    // open
    else if (this.stateService.getSnapshot().matches("opened")) {
      if (isEscapeKey(_event) || (_event.altKey && isUpArrowKey(_event))) {
        this.stateService.send({ type: "CLOSE", value: { shouldBlur: false } });
      }
      else if (isTabKey(_event) || (_event.shiftKey && isTabKey(_event))) {
        this.stateService.send({ type: "CLOSE", value: { shouldBlur: true } });
      }
      else if (isDownArrowKey(_event)) {
        _event.preventDefault();
        this.focusClosestOption("next");
      }
      else if (isUpArrowKey(_event)) {
        _event.preventDefault();
        this.focusClosestOption("previous");
      }
      else if (isPageUpKey(_event) || isHomeKey(_event)) {
        _event.preventDefault();
        this.focusFirstOption();
      }
      else if (isPageDownKey(_event)) {
        _event.preventDefault();
        this.focusLastOption();
      }
    }
  }
  getClosestActiveOptionIndexForState(direction, state) {
    let currentIndex = Array.from(this.notDisabledOptions).indexOf(state === 'focused' ? this.lastFocusedOptionElement : this.lastSelectedOptionElement);
    if (direction === 'next' && currentIndex < this.notDisabledOptions.length - 1) {
      currentIndex++;
    }
    else if (direction === 'previous' && currentIndex > 0) {
      currentIndex--;
    }
    else {
      return 'nothing';
    }
    return currentIndex;
  }
  selectOption(indexToSelect) {
    this.lastSelectedOptionElement = this.notDisabledOptions[indexToSelect];
    this.lastSelectedOptionElement.selected = true;
    this.sendOptionSelectedToStateMachine({
      source: this.lastSelectedOptionElement,
      value: this.value,
      displayText: this.lastSelectedOptionElement.innerText
    });
  }
  selectClosestOption(direction) {
    const indexToSelect = this.getClosestActiveOptionIndexForState(direction, 'selected');
    if (indexToSelect === 'nothing')
      return;
    this.selectOption(indexToSelect);
  }
  selectFirstOption() {
    if (this.notDisabledOptions.length < 1) {
      return;
    }
    this.selectOption(0);
  }
  selectLastOption() {
    if (this.notDisabledOptions.length < 1) {
      return;
    }
    this.selectOption(this.notDisabledOptions.length - 1);
  }
  focusOption(indexToFocus) {
    var _a;
    this.lastFocusedOptionElement = this.notDisabledOptions[indexToFocus];
    (_a = this.lastFocusedOptionElement) === null || _a === void 0 ? void 0 : _a.focus();
    this.el.setAttribute("aria-activedescendant", this.lastFocusedOptionElement.id);
  }
  focusClosestOption(direction) {
    const indexToFocus = this.getClosestActiveOptionIndexForState(direction, 'focused');
    if (indexToFocus === 'nothing')
      return;
    this.focusOption(indexToFocus);
  }
  focusFirstOption() {
    this.focusOption(0);
  }
  focusLastOption() {
    this.focusOption(this.notDisabledOptions.length - 1);
  }
  selectedOptionChanged(event) {
    this.sendOptionSelectedToStateMachine(event.detail);
  }
  sendOptionSelectedToStateMachine(event) {
    this.stateService.send({ type: 'OPTION_SELECTED', value: event });
  }
  onSlotchange() {
    this.updateSelectedValue(this.value);
  }
  removeChip(v) {
    this.options
      .forEach(opt => {
      if (opt.value === v.value) {
        this.sendOptionSelectedToStateMachine(Object.assign(Object.assign({}, v), { source: opt }));
      }
    });
  }
  componentDidRender() {
    var _a;
    (_a = this.popper) === null || _a === void 0 ? void 0 : _a.update();
  }
  render() {
    const ariaLabelValue = `${this.labelElement ? this.labelElement.innerText : ''} ${this.hasValue ? this.displayText : ''}`.trimEnd();
    return (h(Host, Object.assign({ class: this.expanded ? 'expanded ' : '', overlayDirection: this.overlayDirection }, this.focusedAttributes(), { role: "combobox", "aria-haspopup": "listbox", "aria-disabled": this.disabled ? 'true' : null, "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.optionsId, "aria-owns": this.optionsId, "aria-multiselectable": this.multiple ? 'true' : 'false', "aria-label": ariaLabelValue }), h("div", { class: "wcs-select-control" }, h("div", { class: "wcs-select-value-container" }, this.hasValue
      ?
        (this.chips ?
          this.values.map((option) => h(SelectChips, { disabled: this.disabled, option: option, onRemove: this.removeChip.bind(this) }))
          : h("label", { class: "wcs-select-value" }, this.displayText))
      : h("label", { class: "wcs-select-placeholder" }, this.placeholder)), h(SelectArrow, { up: this.expanded })), h("div", { class: "wcs-select-options", id: this.optionsId, role: "listbox" }, h("slot", { name: "wcs-select-option", onSlotchange: this.onSlotchange.bind(this) }))));
  }
  focusedAttributes() {
    return !this.disabled ? { tabIndex: 0 } : {};
  }
  static get is() { return "wcs-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsSelectSize",
          "resolved": "\"l\" | \"m\"",
          "references": {
            "WcsSelectSize": {
              "location": "import",
              "path": "./select-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specify the size (height) of the select."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any | null",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The currently selected value."
        },
        "attribute": "value",
        "reflect": false
      },
      "placeholder": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The text to display when the select is empty."
        },
        "attribute": "placeholder",
        "reflect": true
      },
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
          "text": "If `true`, the user cannot interact with the select."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "multiple": {
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
          "text": "If `true`, the user can select multiple values at once."
        },
        "attribute": "multiple",
        "reflect": true,
        "defaultValue": "false"
      },
      "chips": {
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
          "text": "If `true`, selected items are shown in chips mode."
        },
        "attribute": "chips",
        "reflect": true,
        "defaultValue": "false"
      },
      "name": {
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
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false
      },
      "compareWith": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(optionValue: any, selectedValue: any) => boolean",
          "resolved": "(optionValue: any, selectedValue: any) => boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Function used to compare options, default : deep comparison."
        },
        "defaultValue": "(optionValue, selectedValue) => isEqual(optionValue, selectedValue)"
      }
    };
  }
  static get states() {
    return {
      "expanded": {},
      "hasLoaded": {},
      "displayText": {},
      "focused": {},
      "overlayDirection": {}
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
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "SelectChangeEventDetail",
          "resolved": "SelectChangeEventDetail",
          "references": {
            "SelectChangeEventDetail": {
              "location": "import",
              "path": "./select-interface"
            }
          }
        }
      }, {
        "method": "wcsFocus",
        "name": "wcsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select has focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "wcsBlur",
        "name": "wcsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "open": {
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
          "text": "Open the component.",
          "tags": []
        }
      },
      "close": {
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
          "text": "Close the component.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChangeHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "mousedown",
        "method": "onMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "click",
        "method": "onWindowClickEvent",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "wcsSelectOptionClick",
        "method": "selectedOptionChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
let selectIds = 0;
//# sourceMappingURL=select.js.map
