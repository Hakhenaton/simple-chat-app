import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { HorizontalStepClickEvent, HorizontalStepConfig, HorizontalStepperMode } from './horizontal-stepper-interface';
export declare class HorizontalStepper implements ComponentInterface {
  private el;
  /**
   * index of the active step. The index corresponds to the index of the step in the 'steps' list
   */
  currentStep: number;
  /**
   * steps to display
   */
  steps: HorizontalStepConfig[];
  /**
   * Specifies if the stepper is in linear mode (the user can only click on the next step)
   * or non-linear (the user can click on any step)
   */
  mode: HorizontalStepperMode;
  /**
   * Specifies whether a check should be displayed when a step is passed.
   */
  checkOnComplete: boolean;
  /**
   * Emits when the user selects a new step.
   */
  wcsHorizontalStepClick: EventEmitter<HorizontalStepClickEvent>;
  private internalCurrentStep;
  componentWillLoad(): Promise<void> | void;
  private onCurrentStepChange;
  previous(): Promise<void>;
  next(): Promise<void>;
  private navigateToIndex;
  render(): any;
  private isComplete;
  private renderLabels;
  private isDisable;
  private isNextPossibleStep;
  private previousStepIsCompleteAndNotActive;
}
