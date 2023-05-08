// type that remove element from given tuple.

/* 1. divide first and rest Element.
2. check with first if match then recurse with rest. */

type RemoveItem<T extends any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? RemoveItem<R, U>
    : [F, ...RemoveItem<R, U>]
  : T;

type A = RemoveItem<[1, 2, 3, 2, 1], 2>; // [1,3,1]
type B = RemoveItem<[1, 1, 1], 1>; // []
