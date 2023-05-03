// type that concat all the strings given in tuple.

/* 1. using recursion , can archive goal.
2. but need to define type of variable. */

type TupleToString<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? `${F}${TupleToString<R>}`
  : "";

type A = TupleToString<["123", "4", "567"]>; // '1234567'
