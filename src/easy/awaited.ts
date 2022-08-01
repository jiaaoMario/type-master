/*
 * @Description: Awaited
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
 * @Author: mario.ma
 * @Date: 2022-08-01 11:18:00
 * @tags: ["built-in"]
 */
// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

/* _____________ Your Code Here _____________ */

type MyAwaited<T> = T extends Promise<infer R> ? R extends Promise<infer U> ? MyAwaited<U> : R : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
]

type error = MyAwaited<number>