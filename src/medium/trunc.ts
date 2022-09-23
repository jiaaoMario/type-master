/*
 * @Description: Trunc
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md
 * @Author: mario.ma
 * @Date: 2022-09-23 12:57:07
 * @tags: ['template-literal']
 */

// Implement the type version of Math.trunc, which takes string or number and returns the integer part of a number by removing any fractional digits.

/* _____________ Your Code Here _____________ */

type Trunc<T extends string | number> = `${T}` extends `${infer R}.${infer _U}` ? R : `${T}`;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]