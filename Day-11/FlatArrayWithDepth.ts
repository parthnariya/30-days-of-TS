// Type that takes an array and emits the flattened array type upto given depth.

/* 1. implementation of this type is same as FlatArray type
2. we take some temp tuple to use its length for depth calculation */


type FlatArrayWithDepth<
  T extends any[],
  Depth extends number = 1,
  Temp extends any[] = []
> = Depth extends Temp["length"]
  ? T
  : T extends [infer FirstElement, ...infer RestElements]
  ? FirstElement extends any[]
    ? [
        ...FlatArrayWithDepth<FirstElement, Depth, [...Temp, 1]>,
        ...FlatArrayWithDepth<RestElements, Depth, [...Temp]>
      ]
    : [FirstElement, ...FlatArrayWithDepth<RestElements, Depth, [...Temp]>]
  : T;
type a = FlatArrayWithDepth<[1, 2, [3, 4], [[[5]]]], 2>;
type b = FlatArrayWithDepth<[1, 2, [3, 4], [[[5]]]]>; 
