import { EventEmitter } from '../stencil-public-runtime';
export declare function isElement(element: any): element is Element;
export declare function hasShadowDom(el: HTMLElement): boolean;
export declare const debounceEvent: (event: EventEmitter, wait: number) => EventEmitter;
export declare const debounce: (func: (...args: any[]) => void, wait?: number) => (...args: any[]) => any;
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
export declare const inheritAttributes: (el: HTMLElement, attributes?: string[]) => {
  [k: string]: any;
};
export declare const findItemLabel: (componentEl: HTMLElement) => HTMLWcsLabelElement | null;
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
export declare const raf: (h: any) => any;
/**
 * Return true if the mouseEvent click is inside the given HTML element
 */
export declare const clickInsideElement: (event: MouseEvent, element: HTMLElement) => boolean;
export declare const clickTargetIsElementOrChildren: (mouseEvent: MouseEvent, element: HTMLElement) => boolean;
export declare function generateUniqueId(componentName: string): string;
export declare function isKeyup(evt: KeyboardEvent): boolean;
export declare function isKeydown(evt: KeyboardEvent): boolean;
export declare function isEscapeKey(evt: KeyboardEvent): boolean;
export declare function isSpaceKey(evt: KeyboardEvent): boolean;
export declare function isEnterKey(evt: KeyboardEvent): boolean;
export declare function isHomeKey(evt: KeyboardEvent): boolean;
export declare function isEndKey(evt: KeyboardEvent): boolean;
export declare function isUpArrowKey(evt: KeyboardEvent): boolean;
export declare function isDownArrowKey(evt: KeyboardEvent): boolean;
export declare function isLeftArrowKey(evt: KeyboardEvent): boolean;
export declare function isRightArrowKey(evt: KeyboardEvent): boolean;
export declare function isPageDownKey(evt: KeyboardEvent): boolean;
export declare function isPageUpKey(evt: KeyboardEvent): boolean;
export declare function isTabKey(evt: KeyboardEvent): boolean;
