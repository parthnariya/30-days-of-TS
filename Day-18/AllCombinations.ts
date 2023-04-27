// type that return all combinations of string.
//e.g.
// type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

/* 1. convert string to three part <left, current,right>
2. combination of left and right without current
3. combination of left and right with prefix current
4. repeat for next character. */

// Extract First Element from string
type Head<S extends string> = S extends `${infer First}${infer _}`
  ? First
  : never;

type AllCombinations<
  S extends string,
  Current extends string = ""
> = S extends ""
  ? "" // edge case
  : Current extends ""  // first iteration of S.
  ? AllCombinations<S, Head<S>>
  : S extends `${infer Left}${Current}${infer Right}` // step 1.
  ?
      | AllCombinations<`${Left}${Right}`> // step 2.
      | `${Current}${AllCombinations<`${Left}${Right}`>}` // step 3.
      | AllCombinations<S, Head<Right>> // step 4.
  : never;

type AllCombinations_ABC = AllCombinations<"ABC">;
