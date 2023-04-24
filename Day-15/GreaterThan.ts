//type return boolean based on given two number.

// GreaterThan<2, 1> //should be true
// GreaterThan<1, 1> //should be false

/* 1. here take some tuple and increase length.
2. in given type which catch the length will be small. */

type GreaterThan<T extends number, U extends number, R extends any[] = []> = 
  T extends R['length']
    ? false
    : (U extends R['length']
      ? true
      : GreaterThan<T, U, [...R, 1]>)

type A = GreaterThan<2, 1> //should be true
type B = GreaterThan<1, 2> //should be false