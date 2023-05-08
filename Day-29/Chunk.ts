// type version of chunk from lodash.

/* 1. take one temporary tuple to track count of given chunk value.
2. if length of temporary tuple reaches to count.
3. start with empty temporary tuple. */

type Chunk<
  T extends any[],
  N extends number = 1,
  Temp extends any[] = []
> = T extends [infer F, ...infer R]
  ? Temp["length"] extends N
    ? [Temp, ...Chunk<T, N>]
    : Chunk<R, N, [...Temp, F]>
  : Temp extends []
  ? Temp
  : [Temp];
type A = Chunk<[1, 2, 3, 4, 5], 2>; //[[1,2],[3,4],[5]]
