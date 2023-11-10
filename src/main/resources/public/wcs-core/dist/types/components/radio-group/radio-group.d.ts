import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { RadioGroupChangeEventDetail, RadioGroupMode } from './radio-group-interface';
import { RadioChosedEvent } from '../radio/radio-interface';
export declare class RadioGroup implements ComponentInterface {
  value: any | any[] | undefined | null;
  name: any;
  mode: RadioGroupMode;
  private el;
  /** Emitted when the value has changed. */
  wcsChange: EventEmitter<RadioGroupChangeEventDetail>;
  onValueChangeHandler(newValue: any): void;
  componentDidLoad(): void;
  private get options();
  selectedOptionChanged(event: CustomEvent<RadioChosedEvent>): void;
  private updateOptionsState;
  render(): any;
}
