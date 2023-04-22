// A type that take string, number or bigint. The output should be a positive number string
type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer U}`
  ? U
  : T;
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
