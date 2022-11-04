/*
 * @Description: IsPalindrome
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04037-hard-ispalindrome/README.md
 * @Author: mario.ma
 * @Date: 2022-11-05 01:12:41
 * @tags: ['string']
 */

// Implement type IsPalindrome<T> to check whether a string or number is palindrome.

/* _____________ Your Code Here _____________ */

type FirstOfStr<T extends string | number> = T extends `${infer R}${infer _U}` ? R : never;

type EndOfStr<T extends string | number> = T extends `${infer _R}${infer M}${infer L}` 
                                                ? L extends '' ? M : EndOfStr<`${M}${L}`> : never;

type GetStrLen<T extends string, Result extends unknown[] = []> = T extends `${infer _R}${infer U}` ? GetStrLen<U, [...Result, unknown]> : Result['length'];

type RemoveEndOfStr<T extends string, Result extends string = ''> = GetStrLen<T> extends 1 ? Result : T extends `${infer R}${infer U}` ? RemoveEndOfStr<U, `${Result}${R}`> : never;

type IsPalindrome<T extends string | number> = `${T}` extends ''
                                                    ? true
                                                    : GetStrLen<`${T}`> extends 1
                                                                            ? true
                                                                            : FirstOfStr<`${T}`> extends EndOfStr<`${T}`>
                                                                                                ? `${T}` extends `${infer _R}${infer P}`
                                                                                                    ? IsPalindrome<RemoveEndOfStr<P>>
                                                                                                    : T
                                                                                                : false;
                                                        
type a = IsPalindrome<`abcba`>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]