// Implement the generic which makes all properties in given type mutable.
/* e.g.
type Todo = {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
type MutableTodo = MutableType<Todo> // { title: string; description: string; completed: boolean; } */

// here we can override the modifier.
// with the use of -readonly modifier it will remove the readonly modifier

type MutableType<T> = {
    -readonly [Key in keyof T] : T[Key]
}
type Todo = {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
type MutableTodo = MutableType<Todo> 