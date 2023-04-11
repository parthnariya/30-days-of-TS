// Type that takes an array and emits the flattened array type.
// Example usage: type flatten = FlatArray<[1, 2, [3, 4]]> // [1, 2, 3, 4]

// 1. For traversal, we need to go with a strategy of taking the first element and the rest of the elements.
//    We can achieve this using a type parameter `T` that extends `[infer FirstElement, ...infer RestElements]`.
// 2. If both `FirstElement` and `RestElements` are arrays, we can apply the same strategy to both and add the results to one array.
// 3. If one of them is an array, we can add the `FirstElement` to the result array and apply the above strategy to the second element.

type Flat<T extends any[]> = T extends [infer FirstElement,...infer RestElements]  ? (FirstElement extends any[] ? [...Flat<FirstElement>,...Flat<RestElements>] : [FirstElement,...Flat<RestElements>]) : T
type A = Flat<[1,2,3]> // [1,2,3]
type B = Flat<[1,[2,3],[4,[5,[6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[unknown,[undefined]]>