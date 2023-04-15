// implement type that convert given string to uppercase

/* 1. start with recursive approch as first and last Element.
2. need to define map that store capital letter for lowercase */

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
type ToUpperCase<S extends string> =
  S extends `${infer FirstElement}${infer LastElements}`
    ? FirstElement extends keyof UpperCaseMap
      ? `${UpperCaseMap[FirstElement]}${ToUpperCase<LastElements>}`
      : S
    : S;
type A = ToUpperCase<"hellO1">
type B = ToUpperCase<"">