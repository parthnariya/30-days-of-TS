// type that drop a specified char from a string.

// 1. go with pattern matching technique.

type DropChar<
  S extends string,
  E extends string
> = S extends `${infer FirstElement}${E}${infer RestElement}`
  ? `${FirstElement}${RestElement}`
  : S;
type A = DropChar<"abc", "b">; // 'ac'
type B = DropChar<"abc", "">; //'abc'