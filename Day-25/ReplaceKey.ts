// type that replace key type with given type.

/* 1. can achieve goal using conditional type.
2. first check given key is present in type.
3. if present than replace key. */

type ReplaceKey<T, U, R> = {
  [k in keyof T]: k extends Extract<k, U> ? R[Extract<k, keyof R>] : T[k];
};
type Node1 = {
  name: number;
  age: string;
  email: string;
};
type ReplacedNotExistKeys = ReplaceKey<
  Node1,
  "name" | "age",
  { name: string; age: number }
>; // {name :  string,age : number , email : string}
