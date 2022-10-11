/*
 * @Description: Tuple Filter
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00399-hard-tuple-filter/README.md
 * @Author: mario.ma
 * @Date: 2022-10-12 00:25:01
 * @tags: ['tuple', 'infer', 'need-review']
 */

// Implement a type FilterOut<T, F> that filters out items of the given type F from the tuple T.

/* _____________ Your Code Here _____________ */

type SelfEqual<T, R> = (<K>(T) => K extends T ? 1 : 2) extends (<K>(T) => K extends R ? 1 : 2) 
                                                        ? true 
                                                        : [T] extends [R]
                                                                ? true
                                                                : false;

type FilterOut<T extends any[], F, Result extends any[] = []> = T extends [infer R, ...infer U]
                                                    ? SelfEqual<R, F> extends true
                                                        ? FilterOut<U, F, Result>
                                                        : FilterOut<U, F, [...Result, R]>
                                                    : Result;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]