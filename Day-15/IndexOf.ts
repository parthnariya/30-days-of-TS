// the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

/* 1. implementation using pattern matching.
2. whenever pattern matches return length of tracker tuple. */

type IndexOf<T extends any[], U, Temp extends number[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends U
    ? Temp["length"]
    : IndexOf<R, U, [1, ...Temp]>
  : -1;
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
