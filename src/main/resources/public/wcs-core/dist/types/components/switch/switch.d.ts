import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { SwitchChangeEventDetail, SwitchLabelAlignment } from './switch-interface';
export declare class Switch implements ComponentInterface {
  private switchId;
  name: string;
  /**
   * If `true`, the switch is selected.
   */
  checked: boolean;
  /**
   * Emitted when the checked property has changed.
   */
  wcsChange: EventEmitter<SwitchChangeEventDetail>;
  /**
   * Specifie the alignment of the switch with the label content
   */
  labelAlignment: SwitchLabelAlignment;
  /**
   * Specify wether the switch is disabled or not.
   */
  disabled: boolean;
  toggleChange(_event: Event): void;
  render(): any;
}
