import { ComponentInterface } from "../../stencil-public-runtime";
import { WcsSkeletonAnimation } from "../skeleton/skeleton-interface";
/**
 * Use a skeleton text as a placeholder for titles or paragraphs.
 */
export declare class SkeletonText implements ComponentInterface {
  /**
   * Specifies the animation of the skeleton
   */
  animation: WcsSkeletonAnimation;
  /**
   * Specifies the line height of the text skeleton
   */
  height: 'h1' | 'h2' | 'h3' | 'caption' | 'body';
  render(): any;
}
