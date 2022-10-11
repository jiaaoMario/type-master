/*
 * @Description: String to Number
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.md
 * @Author: mario.ma
 * @Date: 2022-10-11 12:28:10
 * @tags: ["template-literal", "need-review"]
 */

// Convert a string literal to a number, which behaves like Number.parseInt.

/* _____________ Your Code Here _____________ */

type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]