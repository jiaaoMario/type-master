/*
 * @Description: Currying 1 
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.md
 * @Author: mario.ma
 * @Date: 2022-09-29 22:47:28
 * @tags: ['array']
 */

// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

/* _____________ Your Code Here _____________ */
type Curry<T> = T extends (Pre: infer R, ...rest: infer U) => infer L 
                    ? U extends [] 
                            ? (x: R) => L 
                            : (x: R) => Curry<(...args: U) => L>
                    : never;

declare function Currying<F>(fn: F): Curry<F>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]