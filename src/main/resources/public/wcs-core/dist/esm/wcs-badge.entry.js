import { r as registerInstance, h } from './index-dc4d96d4.js';

const badgeCss = ":host{--wcs-badge-ligther-percentage:20;display:inline-block;padding:0.313rem 1.5rem;font-size:0.875rem;font-weight:500;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:6px;color:var(--wcs-contrast);background-color:var(--wcs-base)}:host([color=lighter]){opacity:calc((100 - var(--wcs-badge-ligther-percentage)) / 100)}:host([shape=rounded]){border-radius:0.75rem}";

const Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shape = 'normal';
    this.color = 'initial';
  }
  render() {
    return (h("slot", null));
  }
};
Badge.style = badgeCss;

export { Badge as wcs_badge };

//# sourceMappingURL=wcs-badge.entry.js.map