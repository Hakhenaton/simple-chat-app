import { WcsSize } from '../../shared-types';
export type ValidateFn<T> = (value: T) => boolean;
export type FormatFn<T> = (value: T) => string;
export interface EditableComponentUpdateEvent {
  newValue: any;
  /**
   * Permet de sortir de l'état LOAD pour aller vers l'état DISPLAY
   * À n'utiliser que lorsque la valeur n'est pas systématiquement mise à jour à chaque événement.
   */
  successHandler: () => void;
  errorhandler: () => void;
}
export declare const WcsEditableFieldSizeValues: readonly ["m", "l"];
export type WcsEditableFieldSize = Extract<WcsSize, typeof WcsEditableFieldSizeValues[number]>;
export declare function isWcsEditableFieldSize(size: string): size is WcsEditableFieldSize;
export type EditableFieldType = 'input' | 'textarea' | 'select';
