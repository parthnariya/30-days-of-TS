// type version of any function from python.

type AnyOf<T extends readonly any[]> = T extends Array<
  0 | "" | false | [] | { [key: string]: never }
>
  ? false
  : true;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // false.
