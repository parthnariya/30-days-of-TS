//type that convert given nested type into readonly type.
/* 1. check weather key type is primitive.
2. if not than apply recursion to nested type. */

type Primitive = string | number | boolean | null | undefined;

type DeepReadonlyType<T extends Record<string, any>> = T extends Primitive
  ? T
  : { readonly [Key in keyof T]: DeepReadonlyType<T[Key]> };

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonlyType<X>; // should be same as `Expected`
