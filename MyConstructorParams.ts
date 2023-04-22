// MyConstructorParams is inbuilt utility type ConstructorParameters

/* 1. constructor function is same as normal function. 
2. but the main difference is that constructor function will create new instance every time. */

type MyConstructorParams<F extends new (...args: any) => any> = F extends new (
  ...args: infer Args
) => any
  ? Args
  : never;

  
class Foo {
  constructor(a: string, b: number, c: boolean) {}
}

type C = MyConstructorParams<typeof Foo>;
