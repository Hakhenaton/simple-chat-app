import { WcsSize } from "../../shared-types";
export interface CounterChangeEventDetail {
  value: number;
}
export declare const WcsCounterSizeValues: readonly ["m", "l"];
export type WcsCounterSize = Extract<WcsSize, typeof WcsCounterSizeValues[number]>;
export declare function isWcsCounterSize(size: string): size is WcsCounterSize;
