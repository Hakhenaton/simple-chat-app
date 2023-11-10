/**
 * This function add event handlers on the navigableItems list. The handlers call the function close() on the nodeName.
 *
 * T: type class of the nodeNameToClose param (must have a close function)
 *
 * @param navigableItems items on which focusout event listeners must be added
 * @param nodeNameToClose nodeName of the element we want to close in the event path
 */
function registerCloseHandlerForFocusOutEventOn(navigableItems, nodeNameToClose) {
  navigableItems.forEach(navigableItem => {
    navigableItem.addEventListener("focusout", (evt) => {
      const relatedTargetElement = evt.relatedTarget;
      if (!isElementChildOfNavigableItem(navigableItem, relatedTargetElement)) {
        const eventComposedPath = evt.composedPath();
        if (isEventThrownFromChildOfNodeNameToClose(eventComposedPath, nodeNameToClose)) {
          eventComposedPath.filter(eventTargetNodeNameEquals(nodeNameToClose))[0].close();
        }
      }
    });
  });
}
function isElementChildOfNavigableItem(navigableItem, element) {
  return navigableItem.contains(element);
}
function eventTargetNodeNameEquals(nodeName) {
  return x => x.nodeName === nodeName;
}
function isEventThrownFromChildOfNodeNameToClose(eventComposedPath, nodeName) {
  return eventComposedPath.map(x => x.nodeName).indexOf(nodeName) !== -1;
}

export { registerCloseHandlerForFocusOutEventOn as r };

//# sourceMappingURL=com-nav-utils-f26d3b2d.js.map