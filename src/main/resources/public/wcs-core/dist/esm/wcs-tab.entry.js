import { r as registerInstance, c as createEvent, h, H as Host } from './index-dc4d96d4.js';

const Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabLoaded = createEvent(this, "tabLoaded", 7);
    this.header = undefined;
    this.itemKey = undefined;
  }
  componentDidLoad() {
    this.tabLoaded.emit();
  }
  render() {
    return (h(Host, { slot: "wcs-tab" }, h("slot", null)));
  }
};

export { Tab as wcs_tab };

//# sourceMappingURL=wcs-tab.entry.js.map