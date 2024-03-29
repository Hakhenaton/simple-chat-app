import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * The grid custom cell is a subcomponent of `wcs-grid`.
 */
export declare class GridCustomCell implements ComponentInterface {
  /**
   * ID of the column for which to render the cell
   */
  columnId: string;
  /**
   * Key value of the object rendered for the cell's row
   */
  rowId: any;
  render(): any;
}
