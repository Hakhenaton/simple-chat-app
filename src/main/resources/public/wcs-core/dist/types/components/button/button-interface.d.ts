import { WcsSize } from '../../shared-types';
export type WcsButtonType = 'button' | 'submit';
export type WcsButtonShape = 'normal' | 'round' | 'square';
export type WcsButtonMode = 'plain' | 'stroked' | 'clear';
export declare const WcsButtonSizeValues: readonly ["s", "m", "l"];
export type WcsButtonSize = Extract<WcsSize, typeof WcsButtonSizeValues[number]>;
export declare function isWcsButtonSize(size: string): size is WcsButtonSize;
