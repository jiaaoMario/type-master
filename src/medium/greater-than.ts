/*
 * @Description: Greater Than
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.md
 * @Author: mario.ma
 * @Date: 2022-09-20 00:22:46
 * @tags: ['array', 'need-review']
 */

// In This Challenge, You should implement a type GreaterThan<T, U> like T > U
// Negative numbers do not need to be considered.


/* _____________ Your Code Here _____________ */

type TransToArray<T extends number, Temp extends any[] = []> = Temp['length'] extends T ? Temp : TransToArray<T, [any, ...Temp]>;

type Decrease<T extends number> = TransToArray<T> extends [any, ...infer R] ? R['length'] : never;

type GreaterThan<T extends number, U extends number> = T extends 0 ? false : U extends 0 ? true : GreaterThan<Decrease<T>, Decrease<U>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]
