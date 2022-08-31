/*
 * @Description: IsUnion
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
 * @Author: mario.ma
 * @Date: 2022-08-31 12:35:19
 * @tags: ["utils"]
 */
/* _____________ Your Code Here _____________ */

type IsNever<T> = (<R>() => R extends T ? 1 : 2) extends (<U>() => U extends never ? 1 : 2) ? true : false;
type IsUnion<T, R = T> = IsNever<T> extends true ? false : T extends T ? IsNever<Exclude<R, T>> extends true ? false : true : never;

type IsUnionOther<T, R = T> = IsNever<T> extends true ? false : T extends T ? [R] extends [T] ? false : true : never;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,

  Expect<Equal<IsUnionOther<string>, false>>,
  Expect<Equal<IsUnionOther<string | number>, true>>,
  Expect<Equal<IsUnionOther<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnionOther<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnionOther<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnionOther<{ a: string | number }>, false>>,
  Expect<Equal<IsUnionOther<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnionOther<string | never>, false>>,
  Expect<Equal<IsUnionOther<string | unknown>, false>>,
  Expect<Equal<IsUnionOther<string | any>, false>>,
  Expect<Equal<IsUnionOther<string | 'a'>, false>>,
  Expect<Equal<IsUnionOther<never>, false>>,
]