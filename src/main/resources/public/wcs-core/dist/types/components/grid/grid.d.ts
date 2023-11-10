import { ComponentDidLoad, ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { WcsGridAllRowSelectedEventDetails, WcsGridColumnSortChangeEventDetails, WcsGridPaginationChangeEventDetails, WcsGridRow, WcsGridRowSelectedEventDetails, WcsGridSelectionConfig } from './grid-interface';
/**
 * The grid component is a complex component used as an HTML table to display collections of data.
 *
 * @cssprop --wcs-grid-highlight-color - Color for selected rows
 * @cssprop --wcs-grid-column-border-left - Left border of all grid headers
 * @slot grid-column - The slot containing the column of the grid in the `<thead>`
 * @slot grid-pagination - The slot containing the pagination of the grid below the `<table>`
 */
export declare class Grid implements ComponentInterface, ComponentDidLoad {
  private el;
  /**
   * Manage sort and pagination with a backend server when set to `true`
   */
  serverMode: boolean;
  /**
   * Contains the data to display in the table from a js object
   */
  data: any[];
  /**
   * Flag to display a spinner during data loading
   */
  loading: boolean;
  /**
   * Used to manage grid's row selection.
   * "none": no row can be selected.
   * "multiple": several rows can be selected.
   * "single": one row only can be selected.
   */
  selectionConfig: WcsGridSelectionConfig;
  /**
   * Set the selected items (rows)
   */
  selectedItems: any | any[];
  /**
   * Automatically set by the component to reference the wcs-grid-pagination HTML element by its id.
   */
  wcsGridPaginationId: string;
  /**
   * Name of the object's key that will be used to display the cells whose `keyValue` attribute matches to the
   * object's value for this key.
   */
  rowIdPath: string;
  private columns;
  private paginationEl;
  /**
   * Rows to display, contains user data and meta data
   */
  private rows;
  /**
   * Event emitted when a row is selected or unselected
   */
  wcsGridSelectionChange: EventEmitter<WcsGridRowSelectedEventDetails>;
  /**
   * Event emitted when all rows are selected or unselected
   */
  wcsGridAllSelectionChange: EventEmitter<WcsGridAllRowSelectedEventDetails>;
  onDataChange(newValue: any[]): void;
  onSelectedItemsPropertyChange(newValue: any | any[]): void;
  onHiddenColumnChange(): void;
  private updateSelectionWithValues;
  private wcsGridRowToWcsGridRowData;
  private updateGridRows;
  componentDidLoad(): void;
  /**
   * Handle existing column's filters (defined before the grid is instantiated)
   * @private
   */
  private refreshSort;
  private disableSortOrderForColumns;
  private getGridColumnsFromTemplate;
  private getGridPaginationsFromTemplate;
  sortChangeEventHandler(event: CustomEvent<WcsGridColumnSortChangeEventDetails>): void;
  /**
   * Sorts the grid rows according to the given column's configuration
   * @param colmun Column from which to extract the sorting configuration
   * @private
   */
  private sortBy;
  /**
   * Update the page's number of all rows
   */
  private updatePageIndex;
  paginationChangeEventHandler(): void;
  paginationChangeEventHandlerOutside(event: CustomEvent<WcsGridPaginationChangeEventDetails>): void;
  private onPaginationChange;
  private onRowSelection;
  private selectAllRows;
  private allRowsAreSelected;
  private getRowsForCurrentPage;
  renderSelectionColumn(row: WcsGridRow): any;
  private getCellContent;
  private totalColumnCount;
  render(): any;
  private renderRow;
}
/**
 * Pour resize le tableau
 * https://www.brainbell.com/javascript/making-resizable-table-js.htmls
 *
 */
