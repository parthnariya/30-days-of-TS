// implement a type Zip<T, U>, T and U must be Tuple
// type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

/* 1. T and U must be tuple so Zip<T extends any[],U extends any[]>
2. go with first and rest element strategy  */
type Zip<T extends any[], U extends any[]> = T extends [
  infer FirstElementOfT,
  ...infer RestElementOfT
]
  ? U extends [infer FirstElementOfU, ...infer RestElementOfU]
    ? [
        [FirstElementOfT, FirstElementOfU],
        ...Zip<RestElementOfT, RestElementOfU>
      ]
    : []
  : [];
type exp = Zip<[1, 2, 3], [true, false, true]>;
