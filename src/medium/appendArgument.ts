/*
 * @Description: Append Argument
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
 * @Author: mario.ma
 * @Date: 2022-08-15 14:31:21
 * @tags: ['arguments']
 */
// For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

/* _____________ Your Code Here _____________ */

type AppendArgument<Fn, A> = Fn extends (...args: infer D) => infer R ? (...args: [...D, A]) => R : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]