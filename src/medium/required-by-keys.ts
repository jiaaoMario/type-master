/*
 * @Description: RequiredByKeys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md
 * @Author: mario.ma
 * @Date: 2022-09-12 22:37:07
 * @tags: ["object"]
 */

// Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

/* _____________ Your Code Here _____________ */

type MergeObjects<T> = {
    [K in keyof T]: T[K];
}

type RequiredByKeys<T = Record<string, any>, K = keyof T> = MergeObjects<{
    [P in keyof T as (P extends K ? never : P)]?: T[P];
} & {
    [U in keyof T as (U extends K ? U : never)]-?: T[U];
}>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]

