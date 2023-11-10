import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { CategoryOpenedEventDetail } from '../com-nav/com-nav-interface';
export declare class ComNavCategory implements ComponentInterface {
  private el;
  label: string;
  private categoryOpen;
  wcsCategoryOpened: EventEmitter<CategoryOpenedEventDetail>;
  wcsCategoryItemClicked: EventEmitter<UIEvent>;
  onWindowClickEvent(_: MouseEvent): void;
  onSubmenuOpened(event: CustomEvent<CategoryOpenedEventDetail>): void;
  /**
   * Open the menu if it is closed and closed the menu if it is already opened
   * @param _event the keyboard event
   * @private
   */
  private handleMenuKeyDown;
  /**
   * Handle key down on category items
   * @param _event the keyboard event
   * @private
   */
  private handleCategoryItemsKeyDown;
  /**
   * Close the category
   */
  close(): Promise<void>;
  /**
   * Opens the category
   */
  open(): Promise<void>;
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  private onClick;
  /**
   * Close the category and fire item click if we detect a mouse click on a slotted `a` element.
   * @param evt
   * @private
   */
  private handleItemClick;
  render(): any;
}
