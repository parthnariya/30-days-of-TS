//Implement the type of just-flip-object.
//FlipObject<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type FlipObject<T extends Record<string, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]: K;
};
type Temp = FlipObject<{ a: "x"; b: "y"; c: "z" }>;
type A = FlipObject<{ a: 1; b: 2 }>;
type B = FlipObject<{ a: true; b: false }>;
