/*
 * @Description: Concat
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md     
 * @Author: mario.ma
 * @Date: 2022-08-01 11:37:06
 * @tags: ["array"]
 */

// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

/* _____________ Your Code Here _____________ */

type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U]


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]