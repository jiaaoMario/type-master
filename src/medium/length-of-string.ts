/*
 * @Description: Length of String
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
 * @Author: mario.ma
 * @Date: 2022-08-17 12:57:51
 * @tags: [template-literal]
 */
// Compute the length of a string literal, which behaves like String#length.

/* _____________ Your Code Here _____________ */
type SplitToArray<S extends string> = S extends `${infer R}${infer U}` ? [R, ...SplitToArray<U>]: [];

type LengthOfString<S extends string> = SplitToArray<S>['length'];

type LengthOfStringOther<S extends string, T extends string[] = []> = S extends `${infer R}${infer U}` ? LengthOfStringOther<U, [...T, R]> : T['length'];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
  Expect<Equal<LengthOfStringOther<''>, 0>>,
  Expect<Equal<LengthOfStringOther<'kumiko'>, 6>>,
  Expect<Equal<LengthOfStringOther<'reina'>, 5>>,
  Expect<Equal<LengthOfStringOther<'Sound! Euphonium'>, 16>>,
]