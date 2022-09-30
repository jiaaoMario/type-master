/*
 * @Description: Union to Intersection
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md
 * @Author: mario.ma
 * @Date: 2022-10-01 02:35:18
 * @tags: ['utils', 'infer']
 */

// Implement the advanced util type UnionToIntersection<U>

/* _____________ Your Code Here _____________ */

type ToFunc<T> = T extends any
  ? (arg: T) => void
  : never

type UnionToIntersection<U> = ToFunc<U> extends (args: infer Arg) => void
                                            ? Arg
                                            : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]