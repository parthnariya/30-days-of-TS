//Implement a type, TupleToUnion, that converts a tuple to a union.

/* 1. we go with that FirstElement and RestElement strategy.
2. recursively convert the tuple to union */

type TupleToUnion<T> = T extends [infer FirstElement , ...infer RestElement] ? FirstElement | TupleToUnion<RestElement> : never

type A = TupleToUnion<[string,number,{abc:'1'}]>

/* --> i got another way to extract element from tuple '(infer R)[]'
--> (infer R)[] syntax is a powerful feature of TypeScript that enables you to extract the element type of an array type without explicitly defining it. */

// type TupleToUnion<T> = T extends (infer R)[] ? R : never