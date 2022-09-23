/*
 * @Description: Join
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
 * @Author: mario.ma
 * @Date: 2022-09-23 19:11:18
 * @tags: ['array']
 */

// Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

/* _____________ Your Code Here _____________ */

type Join<T extends string[], U extends string | number, Result extends string = ''> = T extends [infer R, ...infer K] 
                                                                    ? R extends string ? K extends string[] ? Join<K, U, `${Result}${R}${K['length'] extends 0 ? '' : U}`> : never : never
                                                                    : Result;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]