/*
 * @Description: Get Readonly Keys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00005-extreme-readonly-keys/README.md
 * @Author: mario.ma
 * @Date: 2022-10-17 23:37:36
 * @tags: ['utils', 'object-keys']
 */

// Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

/* _____________ Your Code Here _____________ */

type SelfEqual<T, R> = (<J>(J: J) => J extends T ? 1 : 2) extends (<J>(J: J) => J extends R ? 1 : 2) ? true : false;

type GetReadonlyKeys<T extends Record<string, any>> = keyof {
    [K in keyof T as (SelfEqual<{
        [P in K]: T[P]
    }, {
        readonly [P in K]: T[P]
    }> extends true ? K : never)]: T[K] 
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}