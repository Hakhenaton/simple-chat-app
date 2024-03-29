export declare class Accordion {
  private el;
  private accordionPanels;
  /**
   * Specifies whether accordion-panel components should display the open/close text.
   * if false, it won't show the open/close text in all accordion-panel.
   */
  hideActionText: boolean;
  /**
   * Specifies whether accordion-panel components should highlight when open with primary color.
   * if true, the background color of the accordion-panel will be the primary color.
   * if false, the background color of the accordion-panel will be wcs-light.
   */
  highlight: boolean;
  /**
   * Specifies wether accordion-panel components should group the content with header in one card
   * if true, there will be only one card with the header and the content
   * Nothing change when the panel is close
   */
  groupContentWithHeader: boolean;
  componentWillLoad(): Promise<void> | void;
  wcsOpenChangeHandler(event: CustomEvent<boolean>): void;
  private updateHideActiontextOnPanel;
  private updateHighlightOnPanel;
  private updateGroupContentWithHeader;
  render(): any;
  private getAllAccordionPanelsFromHostElement;
  /**
   * Close all accordion panels except the one that match the eventTarget reference
   */
  private closeAllAccordionsExcept;
}
