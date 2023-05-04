// type that transforms union types into the array that includes permutations of unions.

//reference :- https://github.com/type-challenges/type-challenges/issues/614

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];

type A = Permutation<"a" | "b">;
