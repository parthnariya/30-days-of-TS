// implementation of inbuilt utility type ReturnType

// 1. it has same pattern matching technique as yesterday's FunctionParameters

type FunctionReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function fn(v: boolean) {
  if (v) return 1;
  else return 2;
}

type R = FunctionReturnType<typeof fn>;
