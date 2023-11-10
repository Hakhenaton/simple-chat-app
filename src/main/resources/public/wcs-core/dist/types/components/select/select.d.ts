import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { SelectChangeEventDetail, WcsSelectSize } from './select-interface';
import { SelectOptionChosedEvent, SelectOptionValue } from '../select-option/select-option-interface';
/**
 * Select component, use in conjuction with wcs-select-option.
 *
 * @example ```hmtl
 *  <wcs-select>
 *      <wcs-select-option value="1">One</wcs-select-option>
 *  </wcs-select>```
 */
export declare class Select implements ComponentInterface {
  private stateService;
  private selectId;
  private labelElement;
  private optionsEl;
  private optionsId;
  private controlEl;
  private values;
  private lastSelectedOptionElement;
  private lastFocusedOptionElement;
  private el;
  /** Wether the select is expanded */
  private expanded;
  /**
   * Specify the size (height) of the select.
   */
  size: WcsSelectSize;
  /** Wether the component is fully loaded in the DOM. */
  private hasLoaded;
  /** Text to display for the selected option, when no option is selected, the value is undefined. */
  private displayText;
  /** When the host is focused. */
  private focused;
  /** The currently selected value. */
  value?: any | null;
  /** The text to display when the select is empty. */
  placeholder?: string | null;
  /** If `true`, the user cannot interact with the select. */
  disabled: boolean;
  /** If `true`, the user can select multiple values at once. */
  multiple: boolean;
  /** If `true`, selected items are shown in chips mode. */
  chips: boolean;
  /** The name of the control, which is submitted with the form data. */
  name?: string;
  /** Function used to compare options, default : deep comparison. */
  compareWith?: (optionValue: any, selectedValue: any) => boolean;
  private popper;
  private overlayDirection;
  /** Emitted when the value has changed. */
  wcsChange: EventEmitter<SelectChangeEventDetail>;
  /** Emitted when the select has focus. */
  wcsFocus: EventEmitter<void>;
  /** Emitted when the select loses focus. */
  wcsBlur: EventEmitter<void>;
  /** Open the component. */
  open(): Promise<void>;
  /** Close the component. */
  close(): Promise<void>;
  onValueChangeHandler(newValue: any): void;
  private updateSelectedValue;
  /**
   * Reset the select: unselects all options for multiple mode and displays the placeholder
   * @private
   */
  private reset;
  componentDidLoad(): void;
  private createPopperInstance;
  private emitChange;
  private replaceOptions_firefoxBefore63;
  private listenDomUpdate_firefoxBefore63;
  componentWillLoad(): Promise<void> | void;
  componentWillUpdate(): void;
  private get options();
  private get notDisabledOptions();
  private initMachineOptions;
  private handleClickEvent;
  private handleClickOnMultiple;
  private updateValueWithValues;
  private handleNormalClick;
  disconnectedCallback(): void;
  private addRippleEffect;
  private get hasValue();
  onMouseDown(event: MouseEvent): void;
  onWindowClickEvent(event: MouseEvent): void;
  onKeyDown(_event: KeyboardEvent): void;
  private getClosestActiveOptionIndexForState;
  private selectOption;
  private selectClosestOption;
  private selectFirstOption;
  private selectLastOption;
  private focusOption;
  private focusClosestOption;
  private focusFirstOption;
  private focusLastOption;
  selectedOptionChanged(event: CustomEvent<SelectOptionChosedEvent>): void;
  sendOptionSelectedToStateMachine(event: SelectOptionChosedEvent): void;
  onSlotchange(): void;
  removeChip(v: SelectOptionValue): void;
  componentDidRender(): void;
  render(): any;
  private focusedAttributes;
}
