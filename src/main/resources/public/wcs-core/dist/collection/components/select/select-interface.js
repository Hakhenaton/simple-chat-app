export const WcsSelectSizeValue = ['m', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
export function isWcsSelectSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsInputSizeValues
  return WcsSelectSizeValue.includes(size);
}
//# sourceMappingURL=select-interface.js.map
