import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Tab content component.
 * Use this component to specify the content of a component.
 */
export declare class Tab {
  /**
   * The header you want to be displayed for this tab.
   */
  header: string;
  itemKey: any;
  /**
   * Do not use, meant for internal use only.
   * @inner
   * @ignore
   */
  tabLoaded: EventEmitter<void>;
  componentDidLoad(): void;
  render(): any;
}
