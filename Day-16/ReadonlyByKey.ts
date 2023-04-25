// type that convert type to readonly based on the keys provided.

/* 1. get given keys from object make them readonly.
2. merge with original type. */

type ReadonlyByKeys<
  T extends Record<string, any>,
  K extends keyof T = keyof T
> = Omit<T, K> & Readonly<Pick<T, K>>;


interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: ReadonlyByKeys<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK