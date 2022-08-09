/*
 * @Description: Promise.all
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
 * @Author: mario.ma
 * @Date: 2022-08-09 12:57:18
 * @tags: ["built-in"]
 */
// Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

/* _____________ Your Code Here _____________ */

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): T extends any[] ? 
                                                                            Promise<{[K in keyof T]: T[K] extends Promise<infer R> 
                                                                                ? R 
                                                                                : T[K]
                                                                            }>
                                                                            : never;



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type A = typeof promiseAllTest2

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]