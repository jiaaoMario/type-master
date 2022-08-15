/*
 * @Description: ReplaceAll
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
 * @Author: mario.ma
 * @Date: 2022-08-15 12:05:02
 * @tags: ['template-literal']
 */

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

/* _____________ Your Code Here _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer R}${From}${infer U}` 
                                                                                ? `${R}${To}${ReplaceAll<U, From, To>}`
                                                                                : S;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type Test = ReplaceAll<'foboorfoboar', 'bo', 'b'>

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]