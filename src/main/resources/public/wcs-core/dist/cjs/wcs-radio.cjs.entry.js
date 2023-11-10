'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');

const radioCss = ":host{width:fit-content}:host([mode=radio]:focus-within){transition:none;outline:2px dashed var(--wcs-primary);outline-offset:0;border-radius:0.5rem}:host([mode=horizontal]:focus-within){transition:none;outline:2px dashed var(--wcs-primary);outline-offset:2px;border-radius:0.5rem}:host([mode=radio]) input,:host([mode=horizontal]) input{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}:host([mode=radio]) label,:host([mode=horizontal]) label{margin-bottom:0;color:var(--wcs-text-medium);background-color:transparent;font-weight:500 !important;display:inline-block}:host([mode=radio]) label:before,:host([mode=horizontal]) label:before{border-radius:50%;border:2px solid var(--wcs-text-disabled);position:relative;width:1.125rem;height:1.125rem;pointer-events:none;content:\"\";background-color:var(--wcs-white)}:host([mode=radio]) label:after,:host([mode=horizontal]) label:after{transition:0.175s ease-in-out;position:relative;width:1.125rem;height:1.125rem;content:\"\";background:no-repeat 50%/50% 50%}:host([disabled]) label{color:var(--wcs-text-disabled);cursor:not-allowed}:host(:not([disabled])) label{cursor:pointer}:host([mode=radio][checked]) label,:host([mode=horizontal][checked]) label{color:var(--wcs-primary)}:host([mode=radio][checked]) label:before,:host([mode=horizontal][checked]) label:before{border-color:var(--wcs-primary);background-color:var(--wcs-primary)}:host([mode=radio]:hover):not([disabled]) label,:host([mode=horizontal]:hover):not([disabled]) label{color:var(--wcs-primary)}:host([mode=radio]:hover):not([disabled]) label:before,:host([mode=horizontal]:hover):not([disabled]) label:before{border-color:var(--wcs-primary)}:host([mode=radio]) label{padding:0.125rem 0.125rem 0 0;border:none;transition:0.175s ease-in-out}:host([mode=radio]) label:before{transition:0.175s ease-in-out;margin-right:var(--wcs-base-margin);display:inline-block;top:3px;box-sizing:border-box}:host([mode=horizontal]) label:before{transition:background-color 0.175s ease-in-out;margin:auto auto var(--wcs-base-margin);display:block}:host([mode=option]){padding:var(--wcs-base-margin) calc(var(--wcs-base-margin) / 2);font-weight:500 !important}:host([mode=option]) input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}:host([mode=option]) label{padding:5px calc(2 * var(--wcs-base-margin));margin-bottom:0;color:var(--wcs-white);white-space:nowrap;border-radius:0.4375rem}:host([mode=option]:focus-within) label{outline:2px dashed var(--wcs-white);outline-offset:0.1rem;border-radius:0.4375rem}:host([mode=option][checked]) label{font-weight:500 !important;color:var(--wcs-primary);background-color:var(--wcs-white)}";

const Radio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.wcsRadioClick = index.createEvent(this, "wcsRadioClick", 7);
    this.inputId = `wcs-rb-${radioButtonIds++}`;
    this.mode = 'radio';
    this.value = undefined;
    this.label = undefined;
    this.checked = false;
    this.disabled = false;
  }
  onKeyDown(_event) {
    if ((helpers.isSpaceKey(_event) || helpers.isEnterKey(_event)) && !this.el.checked) {
      this.el.checked = true;
      this.emitRadioChangeEvent();
    }
  }
  componentWillLoad() {
    if (this.value === undefined) {
      // If no value was given we use the text content instead.
      this.value = this.el.innerText || '';
    }
  }
  componentDidLoad() {
    this.inputEl = this.el.shadowRoot.querySelector('input');
    this.inputEl.addEventListener('change', _ => {
      this.emitRadioChangeEvent();
      this.checked = true;
    });
  }
  emitRadioChangeEvent() {
    this.wcsRadioClick.emit({
      label: this.label,
      source: this.el,
      value: this.value
    });
  }
  render() {
    return (index.h(index.Host, { slot: "option" }, index.h("input", { id: this.inputId, type: "radio", value: this.value, checked: this.checked, disabled: this.disabled, "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.checked}` }), index.h("label", { htmlFor: `${this.inputId}` }, this.label)));
  }
  get el() { return index.getElement(this); }
};
let radioButtonIds = 0;
Radio.style = radioCss;

exports.wcs_radio = Radio;

//# sourceMappingURL=wcs-radio.cjs.entry.js.map