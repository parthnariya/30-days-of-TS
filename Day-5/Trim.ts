// Trim type that accepts a string and returns trimmed string.
// type Trimmed = Trim<'  parth  '> // expected to be 'parth'

/* 1. Trim type accepts string only.
2. remove all whitespace characters (' ' , '\t', '\n',) */

type Trim<T extends string> = T extends
  | `${" " | "\t" | "\n"}${infer M}`
  | `${infer M}${" " | "\t" | "\n"}`
  ? Trim<M>
  : T;
type Trimmed = Trim<'  parth  '> // expected to be 'parth'
