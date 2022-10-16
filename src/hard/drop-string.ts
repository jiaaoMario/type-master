/*
 * @Description: Drop String
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.md
 * @Author: mario.ma
 * @Date: 2022-10-17 00:38:09
 * @tags: ['template-literal', 'infer', 'need-review']
 */

// Drop the specified chars from a string.

/* _____________ Your Code Here _____________ */

type DropString<S extends string, R extends string> = R extends `${infer H}${infer Rest}` 
                                                        ? S extends `${infer HH}${H}${infer RR}` 
                                                            ? DropString<DropString<`${HH}${RR}`, H>, Rest>
                                                            : DropString<S, Rest>
                                                        : S
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]