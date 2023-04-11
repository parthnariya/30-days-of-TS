// Type that takes an array and emits the flattened array type.
// Example usage: type Reversed = ReverseTuple<[1, 2, 3, 4]> // [4,3,2,1]

// 1. For traversal, we need to go with a strategy of taking the first element and the rest of the elements.
//    We can achieve this using a type parameter `T` that extends `[infer FirstElement, ...infer RestElements]`.
// 2. And swap the first element with the rest
// 3. Again apply the same with the rest of the elements.

type ReverseTuple<T extends any[]> = T extends [infer FirstElement,...infer RestElements] ? [...ReverseTuple<RestElements>,FirstElement] : T 
type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1,2,3,4,5,6]> // [6,5,4,3,2,1]
type C = ReverseTuple<[]> // []