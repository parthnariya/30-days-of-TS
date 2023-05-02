// type that return difference between given two positive number.

/* 1. as we can not do computation direct with type.
2. take some tuple to handle computation.
3. create two tuple from given number and by pattern matching we can get result. */

type GreaterThan<
  T extends number,
  U extends number,
  R extends any[] = []
> = T extends R["length"]
  ? false
  : U extends R["length"]
  ? true
  : GreaterThan<T, U, [...R, 1]>;

type CreateNewArray<
  Num extends number,
  Temp extends any[] = []
> = Temp["length"] extends Num ? Temp : CreateNewArray<Num, [1, ...Temp]>;

type Sub<N1 extends number, N2 extends number> = GreaterThan<
  N1,
  N2
> extends true
  ? CreateNewArray<N1> extends [...CreateNewArray<N2>, ...infer Result]
    ? Result["length"]
    : never
  : CreateNewArray<N2> extends [...CreateNewArray<N1>, ...infer Result]
  ? Result["length"]
  : never;

type A = Sub<1, 1>; // 0
type B = Sub<10, 3>; // 7
type C = Sub<3, 10>; // 7
