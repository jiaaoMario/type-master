/*
 * @Description: Get Return Type
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 23:58:06
 * @tags: ['infer', 'built-in']
 */

// Implement the built-in ReturnType<T> generic without using it.

/* _____________ Your Code Here _____________ */

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2