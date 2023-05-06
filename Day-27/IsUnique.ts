// type that check whether all characters are unique.

/* 1. use pattern matching. */

type IsUnique<S extends string> =
  S extends `${infer F}${infer R extends string}`
    ? R extends `${infer Y}${F}${infer U}`
      ? false
      : IsUnique<R>
    : true;

type A = IsUnique<"abcd">; // true
type B = IsUnique<"abcda0">; // false
