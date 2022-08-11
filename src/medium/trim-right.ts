/*
 * @Description: Trim Right
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md
 * @Author: mario.ma
 * @Date: 2022-08-11 13:05:06
 * @tags: ['template-literal']
 */

// Implement TrimRight<T> which takes an exact string type and returns a new string with the whitespace ending removed.

/* _____________ Your Code Here _____________ */

type TrimRight<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? TrimRight<R> : S;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]