import { ComponentInterface } from "../../stencil-public-runtime";
import { WcsSkeletonAnimation } from "../skeleton/skeleton-interface";
/**
 * Use a skeleton circle as a placeholder round images, illustrations or components
 */
export declare class SkeletonCircle implements ComponentInterface {
  /**
   * Specifies the animation of the skeleton
   */
  animation: WcsSkeletonAnimation;
  /**
   * Specifies the radius of the circle in px
   */
  radius: number;
  render(): any;
}
