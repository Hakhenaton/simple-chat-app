import { h, Host } from '@stencil/core';
export class Modal {
  constructor() {
    this.withoutBackdrop = false;
    this.show = false;
    this.showCloseButton = false;
    this.size = 'm';
    this.hideActions = false;
  }
  render() {
    return (h(Host, null, h("div", { class: "wcs-modal-container", "data-size": this.size }, h("div", { class: "wcs-modal-header" }, h("h5", null, h("slot", { name: "header" })), this.showCloseButton && (h("wcs-button", { shape: "round", mode: "clear", class: "wcs-dark", onClick: ($event) => this.onCloseButtonClick($event) }, h("wcs-mat-icon", { icon: "close" })))), h("div", { class: "wcs-modal-content" }, h("slot", null)), !this.hideActions && (h("div", { class: "wcs-modal-actions" }, h("slot", { name: "actions" }))))));
  }
  onKeyDown(event) {
    if (this.showCloseButton && event.key === 'Escape') {
      this.close();
    }
  }
  onCloseButtonClick(_) {
    this.close();
  }
  close() {
    this.show = false;
    this.wcsDialogClosed.emit();
  }
  static get is() { return "wcs-modal"; }
  static get originalStyleUrls() {
    return {
      "$": ["modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["modal.css"]
    };
  }
  static get properties() {
    return {
      "withoutBackdrop": {
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
          "text": "Specifies whether the component should display a backdrop on the entire page"
        },
        "attribute": "without-backdrop",
        "reflect": true,
        "defaultValue": "false"
      },
      "show": {
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
          "text": "Displays the modal"
        },
        "attribute": "show",
        "reflect": true,
        "defaultValue": "false"
      },
      "showCloseButton": {
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
          "text": "Specifies whether the component should display a close button.\nif false, it won't close the modal when the escape key is pressed."
        },
        "attribute": "show-close-button",
        "reflect": true,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ModalSize",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
          "references": {
            "ModalSize": {
              "location": "import",
              "path": "./modal-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "There are multiple sizes for modals. The default size is medium (m), however other sizes are available. Select the\nsize best suited for the content and screen size displaying the modal. Remember to test responsiveness."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'m'"
      },
      "hideActions": {
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
          "text": "Specifies whether the component should hide the actions slot or not"
        },
        "attribute": "hide-actions",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "wcsDialogClosed",
        "name": "wcsDialogClosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the user leaves the dialog with the closing button."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=modal.js.map
