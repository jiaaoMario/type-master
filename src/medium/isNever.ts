/*
 * @Description: IsNever
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
 * @Author: mario.ma
 * @Date: 2022-08-30 00:26:59
 * @tags: ["union","utils"]
 */

// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

/* _____________ Your Code Here _____________ */

type IsNever<T extends any> = [T] extends [never] ? true : false;

type IsNeverOther<T extends any> = (<S>() => S extends T ? 1 : 2) extends (<R>() => R extends never ? 1 : 2) ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
  Expect<Equal<IsNeverOther<never>, true>>,
  Expect<Equal<IsNeverOther<never | string>, false>>,
  Expect<Equal<IsNeverOther<''>, false>>,
  Expect<Equal<IsNeverOther<undefined>, false>>,
  Expect<Equal<IsNeverOther<null>, false>>,
  Expect<Equal<IsNeverOther<[]>, false>>,
  Expect<Equal<IsNeverOther<{}>, false>>,
]