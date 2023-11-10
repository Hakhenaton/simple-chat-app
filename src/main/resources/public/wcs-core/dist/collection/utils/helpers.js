export function isElement(element) {
  return 'clientWidth' in element
    && 'clientHeight' in element;
}
export function hasShadowDom(el) {
  return !!el.shadowRoot && !!el.attachShadow;
}
export const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
export const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `wcs-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
export const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('wcs-form-field');
  if (itemEl) {
    return itemEl.querySelector('wcs-label');
  }
  return null;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
export const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
/**
 * Return true if the mouseEvent click is inside the given HTML element
 */
export const clickInsideElement = (event, element) => {
  return event.x >= element.getBoundingClientRect().x && event.x <= element.getBoundingClientRect().x + element.getBoundingClientRect().width
    && event.y >= element.getBoundingClientRect().y && event.y <= element.getBoundingClientRect().y + element.getBoundingClientRect().height;
};
export const clickTargetIsElementOrChildren = (mouseEvent, element) => {
  return mouseEvent.target instanceof Node
    && element.contains(mouseEvent.target);
};
export function generateUniqueId(componentName) {
  return componentName + "-" + Math.random().toString(36);
}
export function isKeyup(evt) {
  return evt.code === 'ArrowUp';
}
export function isKeydown(evt) {
  return evt.code === 'ArrowDown';
}
export function isEscapeKey(evt) {
  return evt.code === 'Escape';
}
export function isSpaceKey(evt) {
  return evt.code === 'Space';
}
export function isEnterKey(evt) {
  return evt.key === 'Enter';
}
export function isHomeKey(evt) {
  return evt.code === 'Home';
}
export function isEndKey(evt) {
  return evt.code === 'End';
}
export function isUpArrowKey(evt) {
  return evt.key === 'ArrowUp';
}
export function isDownArrowKey(evt) {
  return evt.key === 'ArrowDown';
}
export function isLeftArrowKey(evt) {
  return evt.key === 'ArrowLeft';
}
export function isRightArrowKey(evt) {
  return evt.key === 'ArrowRight';
}
export function isPageDownKey(evt) {
  return evt.key === 'PageDown';
}
export function isPageUpKey(evt) {
  return evt.key === 'PageUp';
}
export function isTabKey(evt) {
  return evt.key === 'Tab';
}
//# sourceMappingURL=helpers.js.map
