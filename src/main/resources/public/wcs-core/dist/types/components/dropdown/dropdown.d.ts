import { ComponentInterface } from '../../stencil-public-runtime';
import { WcsButtonMode, WcsButtonShape } from '../button/button-interface';
import { WcsDropdownPlacement } from './dropdown-interface';
export declare class Dropdown implements ComponentInterface {
  private el;
  /** Hides the arrow in the button */
  noArrow: boolean;
  /** Dropdown's button mode */
  mode: WcsButtonMode;
  /** Dropdown's button shape */
  shape: WcsButtonShape;
  /** Specifies whether the dropdown button is clickable or not */
  disabled: boolean;
  /** placement of the dropdown's popover */
  placement: WcsDropdownPlacement;
  private expanded;
  private popper;
  private buttonTextColor;
  protected placementChange(): void;
  componentDidLoad(): void;
  private fixForFirefoxBelow63;
  private onButtonClick;
  onWindowClickEvent(event: MouseEvent): void;
  dropdownItemClick(_: CustomEvent<void>): void;
  onKeyDown(evt: KeyboardEvent): void;
  private focusFirstItemIfPresent;
  private moveFocusedItemByDirection;
  private closeOverlayAndFocusButton;
  componentDidRender(): void;
  render(): any;
}
