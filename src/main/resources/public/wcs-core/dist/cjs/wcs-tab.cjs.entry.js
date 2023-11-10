'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca67a6dc.js');

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabLoaded = index.createEvent(this, "tabLoaded", 7);
    this.header = undefined;
    this.itemKey = undefined;
  }
  componentDidLoad() {
    this.tabLoaded.emit();
  }
  render() {
    return (index.h(index.Host, { slot: "wcs-tab" }, index.h("slot", null)));
  }
};

exports.wcs_tab = Tab;

//# sourceMappingURL=wcs-tab.cjs.entry.js.map