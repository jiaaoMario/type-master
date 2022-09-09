/*
 * @Description: StartsWith
 * @href: 'https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md'
 * @Author: mario.ma
 * @Date: 2022-09-09 10:01:55
 * @tags: ['template-literal']
 */

// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

/* _____________ Your Code Here _____________ */

type StartsWith<T extends string, U extends string> = T extends `${U}${infer _R}` ? true : false;

// some good attempt
type StartsWithOther<T extends string, U extends string> = Equals<StringToArray<T>, StringToArray<U>>;

type StringToArray<T extends string = '', List extends string[] = []> = T extends `${infer R}${infer U}` ? StringToArray<U, [...List, R]> : List;

type Equals<T extends any[] = [], R extends any[] = []> = R extends [] ? true : T[0] extends R[0] ? Equals<Shift<T>, Shift<R>> : false;

type Shift<T extends any[]> = T extends [infer _R, ...infer U] ? U : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,

  Expect<Equal<StartsWithOther<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWithOther<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWithOther<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWithOther<'abc', ''>, true>>,
  Expect<Equal<StartsWithOther<'abc', ' '>, false>>,
]