import { ComponentInterface } from '../../stencil-public-runtime';
import { WcsTooltipAppendTo, WcsTooltipPosition } from './tooltip-interface';
/**
 * Tooltips are used to provide additional information for features available on the website. These can improve the user
 * experience or simply show additional information. Tooltips appear when the user rolls over or clicks on them
 * (for longer content).
 *
 * Note that this component is based on the Tippy.js library : https://atomiks.github.io/tippyjs/
 */
export declare class Tooltip implements ComponentInterface {
  /**
   * The **id** of the element the tooltip's going to describe.
   *
   * This property cannot be modified after initialization.
   *
   * @example
   * ```html
   * <span id="tooltiped">Some content</span>
   * <wcs-tooltip for="tooltiped">A tooltip!</wcs-tooltip>
   * ```
   */
  for: string;
  /**
   * Where the tooltip is going to show relative to the element it's describing.
   */
  position: WcsTooltipPosition;
  /**
   * Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside
   * without hiding.
   */
  interactive: boolean;
  /**
   * Specifies the maximum width of the tooltip. Useful to prevent it from being too horizontally wide to read.
   *
   * If the viewport's width is smaller than maxWidth, core CSS ensures the tippy remains smaller than the screen.
   */
  maxWidth: string | number;
  /**
   * Delay in ms once a trigger event is fired before the tooltip shows or hides.
   *
   * You can provide an array with two values to define a different duration for show and hide.
   *
   * `[showDelay, hideDelay]`
   *
   * Use null to use default value.
   */
  delay: number | [number, number];
  /**
   * Duration in ms of the transition animation.
   */
  duration: number | [number, number];
  /**
   * Determines the events that cause the tooltip to show. Multiple event names are separated by spaces.
   *
   * See: https://atomiks.github.io/tippyjs/v6/all-props/#trigger
   */
  trigger: string;
  /**
   * Allows you to change the theme used by tippy.
   *
   * The WCS theme is used by default and uses the WCS CSS variables.
   *
   * You can create a theme by following this documentation and choosing a custom name :
   * https://atomiks.github.io/tippyjs/v6/themes/
   */
  theme: string;
  /**
   * You can use this property instead of the slot API to affect content in the tooltip.
   *
   * This makes it easier to manage the update if the tooltip contains elements that are not mutated when their
   * content changes. Indeed, if the slot is used, the tooltip is updated only if the structure of the slotted DOM
   * changes (the DOM must be mutated).
   *
   * The two APIs are not mutually exclusive, if both are filled in (the prop + the slot) the rendering will first
   * display the content of this property and then the slotted elements.
   */
  content: string;
  /**
   * The element to append the tooltip to. Default behaviour is `() => document.body`. If interactive: true,
   * the default behavior is appendTo: "parent"
   *
   * See: https://atomiks.github.io/tippyjs/v6/all-props/#appendto
   */
  appendTo: WcsTooltipAppendTo;
  private el;
  private tippyInstance;
  componentWillLoad(): Promise<void> | void;
  private getTooltipContentFromPropAndSlot;
  private updateProps;
  private updateTippyContent;
  /**
   * Programmatically hide the tooltip
   */
  hide(): Promise<void>;
  /**
   * Programmatically show the tooltip
   */
  show(): Promise<void>;
  /**
   * Temporarily prevent the tooltip from showing or hiding
   */
  disable(): Promise<void>;
  /**
   * Re-enable a disabled tooltip
   */
  enable(): Promise<void>;
  disconnectedCallback(): void;
  render(): any;
}
