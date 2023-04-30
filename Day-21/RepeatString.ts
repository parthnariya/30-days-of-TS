// type version of String.prototype.repeat.

/* 1. take temporary tuple to track iteration.
2. use recursion to get result. */
type RepeatString<T extends string, Num extends number, Temp extends any[] = [], Result extends string = ''> =
    Temp['length'] extends Num ? Result
    : RepeatString<T, Num, [...Temp, 1], `${T}${Result}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''
type C = RepeatString<'ab',3> // 'ababab'