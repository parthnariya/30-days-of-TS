// type that return the number decreased by one.
// (Given a number (always positive) as a type)
/* type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54 */

/* 1. we can define some temporary tuple with length of given number and return expected number */

type MinusOne<N extends number, Temp extends any[] = []> = [
  ...Temp,
  1
]["length"] extends N
  ? Temp["length"]
  : MinusOne<N, [...Temp, 1]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54
