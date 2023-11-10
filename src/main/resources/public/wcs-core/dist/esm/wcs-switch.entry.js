import { r as registerInstance, c as createEvent, h, H as Host } from './index-dc4d96d4.js';

const switchCss = ":host{--wcs-switch-background-color-initial:var(--wcs-text-light);--wcs-switch-background-color-final:var(--wcs-primary);--wcs-switch-bullet-color-initial:var(--wcs-switch-background-color-final);--wcs-switch-bullet-color-final:var(--wcs-switch-background-color-initial);--wcs-switch-text-color:var(--wcs-text-medium);display:flex}:host([disabled]){--wcs-switch-text-color:var(--wcs-text-disabled)}:host([disabled]) .wcs-container{cursor:not-allowed}.wcs-container{position:relative;display:flex;margin-bottom:0}:host input:focus-visible+.wcs-checkmark{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:0.75rem}:host([label-alignment=top]) .wcs-container{align-items:start}:host([label-alignment=center]) .wcs-container{align-items:center}:host([label-alignment=bottom]) .wcs-container{align-items:flex-end}.wcs-container input{position:absolute;opacity:0;height:0;width:0}.text{color:var(--wcs-switch-text-color);margin-left:6px;font-weight:500;line-height:1.375}.wcs-container:not([aria-disabled]) input:checked~.text{--wcs-switch-text-color:var(--wcs-primary)}.wcs-checkmark::before{position:absolute;transition:all 0.15s ease-out}.wcs-checkmark::before{bottom:0.3125rem;left:0.3125rem;width:0.875rem;height:0.875rem;content:\"\";border-radius:50%;background-color:var(--wcs-switch-bullet-color-initial)}:host([disabled]:not([checked])) .wcs-checkmark::before{background-color:var(--wcs-text-disabled)}:host([disabled]:not([checked])) .wcs-checkmark{background-color:var(--wcs-light)}:host([disabled][checked]) .wcs-checkmark::before{background-color:var(--wcs-white)}:host([disabled][checked]) .wcs-checkmark{background-color:var(--wcs-text-disabled)}.wcs-checkmark{top:0;right:0;bottom:0;left:0;width:3rem;height:1.5rem;border-radius:0.75rem;background-color:var(--wcs-switch-background-color-initial)}.wcs-container:not([aria-disabled]){cursor:pointer}.wcs-container:hover:not([aria-disabled]){--wcs-switch-text-color:var(--wcs-primary)}input:not([disabled]):checked+.wcs-checkmark::before,.wcs-container:hover input:not([disabled])+.wcs-checkmark::before,.wcs-container:focus input:not([disabled])+.wcs-checkmark::before{background-color:var(--wcs-switch-bullet-color-final)}input:checked+.wcs-checkmark::before{transform:translateX(24px)}input:not([disabled]):checked+.wcs-checkmark,.wcs-container:hover input:not([disabled])+.wcs-checkmark,.wcs-container:focus input:not([disabled])+.wcs-checkmark{background-color:var(--wcs-switch-background-color-final)}";

const Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.switchId = `wcs-switch-${switchIds++}`;
    this.name = this.switchId;
    this.checked = false;
    this.labelAlignment = 'center';
    this.disabled = false;
  }
  toggleChange(_event) {
    this.checked = !this.checked;
    this.wcsChange.emit({
      checked: this.checked
    });
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.name, class: "wcs-container", "aria-disabled": this.disabled }, h("input", { onChange: (evt) => this.toggleChange(evt), checked: this.checked, class: "wcs-switch", type: "checkbox", name: this.name, disabled: this.disabled, id: this.name }), h("span", { class: "wcs-checkmark" }), h("span", { class: "text" }, h("slot", null)))));
  }
};
let switchIds = 0;
Switch.style = switchCss;

export { Switch as wcs_switch };

//# sourceMappingURL=wcs-switch.entry.js.map