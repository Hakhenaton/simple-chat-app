import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { WcsGridPaginationChangeEventDetails } from '../grid/grid-interface';
/**
 * The grid pagination is a subcomponent of `wcs-grid`, slotted in `grid-pagination` under the `<table>` element.
 */
export declare class GridPagination implements ComponentInterface {
  static readonly INDEX_FIRST_PAGE: number;
  /**
   * Set the available page sizes in the pagination dropdown on the left.
   */
  availablePageSizes: number[];
  /**
   * The current page of the pagination. First page starts at index 0.
   */
  currentPage: number;
  /**
   * Maximum number of elements shown per page.
   * Default is the first value of `availablePageSizes`.
   */
  pageSize: number;
  /**
   * Total elements in the grid.
   * - **Grid in `Server mode`** : You have to set `itemsCount` = your total data length.
   * - **Grid not in Server mode** : Do not set it manually : itemsCount is set and updated every pagination refresh.
   */
  itemsCount: number;
  /**
   * Max number of pages.
   * - **Grid in `Server mode`** : You have to set `pageCount` = `itemsCount` divided by `pageSize`.
   * - **Grid not in Server mode** : Do not set it manually : pageCount is set and updated every pagination refresh.
   */
  pageCount: number;
  /**
   * Event emitted when the pagination changes.
   */
  wcsGridPaginationChange: EventEmitter<WcsGridPaginationChangeEventDetails>;
  private lastPage;
  private nextPage;
  private canGoToNextPage;
  private previousPage;
  private canGoToPreviousPage;
  private firstPage;
  private onChangePagesize;
  private emitPaginationChange;
  render(): any;
}
