/*
 * @Description: Trim
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
 * @Author: mario.ma
 * @Date: 2022-08-11 12:59:04
 * @tags: ['template-literal']
 */

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S;

type TrimRight<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? TrimRight<R> : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]