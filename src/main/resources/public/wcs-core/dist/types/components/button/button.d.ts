import { ComponentInterface } from '../../stencil-public-runtime';
import { WcsButtonMode, WcsButtonShape, WcsButtonSize, WcsButtonType } from './button-interface';
/**
 * Button component, can also be a link when specifying href.
 *
 * ## Click event
 *
 * The WCS button relies on the native click event to pass a user click to your app.
 * For now, it's not possible for us to prevent the click event to be fired when the button's disabled attribute is true.
 * This means you'll receive click events on a disabled wcs button.
 * If you're using the button with a library like Angular or React, they have internal mechanisms to prevent this behavior. Your callbacks will therefore not be called.
 * To fix this problem, we plan to provide a wcsClick event in addition to the native click for applications developed without frameworks.
 */
export declare class Button implements ComponentInterface {
  private el;
  /**
   * Specify the button type.
   */
  type: WcsButtonType;
  /**
   * Set a URL to point to.<br/>
   * If specified use a `a` tag instead of `btn`.
   */
  href?: string;
  /**
   * Specifies where to open the linked document when using href (see prop above)<br/>
   * Default '_self' will open the linked document in the same frame as it was clicked
   */
  target?: '_blank' | '_self';
  /**
   * Specify whether the button is disabled or not.
   */
  disabled: boolean;
  /**
   * Specify whether the button should have a ripple effect or not.
   */
  ripple: boolean;
  private mdcRipple;
  /**
   * Specify the size of the button.
   */
  size: WcsButtonSize;
  /**
   * Specify the shape of the button.
   */
  shape: WcsButtonShape;
  /**
   * This attribute specify the appearance of the button.
   */
  mode: WcsButtonMode;
  /**
   * Flag to display spinner until the end of action
   */
  loading: boolean;
  /**
   * Native event click is emit event if we decide to stop propagation of it
   * @param ev
   */
  onClick(ev: Event): void;
  componentWillLoad(): Promise<void> | void;
  componentDidLoad(): void;
  private enabledRippleEffect;
  private disabledRippleEffect;
  private getTagName;
  onRippleChange(): void;
  render(): any;
}
