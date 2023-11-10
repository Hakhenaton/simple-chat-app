import { r as registerInstance, h } from './index-dc4d96d4.js';

const cardCss = ":host{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:var(--wcs-border-radius);background-color:var(--wcs-white)}:host([mode=raised]){box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)}:host([mode=flat]){border:solid 1px var(--wcs-text-light)}";

const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = 'raised';
  }
  render() {
    return (h("slot", null));
  }
};
Card.style = cardCss;

export { Card as wcs_card };

//# sourceMappingURL=wcs-card.entry.js.map