import { h, Host } from '@stencil/core';
export class ActionBar {
  constructor() {
    this.gutter = undefined;
    this.hasTabs = false;
  }
  componentWillLoad() {
    this.hasTabs = !!this.el.querySelector('[slot="tabs"]');
  }
  render() {
    return (h(Host, null, h("div", { class: "title-actions", "data-has-tabs": this.hasTabs }, h("h1", null, h("slot", null)), h("div", { class: "actions" }, h("slot", { name: "actions" }))), h("div", { class: "tabs-container" }, h("slot", { name: "tabs" }))));
  }
  static get is() { return "wcs-action-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["action-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["action-bar.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Determines if the action bar should have a border at the bottom.\nYou should not use this property if a gutter is already present on tabs"
        },
        "attribute": "gutter",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "hasTabs": {}
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=action-bar.js.map
