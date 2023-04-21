// EndsWith<T, U> which takes two exact string types and returns whether T ends with U

// 1. implementation using recursion and pattern matching.

type EndsWith<T extends string, U extends string> = T extends U
  ? true
  : T extends `${infer F}${infer R}`
  ? R extends U
    ? true
    : EndsWith<R, U>
  : false;

type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false
