/*
 * @Description: Drop Char
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md
 * @Author: mario.ma
 * @Date: 2022-09-05 10:12:12
 * @tag: ['template-literal', '#infer']
 */

// Drop a specified char from a string.

/* _____________ Your Code Here _____________ */

type DropChar<S extends string, C extends string, U extends string = ''> = S extends `${infer R}${infer K}` ? R extends C ? DropChar<K, C, `${U}`> : DropChar<K, C, `${U}${R}`> : U


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]