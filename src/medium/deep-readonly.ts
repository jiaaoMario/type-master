/*
 * @Description: Deep ReadOnly
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
 * @Author: mario.ma
 * @Date: 2022-08-04 12:53:37
 * @tags: ["built"]
 */

// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possible.

/* _____________ Your Code Here _____________ */

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Function ? T[K] : T[K] extends {} ? DeepReadonly<T[K]> : T[K];
}

type DeepReadonlyOther<T> = {
    readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonlyOther<T[K]>;
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
  Expect<Equal<DeepReadonlyOther<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}
