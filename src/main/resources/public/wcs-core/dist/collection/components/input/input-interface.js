export const WcsInputSizeValues = ['s', 'm', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
export function isWcsInputSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsInputSizeValues
  return WcsInputSizeValues.includes(size);
}
//# sourceMappingURL=input-interface.js.map
