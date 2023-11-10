import { ComponentInterface } from '../../stencil-public-runtime';
export declare class ActionBar implements ComponentInterface {
  private el;
  /**
   * Determines if the action bar should have a border at the bottom.
   * You should not use this property if a gutter is already present on tabs
   */
  gutter: boolean;
  private hasTabs;
  componentWillLoad(): Promise<void> | void;
  render(): any;
}
