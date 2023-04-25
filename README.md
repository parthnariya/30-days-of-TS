# 30-Days Typescript Challenge :dart:

Welcome to my Typescript challenge that spans across 30 days! Over the next month, I have planned to tackle two coding challenges every day and share my solutions on this Github repository. My primary aim for this challenge is to enhance my skills in Typescript and gain new insights into programming concepts as I progress.

## Getting Started

To run the code for each day's challenge, you'll need to have Typescript installed on your machine. You can install Typescript using the following command:

```
npm i -g typescript
```

Once Typescript is installed, you can run the code for each day's challenge by navigating to the appropriate folder and running the following command:

```
tsc [filename].ts && node [filename].js
```

or you can run direct typescript file with [deno](https://deno.land/manual@v1.32.3/introduction).

## Challenges

### :date: Day 1 :

- [FirstChar](./Day-1/FirstChar.ts) : Get the first character of a string.
- [LastChar](./Day-1/LastChar.ts) : Get the last character of a string.

### :date: Day 2 :

- [FlatArray](./Day-2/FlatArray.ts) : type that takes an array and emitted the flatten array type.
- [ReverseTuple](./Day-2/ReverseTuple.ts) : Implement the type version of `Array.reverse`.

### :date: Day 3 :

- [TupleToUnion](./Day-3/TupleToUnion.ts) : type that takes a tuple and convert to union type.
- [EqualTypes](./Day-3/EqualTypes.ts) : type hat takes two types as generic and returns a boolean value based on whether they are equal or not.

### :date: Day 4 :

- [MutableType](./Day-4/MutableType.ts):type which makes all properties in given type mutable (not readonly).
- [Zip](./Day-4/Zip.ts) : type that takes two arrays with different element types and returns a new array of tuples, where each tuple contains one element from each input array, effectively "zipping" them together.

### :date: Day 5 :

- [Pop](./Day-5/Pop.ts) : type that takes an array and remove last element.
- [ReverseTuple](./Day-5/Trim.ts.ts) : the type version of `String.prototype.trim()`.

### :date: Day 6 :

- [FunctionParameters](./Day-6/FunctionParameters.ts) : type that takes an function type and return parameters.
- [ToUpperCase](./Day-6/ToUpperCase.ts) : type version of `String.prototype.toUpperCase()`.

### :date: Day 7 :

- [PickProperty](./Day-7/PickProperty.ts) : the built-in Pick<T, K> generic without using it.
- [FunctionReturnType](./Day-7/FunctionReturnType.ts) : type returns the return type of given function type.

### :date: Day 8 :

- [StringToNumber](./Day-8/StringToNumber.ts) : type that convert given string to number.
- [InOrderTraversal](./Day-8/InOrderTravesal.ts) : type that return in-order traversal of given tree type.

### :date: Day 9 :

- [GetMiddleElement](./Day-9/GetMiddleElement.ts) : type that return middle element of given tuple.
- [FlipObject](./Day-9/FlipObject.ts) : type that flip the object key and value pair.

### :date: Day 10 :

- [ReplaceAll](./Day-10/ReplaceAll.ts) : type that replace the all the substring with given string.
- [MinusOne](./Day-10/MinusOne.ts) : type that return number decreased by one.

### :date: Day 11 :

- [AppendToObject](./Day-11/AppendToObject.ts) : type that adds a new field to the type.
- [FlatArrayWithDepth](./Day-11/FlatArrayWithDepth.ts) : type that takes an array and emitted the flatten tuple by given depth.

### :date: Day 12 :

- [EndsWith](./Day-12/EndsWith.ts) : EndsWith<T, U> tests if T ends with U, both as strings.
- [StringToTuple](./Day-12/StringToTuple.ts) : type that convert given string to tuple.

### :date: Day 13 :

- [MyConstructorParams](./Day-13/MyConstructorParams.ts) : MyConstructorParams is implementation of utility type ConstructorParameters.
- [Absolute](./Day-13/Absolute.ts) : type that take string, number or bigint and give positive number string.

### :date: Day 14 :

- [LengthOfString](./Day-14/LengthOfString.ts) : type that returns length of given string.
- [MyInstanceType](./Day-14/MyInstanceType.ts) : type that represents the instance type returned by the constructor function.

### :date: Day 15 :

- [IndexOf](./Day-15/IndexOf.ts) : type version of `Array.indexOf`.
- [GreaterThan](./Day-15/GreaterThan.ts) : type that returns boolean if first element is greater.

### :date: Day 16 :

- [ReadonlyByKey](./Day-16/ReadonlyByKey.ts) : type that convert type to readonly based on the keys provided.
- [DeepReadonly](./Day-16/DeepReadonly.ts) : type that convert given nested type into readonly type.

## References

- [BigFrontEnd.dev](https://bigfrontend.dev/)
- [Type\<Challenge[]>](https://tsch.js.org/)
