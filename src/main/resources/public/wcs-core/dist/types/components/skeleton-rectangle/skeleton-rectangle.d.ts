import { ComponentInterface } from "../../stencil-public-runtime";
import { WcsSkeletonAnimation } from "../skeleton/skeleton-interface";
import { CssTypes } from "../../shared-types";
/**
 * Use a skeleton rectangle as a placeholder for large images or square-shaped components
 *
 * @cssprop --wcs-skeleton-border-radius - Controls the border-radius of the 'rounded' skeleton rectangle (default 0.5rem)
 */
export declare class SkeletonRectangle implements ComponentInterface {
  /**
   * Specifies the animation of the skeleton
   */
  animation: WcsSkeletonAnimation;
  /**
   * Adds a border radius on the skeleton if true
   */
  rounded: boolean;
  /**
   * Specifies the height of the skeleton (can be any valid CSS value)
   */
  height: CssTypes.Height;
  /**
   * Specifies the width of the skeleton (can be any valid CSS value)
   */
  width: CssTypes.Width;
  render(): any;
}
