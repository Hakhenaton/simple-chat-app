import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DropdownItem implements ComponentInterface {
  wcsDropdownItemClick: EventEmitter<void>;
  onMouseDown(_: MouseEvent): void;
  onKeyDown(evt: KeyboardEvent): void;
  render(): any;
}
