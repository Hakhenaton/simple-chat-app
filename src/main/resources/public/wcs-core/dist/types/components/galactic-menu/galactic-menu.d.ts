import { ComponentInterface } from '../../stencil-public-runtime';
export declare class Galactic implements ComponentInterface {
  private el;
  private showPopoverMenu;
  private popper;
  /**
   * Text to be displayed in the galactic bar
   */
  text: string;
  private menu;
  private tooltip;
  componentDidLoad(): void;
  onWindowClickEvent(event: MouseEvent): void;
  private toogleMenu;
  componentDidRender(): void;
  render(): any;
}
