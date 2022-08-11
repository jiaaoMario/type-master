/*
 * @Description: Trim Left
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
 * @Author: mario.ma
 * @Date: 2022-08-11 12:48:47
 * @tags: ["template-literal"]
 */

// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S;

type A = TrimLeft<'     str'>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]