import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { WcsTabsAlignment, WcsTabChangeEvent } from './tabs-interface';
/**
 * Tabs component to switch between tab content.
 * Use in conjuction with `wcs-tab`.
 *
 * @example
 * ```html
 * <wcs-tabs>
 *    <wcs-tab header="One">The content !</wcs-tab>
 *    <wcs-tab header="Two">More content !</wcs-tab>
 * </wcs-tabs>
 * ```
 */
export declare class Tabs implements ComponentInterface {
  /**
   * Tab headers alignment.
   */
  align: WcsTabsAlignment;
  /**
   * Current selected tab index.
   * Starts at 0.
   */
  selectedIndex: number;
  selectedKey: any;
  /**
   * Whether to skip rendering the tabpanel with the content of the selected tab. Use this prop if you plan to
   * separately render the tab content.
   */
  headersOnly: boolean;
  /** Determines if tabs header should have a border at the bottom */
  gutter: boolean;
  /**
   *
   * Emitted when the selected tab change.
   */
  tabChange: EventEmitter<WcsTabChangeEvent>;
  private el;
  private headers;
  private currentActiveTabIndex;
  selectedIndexChanged(newValue: number): void;
  selectedTabkeyChanged(newValue: any): void;
  private emitActiveTabChange;
  private updateCurrentActiveIndexByTabKey;
  onTabLoaded(): void;
  componentDidLoad(): void;
  private putTabsInCorrectDivIfTheyAreNot;
  handleKeyDown(ev: KeyboardEvent, tabIndex: number): void;
  private refreshHeaders;
  private get tabs();
  private selectTabAndEmitChangeEvent;
  componentWillUpdate(): void;
  private updateTabVisibility;
  private hideAllTabsContent;
  render(): any;
}
