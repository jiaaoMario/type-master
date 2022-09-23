/*
 * @Description: Without
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md
 * @Author: mario.ma
 * @Date: 2022-09-23 10:27:46
 * @tags: ['union', 'array']
 */

// Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

/* _____________ Your Code Here _____________ */

type SelfEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Guard<T extends number | number[]> = T extends number ? [T] : T;

type Includes<T extends number, U extends readonly any[] = []> = U extends [infer R, ...infer K] ? SelfEqual<R, T> extends true ? true : Includes<T, K> : false

type Without<T extends any[], U extends number[] | number = [], Result extends number[] = []> = T extends [infer R, ...infer K] 
                                                                                                            ? R extends number 
                                                                                                                ? Includes<R, Guard<U>> extends true
                                                                                                                                        ? Without<K, U, Result>
                                                                                                                                        : Without<K, U, [...Result, R]> 
                                                                                                                : Without<K, U, Result>
                                                                                                            : Result;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]