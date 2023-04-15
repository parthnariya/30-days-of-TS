//Implement the built-in Parameters generic without using it.

/* 1. type only takes function so we need to extends that.
2. take args from function and return them. */

type FunctionParameters<T extends (...args : any) => any> = T extends (...args : infer Args)=>any ? Args : never
function foo(abc:string ,person : {name:string; age:number}){

}
function bar(){

}
type A = FunctionParameters<typeof foo>
type B = FunctionParameters<typeof bar>