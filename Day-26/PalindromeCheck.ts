// type that verifies given string is palindrome.

// 1. use previous challenge and pattern matching.

type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${ReverseString<R>}${F}`
  : "";

type StringToTuple<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToTuple<R>]
  : [];

type PalindromeCheck<S extends string> = [S] extends [ReverseString<S>]
  ? true
  : false;

type A = PalindromeCheck<"()()">; // false
type B = PalindromeCheck<"">; // true
type C = PalindromeCheck<"abcdeedcba">;
