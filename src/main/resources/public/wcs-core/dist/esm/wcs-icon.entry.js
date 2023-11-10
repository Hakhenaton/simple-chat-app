import { r as registerInstance, h } from './index-dc4d96d4.js';

const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.size = undefined;
  }
  render() {
    const cssClass = {
      class: {
        [`icons-${this.icon}`]: true,
        [`icons-size-${this.size}`]: true
      }
    };
    return (h("i", Object.assign({}, cssClass)));
  }
};

export { Icon as wcs_icon };

//# sourceMappingURL=wcs-icon.entry.js.map