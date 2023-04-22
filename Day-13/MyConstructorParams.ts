//MyConstructorParams is implementation of utility type ConstructorParameters.

/* 1. constructor function is same as normal function.
2. main difference between constructor and normal function is that constructor function creates new instance every time. */
type MyConstructorParams<F extends new (...args: any) => any> = F extends new (
  ...args: infer Args
) => any
  ? Args
  : never;
class Foo {
  constructor(a: string, b: number, c: boolean) {}
}

type C = MyConstructorParams<typeof Foo>;
// [a: string, b: number, c: boolean]
