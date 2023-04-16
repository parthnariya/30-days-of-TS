// implement Pick Utility type Pick.
/* type Foo = {
    a: string
    b: number
    c: boolean
}
type A = PickProperty<Foo, 'a' | 'b'> // {a: string, b: number} */

/* 1. second argument must be key of first argument.
2. if above condition satisfies then return key  */

type PickProperty<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
type Foo = {
    a: string
    b: number
    c: boolean
}
type A = PickProperty<Foo, 'a' | 'b'> // {a: string, b: number}
type B = PickProperty<Foo,'c'> // {c:boolean}
type D = PickProperty<Foo, 'd'> //Error