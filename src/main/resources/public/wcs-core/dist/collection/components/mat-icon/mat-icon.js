import { h, Host } from '@stencil/core';
const ICON_FAMILY_CLASS_NAME = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
  twotone: 'material-icons-two-tone',
  rounded: 'material-icons-round',
  sharp: 'material-icons-sharp'
};
export class MatIcon {
  constructor() {
    this.icon = undefined;
    this.size = 'm';
    this.family = 'filled';
  }
  render() {
    return (h(Host, null, h("i", { class: ICON_FAMILY_CLASS_NAME[this.family] + ' size-' + this.size }, this.icon)));
  }
  static get is() { return "wcs-mat-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["mat-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["mat-icon.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Use the icon name from Material Icons"
        },
        "attribute": "icon",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MaterialIconSize",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
          "references": {
            "MaterialIconSize": {
              "location": "import",
              "path": "./mat-icon-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the icon"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'m'"
      },
      "family": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MaterialIconFamily",
          "resolved": "\"filled\" | \"outlined\" | \"rounded\" | \"sharp\" | \"twotone\"",
          "references": {
            "MaterialIconFamily": {
              "location": "import",
              "path": "./mat-icon-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Family of the icon"
        },
        "attribute": "family",
        "reflect": false,
        "defaultValue": "'filled'"
      }
    };
  }
}
//# sourceMappingURL=mat-icon.js.map
