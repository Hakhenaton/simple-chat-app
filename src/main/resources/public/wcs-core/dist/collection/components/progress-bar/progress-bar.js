import { h } from '@stencil/core';
/**
 * Component displaying progress as a bar.
 */
export class ProgressBar {
  constructor() {
    this.small = false;
    this.showLabel = false;
    this.value = 0;
  }
  render() {
    const style = {
      width: this.value + '%'
    };
    return (h("div", { class: this.rootClasses() }, h("div", { class: "progress-bar", style: style }, this.showLabel &&
      h("span", { class: "progress-label" }, this.value, h("sup", null, "%")))));
  }
  rootClasses() {
    let classes = 'progress';
    if (this.small)
      classes += ' small';
    if (this.showLabel)
      classes += ' has-label';
    // FIXME: Temporary fix so the label doesn't appear before the bar.
    if (this.value === 0)
      classes += ' value-zero';
    return classes;
  }
  static get is() { return "wcs-progress-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["progress-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["progress-bar.css"]
    };
  }
  static get properties() {
    return {
      "small": {
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
          "text": "Whether the component display the small version"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "showLabel": {
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
          "text": "Whether it displays a label indicating the percentage of progress above the bar."
        },
        "attribute": "show-label",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
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
          "text": "The actual value of the progress.\nRanging from 0 to 100."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
}
//# sourceMappingURL=progress-bar.js.map
