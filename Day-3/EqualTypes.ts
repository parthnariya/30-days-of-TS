//Implement EqualType<A, B> to check if two types are identical.
//type g = Equal<{a : number}, {a: number}> // true
// type g = Equal<{a : number}, {a: string}> // false


/* 1. We can't compare two types directly.
2. So we can put them in a tuple and compare them. */

// type EqualType<T,P> = [T] extends [P] ? ([P] extends [T] ? true : false) : false

// but here is problem with 'any' type,

// type A = EqualType<any,number> //false
// type C = EqualType<never, never> // true
// type D = EqualType<'BFE', 'BFE'> // true

/* because any is a special type in TypeScript that represents any value, and it is compatible with any other type

so we can use another method we can put function method to compare types
in common words we use third party to compare types */

type EqualType<T,P> = (<ThirdParty>() => ThirdParty extends T ? 'valid' : 'invalid') extends (<ThirdParty>() => ThirdParty extends P ? 'valid' : 'invalid') ? true : false;

// why T and P wrap in []?????
// In TypeScript, a tuple type is a type that represents an ordered list of elements, where each element can have a different type.
// we can not compare two type direct so we wrap to tuple and compare the type.
type A = EqualType<any, any> // true
type B = EqualType<any, 1> // false
type C = EqualType<never, never> // true
type D = EqualType<'BFE', 'BFE'> // true
type E = EqualType<'BFE', any> // false
type F = EqualType<1 | 2, 2 | 1> // true
type G = EqualType<{a : number}, {a: string}> // false