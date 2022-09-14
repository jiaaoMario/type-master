/*
 * @Description: Flip Arguments
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md
 * @Author: mario.ma
 * @Date: 2022-09-14 17:23:32
 * @tags: ["arguments"]
 */

// Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

/* _____________ Your Code Here _____________ */

type Reverse<T extends any[]> = T extends [infer R, ...infer K] ? [...Reverse<K>, R] : []; 

type FlipArguments<T extends Function> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-ignore
  FlipArguments<'string'>,
  // @ts-ignore
  FlipArguments<{ key: 'value' }>,
  // @ts-ignore
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-ignore
  FlipArguments<null | undefined>,
]