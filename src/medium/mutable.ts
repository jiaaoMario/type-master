/*
 * @Description: Mutable
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
 * @Author: mario.ma
 * @Date: 2022-09-13 11:36:46
 * @tags: ['readonly', 'object-keys']
 */

// Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

/* _____________ Your Code Here _____________ */

// type CopyArray<T extends Array<any> = [], L extends any[] = []> = T extends [infer U, ...infer R] ? CopyArray<R, [...L, U]> : L;

type Mutable<T extends Array<any> | Record<string, any>> = T extends {} ? {
    -readonly [K in keyof T]: T[K];
} : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  Mutable<'string'>,
  Mutable<0>,
]