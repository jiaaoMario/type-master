/*
 * @Author: mario.ma
 * @Date: 2022-07-29 13:12:11
 */

// Implement the built-in `Pick<T, K>` generic without using it.
/* _____________ Your Code Here _____________ */

// In TypeScript Library can not allow set K to be an unassociated key and the Pick code is:
type MockRealPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type MyPick<T, K extends keyof T | string> = {
    [P in (K extends keyof T ? K : string)]: P extends keyof T ? T[P] : undefined;
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}