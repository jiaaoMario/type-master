/*
 * @Description: Unique
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md
 * @Author: mario.ma
 * @Date: 2022-09-23 19:49:31
 * @tags: ['array']
 */

// Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.

/* _____________ Your Code Here _____________ */
type SelfEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? true : false;

type Includes<T, U> = T extends [infer R, ...infer K] ? SelfEqual<R, U> extends true ? true : Includes<K, U> : false;

type Unique<T extends any[], Result extends any[] = []> = T extends [infer R, ...infer K] 
                                                                ? Includes<Result, R> extends true
                                                                                        ? Unique<K, Result>
                                                                                        : Unique<K, [...Result, R]>
                                                                : Result;

                                                                /* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]