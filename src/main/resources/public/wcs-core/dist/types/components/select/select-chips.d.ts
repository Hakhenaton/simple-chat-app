import { FunctionalComponent } from '../../stencil-public-runtime';
import { SelectOptionValue } from '../select-option/select-option-interface';
export declare const SelectChips: FunctionalComponent<{
  disabled: boolean;
  option: SelectOptionValue;
  onRemove: (option: SelectOptionValue) => void;
}>;
