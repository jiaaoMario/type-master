/*
 * @Description: PartialByKeys
 * href: https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
 * @Author: mario.ma
 * @Date: 2022-09-09 13:05:22
 * @tags: [object]
 */

// Implement a generic PartialByKeys<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

/* _____________ Your Code Here _____________ */

type PartialByKeys<T, U = keyof T> = MergeObjects<{
    [K in keyof T as (K extends U ? K : never)]?: T[K];
} & {
    [K in keyof T as (K extends U ? never : K)]: T[K];
}>;

type MergeObjects<O> = {
    [K in keyof O]: O[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]