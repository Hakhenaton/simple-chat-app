export const findFocusedNode = (node) => {
  if (node.focused) {
    return node;
  }
  for (const child of node.children || []) {
    const focusedNode = findFocusedNode(child);
    if (focusedNode) {
      return focusedNode;
    }
  }
};
//# sourceMappingURL=tests.js.map
