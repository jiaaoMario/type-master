/*
 * @Description: Shift
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
 * @Author: mario.ma
 * @Date: 2022-09-14 00:05:49
 * @tags: ['array']
 */

// Implement the type version of Array.shift

/* _____________ Your Code Here _____________ */

type Shift<T> = T extends [infer _R, ...infer U] ? U : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]