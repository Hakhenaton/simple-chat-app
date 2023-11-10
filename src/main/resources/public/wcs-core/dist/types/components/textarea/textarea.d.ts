import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { TextareaChangeEventDetail } from './textarea-interface';
/**
 * Mainly inspired from Ionic Textarea Component
 *
 * @cssprop --wcs-textarea-max-height - Max height of the text area component
 *
 */
export declare class Textarea implements ComponentInterface {
  private nativeInput?;
  private inputId;
  private didBlurAfterEdit;
  private inheritedAttributes;
  /**
   * This is required for a WebKit bug which requires us to
   * blur and focus an input to properly focus the input in
   * an item with delegatesFocus. It will no longer be needed
   * with iOS 14.
   *
   * @internal
   */
  fireFocusEvents: boolean;
  private el;
  private hasFocus;
  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   */
  autocapitalize: string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  autofocus: boolean;
  /**
   * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  clearOnEdit: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `wcsChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  debounce: number;
  protected debounceChanged(): void;
  /**
   * If `true`, the user cannot interact with the textarea.
   */
  disabled: boolean;
  /**
   * Name of the material icon to add to the input
   */
  icon: string;
  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  maxlength?: number;
  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  minlength?: number;
  /**
   * The name of the control, which is submitted with the form data.
   */
  name: string;
  /**
   * Instructional text that shows before the input has a value.
   */
  placeholder?: string | null;
  /**
   * If `true`, the user cannot modify the value.
   */
  readonly: boolean;
  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  required: boolean;
  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  spellcheck: boolean;
  /**
   * Specifies the state of the input. By default the input is in an initial state but you can set it to 'error' state if the data given by the user is not valid.
   */
  state: 'initial' | 'error';
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  cols?: number;
  /**
   * The number of visible text lines for the control.
   */
  rows?: number;
  /**
   * Indicates how the control wraps text.
   */
  wrap?: 'hard' | 'soft' | 'off';
  /**
   * If `true`, the element height will increase based on the value.
   */
  autoGrow: boolean;
  /**
   * The value of the textarea.
   */
  value?: string | null;
  /**
   * Indicates how the textarea should be resizable.
   * Possible values 'both' | 'none' | 'vertical' | 'horizontal'
   */
  resize?: 'both' | 'none' | 'vertical' | 'horizontal';
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * Emitted when the input value has changed.
   */
  wcsChange: EventEmitter<TextareaChangeEventDetail>;
  /**
   * Emitted when a keyboard input occurred.
   */
  wcsInput: EventEmitter<KeyboardEvent>;
  /**
   * Emitted when the input loses focus.
   */
  wcsBlur: EventEmitter<FocusEvent>;
  /**
   * Emitted when the input has focus.
   */
  wcsFocus: EventEmitter<FocusEvent>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private runAutoGrow;
  /**
   * This method make the textarea automatically adopt the size of the content without a scroll bar
   */
  fitContent(): Promise<void>;
  /**
   * Sets focus on the native `textarea` in `wcs-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Sets blur on the native `textarea` in `wcs-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   * @internal
   */
  setBlur(): Promise<void>;
  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  getInputElement(): Promise<HTMLTextAreaElement>;
  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  private checkClearOnEdit;
  private focusChange;
  private hasValue;
  private getValue;
  private onInput;
  private onFocus;
  private onBlur;
  private onKeyDown;
  render(): any;
}
