import { h, Host } from '@stencil/core';
/**
 * Tabs component to switch between tab content.
 * Use in conjuction with `wcs-tab`.
 *
 * @example
 * ```html
 * <wcs-tabs>
 *    <wcs-tab header="One">The content !</wcs-tab>
 *    <wcs-tab header="Two">More content !</wcs-tab>
 * </wcs-tabs>
 * ```
 */
export class Tabs {
  constructor() {
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
  static get is() { return "wcs-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tabs.css"]
    };
  }
  static get properties() {
    return {
      "align": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "WcsTabsAlignment",
          "resolved": "\"center\" | \"end\" | \"start\"",
          "references": {
            "WcsTabsAlignment": {
              "location": "import",
              "path": "./tabs-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Tab headers alignment."
        },
        "attribute": "align",
        "reflect": true,
        "defaultValue": "'start'"
      },
      "selectedIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Current selected tab index.\nStarts at 0."
        },
        "attribute": "selected-index",
        "reflect": false,
        "defaultValue": "0"
      },
      "selectedKey": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "selected-key",
        "reflect": false
      },
      "headersOnly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether to skip rendering the tabpanel with the content of the selected tab. Use this prop if you plan to\nseparately render the tab content."
        },
        "attribute": "headers-only",
        "reflect": false,
        "defaultValue": "false"
      },
      "gutter": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Determines if tabs header should have a border at the bottom"
        },
        "attribute": "gutter",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "headers": {},
      "currentActiveTabIndex": {}
    };
  }
  static get events() {
    return [{
        "method": "tabChange",
        "name": "tabChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "\nEmitted when the selected tab change."
        },
        "complexType": {
          "original": "WcsTabChangeEvent",
          "resolved": "WcsTabChangeEvent",
          "references": {
            "WcsTabChangeEvent": {
              "location": "import",
              "path": "./tabs-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "selectedIndex",
        "methodName": "selectedIndexChanged"
      }, {
        "propName": "selectedKey",
        "methodName": "selectedTabkeyChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "tabLoaded",
        "method": "onTabLoaded",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=tabs.js.map
