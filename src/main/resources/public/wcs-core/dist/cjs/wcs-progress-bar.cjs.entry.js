'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const progressBarCss = ":host{--wcs-internal-progress-bar-border-radius:var(--wcs-progress-bar-border-radius,0.3125rem);--wcs-internal-progress-bar-border-radius-small:var(--wcs-progress-bar-border-radius-small,0.15625rem);--wcs-internal-progress-bar-animation-duration:var(--wcs-progress-bar-animation-duration,0.375s)}.progress{display:flex;height:0.625rem;font-size:0.75rem;color:#4d4f53;background-color:#fff;background-image:linear-gradient(90deg, #e1ded9 50%, transparent 50%);background-size:0.25rem 0.625rem;border-radius:var(--wcs-internal-progress-bar-border-radius)}.progress.has-label{margin-top:2.375rem}.progress.small{height:0.3125rem;overflow:hidden;background-color:#fff;background-image:none;background-size:auto;border-radius:var(--wcs-internal-progress-bar-border-radius-small)}.progress.value-zero>.progress-bar>.progress-label{right:unset}.progress-bar{position:relative;display:flex;flex-direction:column;justify-content:center;color:#4d4f53;text-align:center;background-color:var(--wcs-primary);border-radius:var(--wcs-internal-progress-bar-border-radius);transition:width var(--wcs-internal-progress-bar-animation-duration) ease-out}.progress-label{position:absolute;right:0;bottom:calc(100% + 0.5rem);font-size:1.5rem;font-weight:500}.progress-label sup{font-size:0.875rem;top:-0.5em;position:relative;line-height:0;vertical-align:baseline}";

const ProgressBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.small = false;
    this.showLabel = false;
    this.value = 0;
  }
  render() {
    const style = {
      width: this.value + '%'
    };
    return (index.h("div", { class: this.rootClasses() }, index.h("div", { class: "progress-bar", style: style }, this.showLabel &&
      index.h("span", { class: "progress-label" }, this.value, index.h("sup", null, "%")))));
  }
  rootClasses() {
    let classes = 'progress';
    if (this.small)
      classes += ' small';
    if (this.showLabel)
      classes += ' has-label';
    // FIXME: Temporary fix so the label doesn't appear before the bar.
    if (this.value === 0)
      classes += ' value-zero';
    return classes;
  }
};
ProgressBar.style = progressBarCss;

exports.wcs_progress_bar = ProgressBar;

//# sourceMappingURL=wcs-progress-bar.cjs.entry.js.map