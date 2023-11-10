import { EventEmitter } from '../../stencil-public-runtime';
export declare class AccordionPanel {
  open: boolean;
  /**
   * Specifies whether the component should display the open/close text.
   * if false, it won't show the open/close text.
   */
  hideActionText: boolean;
  /**
   * Specifies whether the component should highlight when open with primary color.
   * if true, the background color will be the primary color.
   * if false, the background color will be wcs-light.
   */
  highlight: boolean;
  /**
   * Specifies wether the component should group the content with header in one card
   * if true, there will be only one card with the header and the content
   * Nothing change when the panel is close
   */
  groupContentWithHeader: boolean;
  wcsOpenChange: EventEmitter<boolean>;
  openChange(newValue: boolean): void;
  close(): Promise<void>;
  render(): any;
}
