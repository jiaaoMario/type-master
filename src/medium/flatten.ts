/*
 * @Description: Flatten
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md
 * @Author: mario.ma
 * @Date: 2022-08-18 12:55:59
 * @tags: [array]
 */
// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

/* _____________ Your Code Here _____________ */

type Flatten<T extends any[]> = T extends [infer R, ...infer U] ? R extends any[] ? [...Flatten<R>, ...Flatten<U>] : [R, ...Flatten<U>] : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]