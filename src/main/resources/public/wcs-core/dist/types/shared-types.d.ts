/**
 * Meant to be extracted with TS and used in each component differently, depending on the use case.
 * Global size guideline (with basis at 8px) :
 * xl = 56 px
 * l = 48 px
 * m = 40 px (default)
 * s = 32 px
 * xs = 24 px
 */
export type WcsSize = 'xs' | 's' | 'm' | 'l' | 'xl';
/***********************/
/***********************/
/**
 * Namespace containing types for representing all available CSS properties.
 * @namespace CssTypes
 */
export declare namespace CssTypes {
  type Height = CssUnits.LengthOrPercentage | CssUnits.Keyword | CssUnits.Global;
  type Width = CssUnits.LengthOrPercentage | CssUnits.Keyword | CssUnits.Global;
}
/**
 * Namespace containing types for representing CSS length units, percentages, keywords, and global values.
 * @namespace CssUnits
 */
export declare namespace CssUnits {
  type LengthUnits = 'ch' | 'em' | 'rem' | 'px' | 'vh' | 'vw';
  type Length = `${number}${LengthUnits}`;
  type Percentage = `${number}%`;
  type LengthOrPercentage = CssUnits.Length | CssUnits.Percentage;
  type Keyword = 'auto' | 'min-content' | 'max-content' | 'fit-content' | `fit-content(${CssUnits.LengthOrPercentage}`;
  type Global = 'unset' | 'initial' | 'inherit' | 'revert' | 'revert-layer';
}
