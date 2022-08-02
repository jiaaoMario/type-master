/*
 * @Description: Omit
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
 * @Author: mario.ma
 * @Date: 2022-08-02 12:53:58
 * @tags: ["built-in"]
 */

// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

/* _____________ Your Code Here _____________ */

type Exclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
    [U in Exclude<keyof T, K>]: T[U]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}