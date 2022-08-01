/*
 * @Description: If
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 11:31:22
 * @tags: ["utils"]
 */

// Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. C is expected to be either true or false while T and F can be any type.

/* _____________ Your Code Here _____________ */

type If<C, T, F> = C extends true ? T : F;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

type error = If<null, 'a', 'b'>