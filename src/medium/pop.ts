/*
 * @Description: Pop
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
 * @Author: mario.ma
 * @Date: 2022-08-08 14:09:25
 * @tags: ["built-in"]
 */

// Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.


/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3]>, []>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]