/*
 * @Description: Unshift
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 23:39:05
 * @types: ["array"]
 */

// Implement the type version of Array.unshift

/* _____________ Your Code Here _____________ */

type Unshift<T extends Array<unknown>, U> = [U, ...T];


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]