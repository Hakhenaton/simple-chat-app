export const WcsEditableFieldSizeValues = ['m', 'l']; // as const keyword is used to infer and preserve the exact literal values of an array or object.
export function isWcsEditableFieldSize(size) {
  // @ts-ignore : ignore size type, as it is checked with WcsEditableFieldSizeValues
  return WcsEditableFieldSizeValues.includes(size);
}
//# sourceMappingURL=editable-field-interface.js.map
