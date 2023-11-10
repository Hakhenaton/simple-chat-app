import { r as registerInstance, h } from './index-dc4d96d4.js';

const cardBodyCss = ":host{flex:1 1 auto;padding:var(--wcs-padding)}";

const CardBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
CardBody.style = cardBodyCss;

export { CardBody as wcs_card_body };

//# sourceMappingURL=wcs-card-body.entry.js.map