import { ComponentInterface } from '../../stencil-public-runtime';
export declare class NavItem implements ComponentInterface {
  private el;
  /**
   * This attribute specify the text of the item.
   */
  text: string;
  /**
   * Attributes mapped to a <a> tag.
   *
   * Don't forget to specify [routerLink] if using in conjuction with angular router.
   */
  href: string;
  onKeyDown(_event: KeyboardEvent): void;
  render(): any;
}
