/*
 * @Description: First of Array
 * @location: https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 * @Author: mario.ma
 * @Date: 2022-07-31 23:41:06
 */
// Implement a generic First<T> that takes an Array T and returns it's first element's type.

/* _____________ Your Code Here _____________ */

type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

type FirstOther<T extends any[]> = T extends [infer R, ...infer U] ? R : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
  Expect<Equal<FirstOther<[3, 2, 1]>, 3>>,
  Expect<Equal<FirstOther<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<FirstOther<[]>, never>>,
  Expect<Equal<FirstOther<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
