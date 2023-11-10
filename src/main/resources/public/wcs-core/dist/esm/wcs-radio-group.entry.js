import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-dc4d96d4.js';

const radioGroupCss = ":host{display:flex}:host([mode=radio]){flex-direction:column}:host([mode=radio]) ::slotted([slot=option]:first-child){margin-top:0}:host([mode=radio]) ::slotted([slot=option]:last-child){margin-bottom:0}:host([mode=radio]) ::slotted([slot=options]){margin-top:calc(var(--wcs-base-margin) / 2);margin-bottom:calc(var(--wcs-base-margin) / 2)}:host([mode=option]){display:inline-flex;flex-direction:row;padding:calc(var(--wcs-base-margin) / 4);background-color:#4d4f53;border-radius:0.6875rem}:host([mode=horizontal]){justify-content:space-between}";

const RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.value = undefined;
    this.name = undefined;
    this.mode = 'radio';
  }
  onValueChangeHandler(newValue) {
    this.updateOptionsState(newValue, true);
  }
  componentDidLoad() {
    if (this.value) {
      this.updateOptionsState(this.value, true);
    }
    if (this.mode === 'option' || this.mode === 'horizontal') {
      for (const option of this.options) {
        option.mode = this.mode;
      }
    }
  }
  get options() {
    const opts = this.el.querySelectorAll('wcs-radio');
    const slot = this.el.querySelector('slot');
    return opts.length !== 0
      ? opts
      : slot !== null
        ? slot.assignedElements()
        : [];
  }
  selectedOptionChanged(event) {
    this.updateOptionsState(event.detail.value, false);
    this.wcsChange.emit({
      value: event.detail.value
    });
  }
  updateOptionsState(value, markAsChecked) {
    for (const option of this.options) {
      if (option.value !== value) {
        option.removeAttribute('checked');
      }
      else {
        if (markAsChecked) {
          option.setAttribute('checked', '');
        }
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", { name: "option" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["onValueChangeHandler"]
  }; }
};
RadioGroup.style = radioGroupCss;

export { RadioGroup as wcs_radio_group };

//# sourceMappingURL=wcs-radio-group.entry.js.map