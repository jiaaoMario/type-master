/*
 * @Description: EndsWith
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
 * @Author: mario.ma
 * @Date: 2022-09-09 12:43:50
 * @tags: [template-literal]
 */

// Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U

/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer _R}${U}` ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]
