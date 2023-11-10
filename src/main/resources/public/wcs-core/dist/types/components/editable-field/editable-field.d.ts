import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { EditableComponentUpdateEvent, EditableFieldType, FormatFn, ValidateFn, WcsEditableFieldSize } from './editable-field-interface';
export declare class EditableField implements ComponentInterface {
  private el;
  private currentState;
  /**
   * Specifies which component is used for editing
   */
  type: EditableFieldType;
  /**
   * Label of the field
   */
  label: string;
  /**
   * event called at each (valid) update of the field.
   */
  wcsChange: EventEmitter<EditableComponentUpdateEvent>;
  /**
   * Specify whether the field is editable or not
   */
  readonly: boolean;
  /**
   * Initial value of the field
   */
  value: any;
  /**
   * Function to customize the validation of the data during the update
   */
  validateFn: ValidateFn<any>;
  /**
   * Function used to format the value
   */
  formatFn: FormatFn<any>;
  /**
   * Error message displayed under the field if validation failed.
   */
  errorMsg: string;
  /**
   * Specify the size (height) of the editable field.
   */
  size: WcsEditableFieldSize;
  private isError;
  private spiedElement;
  private currentValue;
  componentWillLoad(): Promise<void> | void;
  componentDidRender(): void;
  private initWithInput;
  private initWithTextArea;
  private initWithSelect;
  /**
   * This method subscribes the component to the change events produced by the other WCS components
   * (provided by the user in slot)
   * @private
   */
  private addChangeHandlerForWcsComponents;
  private sendCurrentValue;
  private discardChanges;
  forceDisplayStateAndValidate(): void;
  onWindowClickEvent(event: MouseEvent): void;
  private clickInsideComponent;
  /**
   * discard changes and force component state to DISPLAY
   * <br/>
   * This method must be call when component is in LOAD state
   */
  errorHandler(): void;
  onValueChange(): void;
  private onDisplayContainerClick;
  render(): any;
  private getReadonlySvgIcon;
  private formatValues;
}
