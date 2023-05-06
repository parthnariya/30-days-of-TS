// type that count count of given char in given string.

/* 1. take temporary tuple to track count.
2. extract first char and check with given char.
3. if match then increase tuple. */

type CharCount<
  S extends string,
  X extends string,
  Temp extends any[] = []
> = S extends ""
  ? Temp["length"]
  : S extends `${infer F}${infer R extends string}`
  ? F extends X
    ? CharCount<R, X, [...Temp, 1]>
    : CharCount<R, X, Temp>
  : Temp["length"];

type A = CharCount<"ABCDSA", "A">; // 2
type B = CharCount<"ABCDSA", "S">; // 1
