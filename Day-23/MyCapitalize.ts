// implementation of built-in utility type Capitalize.

/* 1. implementation using pattern matching. 
    2. need to define map type to convert lower to capital.
*/

type UpperCaseMap = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type MyCapitalize<S extends string> =
  S extends `${infer FirstElement}${infer LastElements}`
    ? FirstElement extends keyof UpperCaseMap
      ? `${UpperCaseMap[FirstElement]}${LastElements}`
      : S
    : S;

type A = MyCapitalize<"bfe">; // 'Bfe'
