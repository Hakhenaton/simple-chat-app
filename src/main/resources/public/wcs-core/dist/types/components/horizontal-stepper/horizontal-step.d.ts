import { FunctionalComponent } from '../../stencil-public-runtime';
import { HorizontalStepConfig } from './horizontal-stepper-interface';
interface HorizontalStepProps {
  step: HorizontalStepConfig;
  checkOnComplete: boolean;
  complete: boolean;
  passed: boolean;
  active: boolean;
  first: boolean;
  disable: boolean;
  onClick: (step: HorizontalStepConfig) => void;
}
export declare const HorizontalStep: FunctionalComponent<HorizontalStepProps>;
export {};
