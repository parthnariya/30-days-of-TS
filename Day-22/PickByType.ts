//  type that extract keys with input type.

/* 1. traverse through keys and check type of that key. */

type PickByType<T extends Record<string, any>, K> = {
  [P in keyof T as T[P] extends K ? P : never]: T[P];
};
type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
