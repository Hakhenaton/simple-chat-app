import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { CheckboxChangeEventDetail, CheckboxLabelAlignment } from './checkbox-interface';
export declare class Checkbox implements ComponentInterface {
  private checkboxId;
  name: string;
  /**
   * If `true` the checkbox is in indeterminate state.
   */
  indeterminate: boolean;
  /**
   * If `true`, the checkbox is selected.
   */
  checked: boolean;
  /**
   * Specifie the alignment of the checkbox with the label content
   */
  labelAlignment: CheckboxLabelAlignment;
  /**
   * Specify wether the checkbox is disabled or not.
   */
  disabled: boolean;
  /**
   * Emitted when the checked property has changed.
   */
  wcsChange: EventEmitter<CheckboxChangeEventDetail>;
  handleChange(_event: Event): void;
  render(): any;
}
