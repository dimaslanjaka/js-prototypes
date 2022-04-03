/// <reference path="globals.d.ts" />
interface Callable {
  (text: string): void;
  /**
   * indicator if this function was called
   */
  wasCalled?: boolean;
}
export interface ClassCallable extends Callable {
  new (...args: any[]): ClassDecorator;
}
export {};
