'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const matIconCss = ":host{display:flex;flex-direction:column;justify-content:center}:host .size-s{font-size:18px !important}:host .size-m{font-size:24px !important}:host .size-l{font-size:36px !important}:host .size-xl{font-size:48px !important}:host .material-icons{font-family:\"Material Icons\";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}:host .material-icons-outlined{font-family:\"Material Icons Outlined\";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}:host .material-icons-two-tone{--google-font-color-materialiconstwotone:none;font-family:\"Material Icons Two Tone\";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}:host .material-icons-round{font-family:\"Material Icons Round\";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}:host .material-icons-sharp{font-family:\"Material Icons Sharp\";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}";

const ICON_FAMILY_CLASS_NAME = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
  twotone: 'material-icons-two-tone',
  rounded: 'material-icons-round',
  sharp: 'material-icons-sharp'
};
const MatIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.size = 'm';
    this.family = 'filled';
  }
  render() {
    return (index.h(index.Host, null, index.h("i", { class: ICON_FAMILY_CLASS_NAME[this.family] + ' size-' + this.size }, this.icon)));
  }
};
MatIcon.style = matIconCss;

exports.wcs_mat_icon = MatIcon;

//# sourceMappingURL=wcs-mat-icon.cjs.entry.js.map