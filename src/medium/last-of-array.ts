/*
 * @Description: Last of Array
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
 * @Author: mario.ma
 * @Date: 2022-08-06 23:38:07
 * @tags: ['array']
 */
// Implement a generic Last<T> that takes an Array T and returns its last element.

/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = T extends [...any, infer U] ? U : never;

type LastOfIdiot<T extends any[]> = T extends [any, ...infer U] 
                                            ? U extends [any, any] 
                                                      ? LastOfIdiot<U> 
                                                      : U extends [infer Z] 
                                                                ? Z 
                                                                : never
                                            : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<LastOfIdiot<[3, 2, 1]>, 1>>,
  Expect<Equal<LastOfIdiot<[() => 123, { a: string }]>, { a: string }>>,
]