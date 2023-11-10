import { ComponentInterface } from '../../stencil-public-runtime';
import { MaterialIconFamily, MaterialIconSize } from './mat-icon-interface';
export declare class MatIcon implements ComponentInterface {
  /**
   * Use the icon name from Material Icons
   */
  icon: string;
  /**
   * Size of the icon
   */
  size: MaterialIconSize;
  /**
   * Family of the icon
   */
  family: MaterialIconFamily;
  render(): any;
}
