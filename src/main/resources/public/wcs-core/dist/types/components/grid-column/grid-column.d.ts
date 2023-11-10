import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { WcsCellFormatter, WcsGridColumnSortChangeEventDetails, WcsSortFn, WcsSortOrder } from '../grid/grid-interface';
/**
 * The grid column is a subcomponent of `wcs-grid` that represents a column of the table.
 * @cssprop --wcs-grid-column-border-left - Border separator between column names
 * @csspart [path]-column - CSS part for each column for styling. e.g: first_name-column, email-column
 */
export declare class GridColumn implements ComponentInterface {
  private el;
  /**
   * Represents the name of the field from the `data` object (e.g: first_name, last_name, email, ...)
   */
  path: string;
  /**
   * The name of the column displayed on the table (e.g: First Name, Last Name, Email, ...)
   */
  name: string;
  /**
   * Make the column sortable.
   */
  sort: boolean;
  /**
   * Customizable sort function to change the comparison of values.
   */
  sortFn: WcsSortFn;
  /**
   * Customizable formatter function to render the cell differently.
   */
  formatter: WcsCellFormatter;
  /**
   * Defines if the column sort is ascending or descending.
   * `none` = the column is not sorted.
   */
  sortOrder: WcsSortOrder;
  /**
   * Set the column `<th>` element width.
   */
  width: string;
  /**
   * Set to true if using a `wcs-custom-cell` linked to it.
   */
  customCells: boolean;
  /**
   * Flag to hide the column.
   */
  hidden: boolean;
  /**
   * Event emitted when the sort of the column is changed.
   */
  wcsSortChange: EventEmitter<WcsGridColumnSortChangeEventDetails>;
  /**
   * Event emitted if the column is dynamically switching visibility.
   */
  wcsHiddenChange: EventEmitter<boolean>;
  parseMyObjectProp(newValue: boolean): void;
  sortOrderChange(_: WcsSortOrder): void;
  emitSortConfig(): void;
  render(): any;
  private onSortClick;
}
