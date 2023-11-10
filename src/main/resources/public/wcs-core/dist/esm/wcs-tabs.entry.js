import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-dc4d96d4.js';

const tabsCss = ":host{--wcs-tabs-padding-bottom:16px}:host([align=start]) .wcs-tabs-headers{justify-content:start}:host([align=end]) .wcs-tabs-headers{justify-content:end}:host([align=center]) .wcs-tabs-headers{justify-content:center}.wcs-tabs-headers{padding-top:4px;overflow-x:auto;display:flex;position:relative}:host([gutter]) .wcs-tabs-headers{border-bottom:var(--wcs-tabs-headers-border-bottom)}.wcs-tab-header{padding:8px 24px 16px 0;display:flex;flex-shrink:0;align-items:center;justify-content:center;cursor:pointer;outline:none}.wcs-tab-header span{text-align:center;color:var(--wcs-text-disabled);font-size:1rem;font-weight:400}.wcs-tab-header:focus span,.wcs-tab-header:hover span{color:var(--wcs-primary)}.wcs-tab-header:focus-visible>span{outline:2px dashed var(--wcs-primary);outline-offset:4px;border-radius:0.1rem}.active span{font-weight:500;color:var(--wcs-primary);position:relative}.active span::after{position:absolute;bottom:calc(var(--wcs-tabs-padding-bottom) * -1);left:0;width:100%;height:0.3125rem;content:\"\";background-color:var(--wcs-primary);border-radius:3px}";

const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.align = 'start';
    this.selectedIndex = 0;
    this.selectedKey = undefined;
    this.headersOnly = false;
    this.gutter = undefined;
    this.headers = [];
    this.currentActiveTabIndex = 0;
  }
  selectedIndexChanged(newValue) {
    this.currentActiveTabIndex = newValue;
  }
  selectedTabkeyChanged(newValue) {
    this.updateCurrentActiveIndexByTabKey(newValue);
  }
  emitActiveTabChange() {
    this.tabChange.emit({
      tabName: this.headers[this.currentActiveTabIndex],
      tabIndex: this.currentActiveTabIndex,
      selectedKey: this.tabs[this.currentActiveTabIndex].itemKey
    });
  }
  updateCurrentActiveIndexByTabKey(newValue) {
    for (let i = 0; i < this.tabs.length; i++) {
      const tab = this.tabs[i];
      if (tab.itemKey === newValue) {
        this.currentActiveTabIndex = i;
      }
    }
  }
  onTabLoaded() {
    this.refreshHeaders();
  }
  componentDidLoad() {
    this.putTabsInCorrectDivIfTheyAreNot();
    this.refreshHeaders();
    if (this.selectedIndex) {
      this.currentActiveTabIndex = this.selectedIndex;
    }
    if (this.selectedKey) {
      this.updateCurrentActiveIndexByTabKey(this.selectedKey);
    }
  }
  // XXX: Firefox < 63
  putTabsInCorrectDivIfTheyAreNot() {
    const tabDiv = this.el.shadowRoot.querySelector('.wcs-tabs');
    if (tabDiv.querySelector('slot') === null) {
      Array.from(this.el.querySelectorAll('wcs-tab'))
        .filter(node => node.parentNode !== tabDiv)
        .forEach(tab => {
        if (tab.parentElement.isEqualNode(this.el)) {
          this.el.removeChild(tab);
          tabDiv.appendChild(tab);
        }
      });
    }
  }
  handleKeyDown(ev, tabIndex) {
    var _a, _b;
    const target = ev.target;
    switch (ev.key) {
      case ' ':
      case 'Enter': {
        this.currentActiveTabIndex = tabIndex;
        this.emitActiveTabChange();
        ev.preventDefault();
        break;
      }
      case 'ArrowLeft': {
        if ((_a = target.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains('wcs-tab-header')) {
          target.previousElementSibling.focus();
          ev.preventDefault();
        }
        break;
      }
      case 'ArrowRight': {
        if ((_b = target.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.contains('wcs-tab-header')) {
          target.nextElementSibling.focus();
          ev.preventDefault();
        }
        break;
      }
    }
  }
  refreshHeaders() {
    this.headers = [];
    this.tabs
      .forEach(x => {
      this.headers.push(x.getAttribute('header'));
    });
  }
  get tabs() {
    var _a;
    const tabsEl = this.el.shadowRoot.querySelector('.wcs-tabs');
    // FIXME: problem with this selector being too greedy in ff < 63
    const tabs = this.el.shadowRoot.querySelectorAll('.wcs-tabs > wcs-tab');
    return tabs.length !== 0
      ? tabs
      : (tabsEl === null || tabsEl === void 0 ? void 0 : tabsEl.querySelector('slot'))
        ? (_a = tabsEl === null || tabsEl === void 0 ? void 0 : tabsEl.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.assignedElements()
        : [];
  }
  selectTabAndEmitChangeEvent(index) {
    this.currentActiveTabIndex = index;
    this.emitActiveTabChange();
  }
  componentWillUpdate() {
    if (!this.headersOnly) {
      this.updateTabVisibility();
    }
    else {
      this.hideAllTabsContent();
    }
  }
  updateTabVisibility() {
    this.tabs.forEach((el, idx) => {
      if (idx !== this.currentActiveTabIndex) {
        el.setAttribute('style', 'display: none;');
      }
      else {
        el.setAttribute('style', 'display: block;');
      }
    });
  }
  hideAllTabsContent() {
    this.tabs.forEach((el) => el.setAttribute('style', 'display: none;'));
  }
  render() {
    return (h(Host, null, h("div", { class: "wcs-tabs-headers" }, this.headers.map((header, idx) => h("div", { class: 'wcs-tab-header ' + (this.currentActiveTabIndex === idx ? 'active' : ''), onClick: () => this.selectTabAndEmitChangeEvent(idx), onKeyDown: evt => this.handleKeyDown(evt, idx), tabIndex: this.currentActiveTabIndex === idx ? 0 : -1 }, h("span", null, header)))), h("div", { class: "wcs-tabs" }, h("slot", { name: "wcs-tab" }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selectedIndex": ["selectedIndexChanged"],
    "selectedKey": ["selectedTabkeyChanged"]
  }; }
};
Tabs.style = tabsCss;

export { Tabs as wcs_tabs };

//# sourceMappingURL=wcs-tabs.entry.js.map