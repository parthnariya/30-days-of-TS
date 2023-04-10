//FirstChar<T> to get the first character of a string.

/* 1. T should be string => T extends string
2. divide string into two parts first char and rest of the string => `${firstChar}${restString}`
3. edge case => if given string is empty than it should return never */
type FirstChar<T extends string> = T extends `${infer FirstChar}${infer REstOfString}` ? FirstChar : never;

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never