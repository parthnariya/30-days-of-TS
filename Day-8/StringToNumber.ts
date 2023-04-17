//type to convert string to number. (* here given string is non-negative number only)
/* 
1. we can return number value by some property only.
2. this have two approach
    first :- we can define some maptype for char to digit and by pattern matching logic we can solve.
    second :- we can define some tuple and using it's length property we can solve */

// here i have implemented using second approach

type StringToNumber<
  S extends string,
  Temp extends any[] = []
> = S extends `${Temp["length"]}`
  ? Temp["length"]
  : StringToNumber<S, [...Temp, 1]>;
type A = StringToNumber<"12">;
type B = StringToNumber<"0">;
