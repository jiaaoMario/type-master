/*
 * @Description: capitalize Nest Object Keys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/09775-hard-capitalize-nest-object-keys/README.md
 * @Author: mario.ma
 * @Date: 2022-10-28 00:17:08
 * @tags: ['object', 'array']
 */

// Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

/* _____________ Your Code Here _____________ */

type Capital<T extends string> = T extends `${infer R}${infer U}`
                                    ? `${Uppercase<R>}${U}`
                                    : Uppercase<T>;


type CapitalList<T extends unknown[], Result extends unknown[] = []> = T extends  [infer R, ...infer U]
                                                ? CapitalList<U, [...Result, CapitalizeNestObjectKeys<R>]>
                                                : Result;

type CapitalizeNestObjectKeys<T extends unknown> = {
    [K in keyof T as (K extends string ? Capital<K> : K)]: T[K] extends Record<string, unknown>[]
                                                                    ? CapitalList<T[K]>
                                                                    : T[K] extends Record<string, any>
                                                                            ? CapitalizeNestObjectKeys<T[K]>
                                                                            : T[K];
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type foo = {
  foo: string,
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]