import { ComponentInterface } from '../../stencil-public-runtime';
import { WcsSpinnerMode } from './spinner-interface';
export declare class Spinner implements ComponentInterface {
  /**
   * Indicates the spinner display mode.
   * Accepted values: `border` or `growing`
   */
  mode: WcsSpinnerMode;
  render(): any;
}
