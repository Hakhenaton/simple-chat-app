import { ComponentInterface } from '../../stencil-public-runtime';
import { WcsSize } from "../../shared-types";
export type WcsNativeSelectSize = Extract<WcsSize, 'l' | 'm'>;
/**
 * The `wcs-native-select` component is designed to accept a native <select> element as a slotted child. This choice
 * allows developers to bind the <select> element using the framework of their choice, without the need to re-expose all the
 * properties of the <select> and <option> elements in this component.
 *
 * The component wraps the native <select> element and provides custom styles and behavior, while preserving the native
 * functionality and accessibility.
 *
 * Example usage:
 *
 * <wcs-native-select>
 *   <select>
 *     <option value="option1">Option 1</option>
 *     <option value="option2">Option 2</option>
 *     <option value="option3">Option 3</option>
 *   </select>
 * </wcs-native-select>
 */
export declare class NativeSelect implements ComponentInterface {
  /**
   * The `size` property controls the size of the slotted `select` element by adjusting its padding.
   * There are two possible size options:
   * - 'm': medium size
   * - 'l': large size
   *
   * The default value is 'm'.
   */
  size: WcsNativeSelectSize;
  private el;
  private expanded;
  private disabled;
  private selectElement;
  private observer;
  private readonly SLOTTED_SELECT_TRACKED_ATTRIBUTES_LIST;
  componentWillLoad(): void;
  private onSelectedOptionChange;
  private isPlaceholderOptionSelected;
  /**
   * This method should always unset all styles modified by the `applyPlaceholderStylesOnNativeSlottedSelectElement()`
   * @private
   */
  private applySelectedOptionStylesOnNativeSlottedSelectElement;
  /**
   * This method apply styles when the placeholder is shown.
   *
   * We use javascript because we cannot achieve that behaviour in pure css when the native select is not required
   * @private
   */
  private applyPlaceholderStylesOnNativeSlottedSelectElement;
  private updateHostAttributeWithSlottedSelect;
  disconnectedCallback(): void;
  render(): any;
}
