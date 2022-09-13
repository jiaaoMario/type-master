/*
 * @Description: Reverse
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
 * @Author: mario.ma
 * @Date: 2022-09-14 00:53:45
 * @tags: ['tuple']
 */

// Implement the type version of Array.reverse

/* _____________ Your Code Here _____________ */

type Reverse<T extends any[]> = T extends [infer R, ...infer U] ? [...Reverse<U>, R] : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]