// Implement a type that adds a new field to the interface.

/* 1. we take keys from union of given object and property.
2. then check if key is present in T then return value from object 
3. otherwise return value */

type AppendToObject<T extends Record<string,any>, Prop extends keyof any, Value> = {
  [K in (keyof T) | Prop]: K extends keyof T ? T[K] : Value;
};
type TestAppendToObject = { id: 1 };

type ResultAppendToObject = AppendToObject<TestAppendToObject, "name", "abc">;
