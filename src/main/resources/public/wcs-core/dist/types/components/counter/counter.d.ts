import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { CounterChangeEventDetail, WcsCounterSize } from './counter-interface';
/**
 * Counter component, meant to be used for small range of values (e.g : 0 - 5).<br>
 * For larger or specific ranges, please use [wcs-input (type number)](.?path=/docs/components-input--documentation)
 */
export declare class Counter implements ComponentInterface {
  private el;
  /**
   * Specify the size (height) of the counter.
   */
  size: WcsCounterSize;
  /**
   * The label of the counter.<br/>
   * e.g. Number of passengers, train carriages, railroad tracks...
   */
  label: string;
  /**
   * The minimum value of the counter.
   * If the value of the min attribute isn't set, then the element has no minimum value.
   */
  min?: number;
  /**
   * The maximum value of the counter.
   * If the value of the max attribute isn't set, then the element has no maximum value.
   */
  max?: number;
  /**
   * Defines by how much the counter will be incremented or decremented.
   */
  step: number;
  /**
   * Emitted when the value of the counter has changed.
   */
  wcsChange: EventEmitter<CounterChangeEventDetail>;
  /**
   * The current value of the counter.
   */
  value: number;
  /**
   * Only for animation and display purpose
   */
  private displayedValue;
  private animateRunning;
  /**
   * Emitted when the counter loses focus.
   */
  wcsBlur: EventEmitter<FocusEvent>;
  componentWillLoad(): void;
  /**
   * Current value change => handle event and interval
   */
  valueChange(newVal: any, oldVal: any): void;
  private handleValueChange;
  private updateDisplayValueIfNoAnimationRunning;
  private ensureValueIsNotOutOfMinMax;
  private setMinimumIfValueIsUndefinedOrNull;
  onKeyDown(_event: KeyboardEvent): void;
  private notifyChange;
  private getCounterContainer;
  private handleDecrement;
  private handleIncrement;
  private animate;
  render(): any;
}
