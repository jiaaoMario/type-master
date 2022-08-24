/*
 * @Description: Merge
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md
 * @Author: mario.ma
 * @Date: 2022-08-24 12:46:20
 * @tags: [object]
 */

// Merge two types into a new type. Keys of the second type overrides keys of the first type.

/* _____________ Your Code Here _____________ */

type Merge<F = {}, S = {}> = {
    [K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
}

type A = Merge<Foo, Bar>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]