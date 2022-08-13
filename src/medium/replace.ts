/*
 * @Description: Replace
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
 * @Author: mario.ma
 * @Date: 2022-08-14 01:23:43
 * @tags: ["template-literal"]
 */
// Implement Replace<S, From, To> which replace the string From with To once in the given string S

/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> = From extends '' 
                                                                        ? S : S extends `${infer R}${From}${infer U}` 
                                                                        ? `${R}${To}${U}` : S;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Test = Replace<'types are fun!', 'fun', 'awesome'>;

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]