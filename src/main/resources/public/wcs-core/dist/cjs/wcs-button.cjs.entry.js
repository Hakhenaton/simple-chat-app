'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');
const helpers = require('./helpers-4a14051a.js');
const component = require('./component-2a26e37d.js');

const WcsButtonSizeValues = ['s', 'm', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
function isWcsButtonSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsButtonSizeValues
  return WcsButtonSizeValues.includes(size);
}

const buttonCss = "@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:host{display:inline-block;--wcs-button-color:var(--wcs-contrast, var(--wcs-white, white));--wcs-button-background-color:var(--wcs-base, var(--wcs-primary, #0088CE));--wcs-button-ripple-color:var(--wcs-contrast, var(--wcs-white, white));--wcs-button-border-radius:var(--wcs-border-radius);--wcs-button-border-color:var(--wcs-base)}.wcs-inner-button:focus-visible{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:var(--wcs-button-border-radius)}:host([mode=clear]){--wcs-button-border-color:transparent}:host([mode=clear]) .wcs-inner-button{box-shadow:none}:host([mode=clear]),:host([mode=stroked]){--wcs-button-color:var(--wcs-base);--wcs-button-background-color:transparent}:host([mode=clear]) .wcs-inner-button::before,:host([mode=clear]) .wcs-inner-button::after,:host([mode=stroked]) .wcs-inner-button::before,:host([mode=stroked]) .wcs-inner-button::after{--wcs-button-ripple-color:var(--wcs-base)}:host([size=l]){--wcs-button-padding:var(--wcs-padding-m) var(--wcs-padding);--wcs-button-min-height:var(--wcs-size-l);--wcs-button-min-width:var(--wcs-size-l);--wcs-button-font-size:1.0625rem}:host([size=m]){--wcs-button-padding:var(--wcs-padding-m) var(--wcs-padding);--wcs-button-min-height:var(--wcs-size-m);--wcs-button-min-width:var(--wcs-size-m);--wcs-button-font-size:1rem}:host([size=s]){--wcs-button-padding:var(--wcs-padding-s) var(--wcs-padding);--wcs-button-min-height:var(--wcs-size-s);--wcs-button-min-width:var(--wcs-size-s);--wcs-button-font-size:0.9375rem}:host([shape=round]){--wcs-button-border-radius:2rem}:host([shape=round]) ::slotted(wcs-mat-icon){margin:calc(-1 * var(--wcs-padding))}:host([shape=square]){--wcs-button-padding:0}:host([shape=square]) ::slotted(wcs-mat-icon){margin:calc(-1 * var(--wcs-padding))}:host([shape=normal]) .wcs-inner-button{min-width:var(--wcs-button-min-width, unset);min-height:var(--wcs-button-min-height, unset)}:host([mode=stroked]) .wcs-inner-button{box-shadow:inset 0 0 0 1px var(--wcs-button-border-color)}:host([loading]){position:relative}:host([loading]) .wcs-inner-button>*:not(wcs-spinner){visibility:hidden;opacity:0}:host([loading]) wcs-spinner{height:calc(var(--wcs-button-min-height) / 2);width:calc(var(--wcs-button-min-width) / 2);position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}:host([disabled]),:host([loading]){--wcs-button-color:var(--wcs-text-disabled);cursor:not-allowed}:host([disabled]) :host(not[loading]),:host([loading]) :host(not[loading]){--wcs-button-background-color:var(--wcs-light)}:host([disabled]) .wcs-inner-button,:host([loading]) .wcs-inner-button{--wcs-button-border-color:var(--wcs-light);opacity:1;cursor:default;pointer-events:none}:host([disabled]):host([mode=clear]),:host([disabled]):host([disabled]),:host([loading]):host([mode=clear]),:host([loading]):host([disabled]){--wcs-button-background-color:transparent}.wcs-inner-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;display:flex;align-items:center;justify-content:center;width:100%;font-family:var(--wcs-font-sans-serif);background-color:var(--wcs-button-background-color);color:var(--wcs-button-color);padding:var(--wcs-button-padding);border-radius:var(--wcs-button-border-radius);border:none;overflow:hidden;outline:0;text-transform:none;margin:0;cursor:pointer;font-weight:500;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;font-size:var(--wcs-button-font-size);line-height:1.5;min-height:var(--wcs-button-min-height);min-width:var(--wcs-button-min-width);transition:color 175ms ease-in-out, background-color 175ms ease-in-out, box-shadow 175ms cubic-bezier(0.4, 0, 0.2, 1)}.wcs-inner-button::before,.wcs-inner-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.wcs-inner-button::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.wcs-inner-button::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.wcs-inner-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.wcs-inner-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.wcs-inner-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.wcs-inner-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.wcs-inner-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.wcs-inner-button::before,.wcs-inner-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.wcs-inner-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.wcs-inner-button:hover::before,.wcs-inner-button.mdc-ripple-surface--hover::before{opacity:0.1;opacity:var(--mdc-ripple-hover-opacity, 0.1)}.wcs-inner-button.mdc-ripple-upgraded--background-focused::before,.wcs-inner-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.wcs-inner-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.wcs-inner-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.3;opacity:var(--mdc-ripple-press-opacity, 0.3)}.wcs-inner-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.3)}.wcs-inner-button::before,.wcs-inner-button::after{background-color:white;background-color:var(--mdc-ripple-color, white)}.wcs-inner-button::before,.wcs-inner-button::after{background-color:var(--wcs-button-ripple-color)}.wcs-inner-button:focus{box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)}.wcs-inner-button:hover{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)}a{text-decoration:none;box-sizing:border-box}button::-moz-focus-inner,a::-moz-focus-inner{border:0}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = 'button';
    this.href = undefined;
    this.target = undefined;
    this.disabled = false;
    this.ripple = true;
    this.size = 'm';
    this.shape = 'normal';
    this.mode = 'plain';
    this.loading = false;
  }
  /**
   * Native event click is emit event if we decide to stop propagation of it
   * @param ev
   */
  onClick(ev) {
    if (this.disabled || this.loading) {
      ev.stopImmediatePropagation();
    }
    if (this.type !== 'button' && helpers.hasShadowDom(this.el)) {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = window.document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
  componentWillLoad() {
    if (!isWcsButtonSize(this.size)) {
      console.error(`Invalid size value for wcs-button : "${this.size}". Must be one of "${WcsButtonSizeValues.join(', ')}"`);
      this.size = "m"; // Default fallback value
    }
  }
  componentDidLoad() {
    this.mdcRipple = new component.MDCRipple(this.el.shadowRoot.querySelector('.wcs-inner-button'));
  }
  enabledRippleEffect() {
    this.mdcRipple.disabled = false;
  }
  disabledRippleEffect() {
    this.mdcRipple.disabled = true;
  }
  getTagName() {
    return this.href !== undefined ? 'a' : 'button';
  }
  onRippleChange() {
    if (this.ripple) {
      this.enabledRippleEffect();
    }
    else {
      this.disabledRippleEffect();
    }
  }
  render() {
    const TagType = this.getTagName();
    const attrs = this.href !== undefined
      ? { href: this.href, role: 'button', target: this.target }
      : { type: this.type };
    return (index.h(TagType, Object.assign({}, attrs, { class: "wcs-inner-button", disabled: this.disabled || this.loading }), this.loading && index.h("wcs-spinner", null), index.h("slot", null)));
  }
  static get delegatesFocus() { return true; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "ripple": ["onRippleChange"]
  }; }
};
Button.style = buttonCss;

exports.wcs_button = Button;

//# sourceMappingURL=wcs-button.cjs.entry.js.map