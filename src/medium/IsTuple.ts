/*
 * @Description: IsTuple
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md
 * @Author: mario.ma
 * @Date: 2022-09-21 00:01:17
 * @tags: ['tuple', "need-review"]
 */

// Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

/* _____________ Your Code Here _____________ */

type IsTuple<T> = [T] extends [never] ? false : T extends readonly [any?] ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]