import { EventEmitter } from '../../stencil-public-runtime';
import { ModalSize } from './modal-interface';
export declare class Modal {
  /**
   * Specifies whether the component should display a backdrop on the entire page
   */
  withoutBackdrop: boolean;
  /**
   * Displays the modal
   */
  show: boolean;
  /**
   * Triggered when the user leaves the dialog with the closing button.
   */
  wcsDialogClosed: EventEmitter<void>;
  /**
   * Specifies whether the component should display a close button.
   * if false, it won't close the modal when the escape key is pressed.
   */
  showCloseButton: boolean;
  /**
   * There are multiple sizes for modals. The default size is medium (m), however other sizes are available. Select the
   * size best suited for the content and screen size displaying the modal. Remember to test responsiveness.
   */
  size: ModalSize;
  /**
   * Specifies whether the component should hide the actions slot or not
   */
  hideActions: boolean;
  render(): any;
  private onKeyDown;
  private onCloseButtonClick;
  private close;
}
