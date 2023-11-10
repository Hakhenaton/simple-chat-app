import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * TODO:
 * - [ ] Suffix button style
 */
export declare class FormField implements ComponentInterface {
  private el;
  /**
   * Specifies whether the form field is in an error state. Displays the field border in red and the message contained in the wcs-error component
   */
  isError: boolean;
  private hasPrefix;
  private hasSuffix;
  private spiedElement;
  private observer;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private isErrorChange;
  private updateErrorStateOnInput;
  /**
   * This function return true if the form field contains an element with tagName matches a value of the types param
   * @param types
   * @private
   */
  private spiedElementIsOfType;
  private addRequiredMarkerToLabel;
  private initSpiedElement;
  private updateLabelRequiredFlag;
  disconnectedCallback(): void;
  render(): any;
  private onFormInputSlotChange;
}
