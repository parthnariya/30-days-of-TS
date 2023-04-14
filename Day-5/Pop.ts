// type that pop last element from given tuple.
// type re1 = Pop<['a', 'b', 'c','d']> // expected to be ['a', 'b', 'c']

/* 1. here given type must be tuple.
2. go with first and rest element method :)  */

type Pop<T extends any[]> = T extends [...infer InitialElements,infer _] ? InitialElements : T
type re1 = Pop<['a', 'b', 'c','d']> // expected to be ['a', 'b', 'c']
