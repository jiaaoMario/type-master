/*
 * @Description: Absolute
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
 * @Author: mario.ma
 * @Date: 2022-08-22 12:44:33
 * @tags: ['template-literal', 'math']
 */

// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

/* _____________ Your Code Here _____________ */

type Absolute<T extends number | string | bigint> = `${T}` extends `${'-' | '_' | 'n'}${infer R}` ? Absolute<R> : `${T}`;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]