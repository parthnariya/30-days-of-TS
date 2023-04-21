//Type that convert given string to tuple.


/* 1. here extract first element from string and push it into tuple .
2. do same step for rest element with recursion. */

type StringToTuple<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToTuple<R>]
  : [];
type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"">; // []
