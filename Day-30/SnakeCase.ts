// type that convert CamelCase to snake_case

/* 1. use Pattern matching trick.
2. here UpperCase Utility to convert first element uppercase. */

type SnakeCase<
  S extends string,
  R extends string = ""
> = S extends `${infer P}${infer M}`
  ? R extends ""
    ? SnakeCase<M, `${R}${Lowercase<P>}`>
    : Uppercase<P> extends P
    ? SnakeCase<M, `${R}_${Lowercase<P>}`>
    : SnakeCase<M, `${R}${P}`>
  : R;
type A = SnakeCase<"ParthNariya">; //parth_nariya
