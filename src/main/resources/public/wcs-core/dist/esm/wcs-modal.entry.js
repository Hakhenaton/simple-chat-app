import { r as registerInstance, c as createEvent, h, H as Host } from './index-dc4d96d4.js';

const modalCss = "wcs-modal{z-index:999;position:fixed;top:0;bottom:0;left:0;right:0;display:none;background:rgba(0, 0, 0, 0.4)}wcs-modal[show]{display:flex;height:100vh;width:100vw;align-items:center;justify-content:center}wcs-modal[without-backdrop]{background-color:unset}wcs-modal[without-backdrop] .wcs-modal-container{border:solid 1px var(--wcs-text-light)}.wcs-modal-container{max-height:var(--wcs-modal-max-height, 80%);background-color:#fff;display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;box-sizing:border-box;pointer-events:auto;background-clip:padding-box;border:0 solid rgba(0, 0, 0, 0.2);border-radius:0.4375rem;z-index:20000;padding:1.375rem 1.875rem 1.875rem 1.875rem}.wcs-modal-container[data-size=s]{width:288px}.wcs-modal-container[data-size=m]{width:480px}.wcs-modal-container[data-size=l]{width:864px}.wcs-modal-container[data-size=xl]{width:1200px}.wcs-modal-header{margin-bottom:8px;display:flex;align-items:center;justify-content:space-between}.wcs-modal-header h5{font-size:24px;font-weight:400;margin:0}.wcs-modal-content{font-weight:400;font-size:16px;overflow-y:auto}.wcs-modal-actions{margin-top:20px;display:flex;justify-content:flex-end}";

const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsDialogClosed = createEvent(this, "wcsDialogClosed", 7);
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
};
Modal.style = modalCss;

export { Modal as wcs_modal };

//# sourceMappingURL=wcs-modal.entry.js.map