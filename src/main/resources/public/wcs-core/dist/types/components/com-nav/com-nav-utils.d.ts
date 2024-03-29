/**
 * This function add event handlers on the navigableItems list. The handlers call the function close() on the nodeName.
 *
 * T: type class of the nodeNameToClose param (must have a close function)
 *
 * @param navigableItems items on which focusout event listeners must be added
 * @param nodeNameToClose nodeName of the element we want to close in the event path
 */
export declare function registerCloseHandlerForFocusOutEventOn<T extends {
  close: () => any;
}>(navigableItems: NodeListOf<Element>, nodeNameToClose: string): void;
