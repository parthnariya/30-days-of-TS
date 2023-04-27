// ExtractThisParameters
//  implementation of utility type ThisParameterType.
function Foo(this: { a: string }) {}
function Bar() {}
type ExtractThisParameters<F extends (...args: any) => any> = F extends (
  this: infer This,
  ...args: any
) => any
  ? This
  : never;
type A = ExtractThisParameters<typeof Foo>; // {a: string}
type B = ExtractThisParameters<typeof Bar>; // unknown
