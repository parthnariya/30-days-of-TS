// Get the middle element of the array
// If the length of the array is odd, return the middle element If the length of the array is even, return the middle two elements
/* 1. Implementation with pattern matching (firstElement,middleElement and restElement)
2. we can recursively call for middle elements and find middle of array */
type GetMiddleElement<T extends unknown[]> = T extends [
  infer _,
  ...infer M,
  infer _
]
  ? M extends []
    ? T
    : GetMiddleElement<M>
  : T;
type A = GetMiddleElement<[1, 2, 3, 4, 5]>;
type B = GetMiddleElement<["a", "b", "c", "d", "e", "f"]>;
