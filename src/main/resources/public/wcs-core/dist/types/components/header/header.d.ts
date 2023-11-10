import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * @slot logo SNCF Logo
 * @slot title Title of your application
 * @slot actions Actions such as buttons, dropdown or any useful information to always display on your application
 */
export declare class Header implements ComponentInterface {
  hostData(): {
    slot: string;
  };
  render(): any;
}
