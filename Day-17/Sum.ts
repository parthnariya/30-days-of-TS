// type that add given  two positive number.

/* 1. as we cannot compute direct.
2. so create tuple with length of given length.
3. merge two tuple and return length. */

type CreateNewArray<
  Num extends number,
  Temp extends any[] = []
> = Temp["length"] extends Num ? Temp : CreateNewArray<Num, [1, ...Temp]>;

type Sum<Num1 extends number, Num2 extends number> = [
  ...CreateNewArray<Num1>,
  ...CreateNewArray<Num2>
]["length"];

type Three = Sum<2,1>
type Nine = Sum<2,7>
