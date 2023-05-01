// type that takes a number and returns its corresponding Fibonacci number.

/* type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21 */

/* 1. here we need three tuples.
2. first to store the previous result.
    second for iteration.
    third to store current result. */

type Fibonacci<
  T extends number,
  HelpingTuple extends any[] = [1],
  ResultTuple extends any[] = [1],
  IteratorTuple extends any[] = [1, 1, 1]
> = T extends 1
  ? 1
  : T extends 2
  ? 1
  : IteratorTuple["length"] extends T
  ? [...ResultTuple, ...HelpingTuple]["length"]
  : Fibonacci<
      T,
      ResultTuple,
      [...ResultTuple, ...HelpingTuple],
      [...IteratorTuple, 1]
    >;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21
type Result3 = Fibonacci<5>; // 5
type Result4 = Fibonacci<4>; // 3
