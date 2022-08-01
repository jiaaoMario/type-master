/*
 * @Description: Parameters
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 23:47:27
 * @tags: ["built-in"]
 */
// Implement the built-in Parameters generic without using it.

/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]