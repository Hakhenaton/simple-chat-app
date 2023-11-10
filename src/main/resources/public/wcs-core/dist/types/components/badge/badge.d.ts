import { ComponentInterface } from '../../stencil-public-runtime';
import { BadgeColor, BadgeShape } from './badge-interface';
export declare class Badge implements ComponentInterface {
  /**
   * Define the shape of the badge
   */
  shape: BadgeShape;
  /**
   * Allows you to change the color of the badge to make it less bright (based on the color chosen by the CSS class).
   */
  color: BadgeColor;
  render(): any;
}
