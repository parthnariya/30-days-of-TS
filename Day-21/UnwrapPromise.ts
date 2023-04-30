// implementation of Awaited utility type.

type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<Promise<null>>; // null
type C = UnwrapPromise<null>; // Error
