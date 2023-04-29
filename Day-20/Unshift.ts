//type version of Array.unshift.

type Unshift<T extends any[], E> = [E, ...T];
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
