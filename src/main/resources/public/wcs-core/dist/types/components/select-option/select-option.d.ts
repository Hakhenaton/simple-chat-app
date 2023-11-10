import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { SelectOptionChosedEvent } from './select-option-interface';
/**
 * Select option component, use in conjunction with wcs-select.
 */
export declare class SelectOption implements ComponentInterface {
  private el;
  private selectOptionId;
  /** Wether this option can be selected. */
  disabled: boolean;
  /** Wether this option is selected. */
  selected: boolean;
  /** The option value, not what's displayed, use inner text instead. */
  value?: any;
  /** Chip's displayed text color. */
  chipColor?: string;
  /** Chip's background color. */
  chipBackgroundColor?: string;
  /**
   * This property musn't be set by hand, it is used by the `wcs-select` component.
   * If you want a multiple select, set `multiple` attribute on the parent select instead.
   * @internal
   * @ignore
   */
  multiple: boolean;
  private mdcRipple;
  wcsSelectOptionClick: EventEmitter<SelectOptionChosedEvent>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private chooseOption;
  onMouseDown(event: MouseEvent): void;
  /**
   * Handles the keydown event to update the selection.
   * @param event keyboard event
   */
  handleKeydown(event: KeyboardEvent): void;
  render(): any;
}
