// LastChar<T>  to get the last character.

/* 1. T should be string => T extends string
2. split string into two part firstChar and restOfString    
3. recursively call type till last char 
*/
type LastChar<T extends string> = T extends `${infer FirstChar}${infer RestOfString}` ? (RestOfString extends '' ? FirstChar : LastChar<RestOfString>) : never


type A = LastChar<'parth'> // 'p'
type B = LastChar<''> // never
type C = LastChar<'B'>
