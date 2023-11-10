import { ComponentInterface } from '../../stencil-public-runtime';
export declare class ComNav implements ComponentInterface {
  private el;
  /** Name of the application to be displayed in the menu bar */
  appName: string;
  private mobileMenuOpen;
  private currentActiveSizing;
  private resizeObserver;
  private hasAlreadyRegisteredClickHandlerOnSlottedLink;
  private mobileMenuIconClick;
  disconnectedCallback(): void;
  componentWillLoad(): Promise<void> | void;
  componentDidRender(): void;
  private registerHandlerToCloseMobileMenuOnClickOnSlottedLinkTag;
  onClickOnFinalAction(): void;
  onClickOnFinalActionCat(): void;
  render(): any;
  /**
   * Handle the keydown event on the mobile menu icon. Open the menu if the user press space or enter.
   * @param evt The keydown event.
   * @private
   */
  private mobileMenuIconOnKeyDown;
  /**
   * Close the mobile menu if the user press escape.
   * @param evt keydown event on window target.
   */
  exitMobileMenuOnKeyDown(evt: KeyboardEvent): void;
}
