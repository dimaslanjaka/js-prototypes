interface Callable {
  (text: string): void;
  /**
   * indicator if this function was called
   */
  wasCalled?: boolean;
}

interface ClassCallable extends Callable {
  new(...args: any[]): ClassDecorator;
}

interface Function {
  once: (param: any) => any;
}