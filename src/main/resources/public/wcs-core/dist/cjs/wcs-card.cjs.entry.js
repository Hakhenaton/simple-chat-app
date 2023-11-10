'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const cardCss = ":host{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:var(--wcs-border-radius);background-color:var(--wcs-white)}:host([mode=raised]){box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)}:host([mode=flat]){border:solid 1px var(--wcs-text-light)}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mode = 'raised';
  }
  render() {
    return (index.h("slot", null));
  }
};
Card.style = cardCss;

exports.wcs_card = Card;

//# sourceMappingURL=wcs-card.cjs.entry.js.map