//type version of Array.slice

// 1. take two tuple to track start and end index of given array.

type Slice<
  T extends any[],
  I extends number = 0,
  J extends number = -1,
  IPointer extends any[] = [],
  JPointer extends any[] = [],
  Result extends any[] = []
> = JPointer["length"] extends J // reached at end index.
  ? Result
  : T extends [infer FirstElement, ...infer RestElements]
  ? IPointer["length"] extends I // if start pointer reaches at start index.
    ? Slice<
        RestElements,
        I,
        J,
        IPointer,
        [...JPointer, any],
        [...Result, FirstElement]
      > // add elements to result
    : Slice<RestElements, I, J, [...IPointer, any], [...JPointer, any], Result> // increment both pointer
  : Result;

type A = Slice<[1, 2, 3, 4, 5, 6, 7], 2, 4>;
