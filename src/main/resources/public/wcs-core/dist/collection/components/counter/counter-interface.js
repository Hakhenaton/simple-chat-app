export const WcsCounterSizeValues = ['m', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
export function isWcsCounterSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsInputSizeValues
  return WcsCounterSizeValues.includes(size);
}
//# sourceMappingURL=counter-interface.js.map
