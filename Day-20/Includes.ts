// type version of Array.includes

/* 1. compare with first element.
2. if match then return true.
3. otherwise delete first element and check for rest. */

type EqualType<T, P> = (<ThirdParty>() => ThirdParty extends T
  ? "valid"
  : "invalid") extends <ThirdParty>() => ThirdParty extends P
  ? "valid"
  : "invalid"
  ? true
  : false;

type Includes<T extends any[], E> = EqualType<T[0], E> extends true
  ? true
  : T extends [infer _, ...infer RestElements]
  ? Includes<RestElements, E>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type isPillarMen2 = Includes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Santana"
>; // expected to be `true`
