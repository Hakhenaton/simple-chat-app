export const WcsButtonSizeValues = ['s', 'm', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
export function isWcsButtonSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsButtonSizeValues
  return WcsButtonSizeValues.includes(size);
}
//# sourceMappingURL=button-interface.js.map
