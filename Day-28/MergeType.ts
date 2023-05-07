// type that merge given two types.

/* 1. take keys from both type.
2. if present both type then override the value. */

type MergeType<T extends Record<string, any>, U extends Record<string, any>> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = MergeType<foo, coo>; // {name: string, age: number, sex: string}
