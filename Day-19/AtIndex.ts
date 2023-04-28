// type that return element with given index.

/* 1. take one tuple to track iteration.
2. extract first element and check index.
3. if index does not match than apply for rest elements. */
type AtIndex<
  T extends any[],
  I extends number,
  Temp extends any[] = []
> = T extends [infer F, ...infer R]
  ? Temp["length"] extends I
    ? F
    : AtIndex<R, I, [any, ...Temp]>
  : never;

type A = AtIndex<[1, 2, 3, 4, 5, 6], 6>;
type B = AtIndex<[string, string, number], 2>;
