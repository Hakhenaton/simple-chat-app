import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { RadioChosedEvent } from './radio-interface';
import { RadioGroupMode } from '../radio-group/radio-group-interface';
export declare class Radio implements ComponentInterface {
  private inputId;
  private inputEl;
  private el;
  mode: RadioGroupMode;
  value: any | any[] | undefined | null;
  label: string;
  /**
   * If `true`, the radio is selected.
   */
  checked: boolean;
  /**
   * If `true`, the user cannot interact with the radio.
   */
  disabled: boolean;
  wcsRadioClick: EventEmitter<RadioChosedEvent>;
  onKeyDown(_event: KeyboardEvent): void;
  componentWillLoad(): Promise<void> | void;
  componentDidLoad(): void;
  emitRadioChangeEvent(): void;
  render(): any;
}
