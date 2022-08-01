/*
 * @Description: Push
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 13:17:19
 * @tags: ['array']
 */

// Implement the generic version of Array.push

/* _____________ Your Code Here _____________ */

type Push<T extends Array<unknown>, U> = [...T, U];


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]