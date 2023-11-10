import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { MenuOpenedEventDetail } from '../com-nav/com-nav-interface';
export declare class ComNavSubmenu implements ComponentInterface {
  private el;
  label: string;
  panelTitle: string;
  panelDescription: string;
  private menuOpen;
  wcsSubmenuOpened: EventEmitter<MenuOpenedEventDetail>;
  /**
   * Emitted when a user click on a final navigation action.
   *
   * Used by the com-nav component to close the mobile menu overlay when a user click on a final action.
   */
  wcsClickOnFinalAction: EventEmitter<void>;
  componentWillLoad(): Promise<void> | void;
  /**
   * If the user clicks outside the menu, we close it
   */
  onWindowClickEvent(_: MouseEvent): void;
  onSubmenuOpened(event: CustomEvent<MenuOpenedEventDetail>): void;
  /**
   * Close the menu when escape is pressed
   * @param _event keydown event
   */
  onEscapeKeyDown(_event: KeyboardEvent): void;
  /**
   * Close the menu
   */
  close(): Promise<void>;
  /**
   * Opens the menu
   */
  open(): Promise<void>;
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  private onClick;
  /**
   * Handle key down on menu items
   * @param _event the keyboard event
   * @private
   */
  private handleMenuItemsKeyDown;
  /**
   * Open the menu if it is closed and closed the menu if it is already opened
   * @param _event the keyboard event
   * @private
   */
  private handleMenuKeyDown;
  private handleMenuItemsClick;
  /**
   * handle category item click to close the submenu
   * @param _
   * @private
   */
  private wcsCategoryItemClickedHandler;
  render(): any;
}
