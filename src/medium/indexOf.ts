/*
 * @Description: IndexOf
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md
 * @Author: mario.ma
 * @Date: 2022-09-23 18:34:52
 * @tags: ['array']
 */

/* _____________ Your Code Here _____________ */

type SelfEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? true : false

type IndexOf<T extends any[], U extends any, Temp extends unknown[] = []> = T extends [infer R, ...infer K]
                                                                                ? SelfEqual<R, U> extends true
                                                                                    ? Temp['length'] : IndexOf<K, U, [unknown, ...Temp]>
                                                                                : -1;

type T = 1 extends any ? 1 : 2
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]