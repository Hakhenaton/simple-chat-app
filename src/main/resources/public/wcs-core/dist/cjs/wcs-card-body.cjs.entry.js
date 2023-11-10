'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const cardBodyCss = ":host{flex:1 1 auto;padding:var(--wcs-padding)}";

const CardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("slot", null));
  }
};
CardBody.style = cardBodyCss;

exports.wcs_card_body = CardBody;

//# sourceMappingURL=wcs-card-body.cjs.entry.js.map