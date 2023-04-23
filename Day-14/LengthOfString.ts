// Type that return length of given string.
/* 1. its easy to get length of tuple.
2. so convert string to tuple and get the length */

type StringToTuple<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToTuple<R>]
  : []; // Day-12 challenge
type LengthOfString<T extends string> = StringToTuple<T>['length']
type A = LengthOfString<"SKY">