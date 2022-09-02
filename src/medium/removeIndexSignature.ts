/*
 * @Description: Remove Index Signature
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
 * @Author: mario.ma
 * @Date: 2022-09-02 12:42:42
 * @tags: ['utils']
 */

// Implement RemoveIndexSignature<T> , exclude the index signature from object types.

/* _____________ Your Code Here _____________ */

type RemoveIndexSignature<T> = {
    [K in keyof T as (number extends K ? never : symbol extends K ? never : string extends K ? never : K)]: T[K]
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}
type A = RemoveIndexSignature<Foo>
type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]