// type that reverse the order of string.

/* 1. using pattern matching along with recursion. */

type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${ReverseString<R>}${F}`
  : "";

type A = ReverseString<"abcd">; // 'dcba'
type B = ReverseString<"">; // ''
