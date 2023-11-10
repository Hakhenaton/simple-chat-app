import { WcsSize } from "../../shared-types";
export interface SelectChangeEventDetail {
  value: any | any[] | undefined | null;
}
export declare const WcsSelectSizeValue: readonly ["m", "l"];
export type WcsSelectSize = Extract<WcsSize, typeof WcsSelectSizeValue[number]>;
export declare function isWcsSelectSize(size: string): size is WcsSelectSize;
