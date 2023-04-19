//  type that replace the all the substring with given string.
// type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

/* 1. we can implement by pattern matching.
2. if pattern match than we can replace string */

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer F}${From}${infer R}`
  ? From extends ""
    ? S
    : ReplaceAll<`${F}${To}${R}`, From, To>
  : S;

type temp = ReplaceAll<"P A R T H", " ", "">;
type temp2 = ReplaceAll<"$$$$$", "$", "@">;
