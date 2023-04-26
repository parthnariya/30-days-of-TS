//  type version of Array.push

// 1. implementation using pattern matching.

type Push<T extends any[], Element> = [...T, Element];

type A = Push<[1,2,3], '4'> // [1,2,3,'4']
type B = Push<[1], 2> // [1, 2]
type C = Push<[], string> // [string]