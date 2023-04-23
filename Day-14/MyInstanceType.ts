//MyInstanceType is built in utility type InstanceType.
//InstanceType will extract return type of constructor function.

/* 1. constructor function signature will same.
2. get the return type of the function. */

type MyInstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : never;
class Foo {
    constructor(public n1: number, public n2: number){}
}
type A = MyInstanceType<typeof Foo>