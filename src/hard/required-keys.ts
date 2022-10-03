/*
 * @Description: Required Keys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00089-hard-required-keys/README.md
 * @Author: mario.ma
 * @Date: 2022-10-03 22:01:41
 * @tags: ['utils']
 */

// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

/* _____________ Your Code Here _____________ */

type SelfRequired<T> = {
    [K in keyof T]-?: T[K]
}

type FilterRequired<T> = {
    [K in keyof T as ({
        [P in K]: T[P] 
    } extends SelfRequired<{
        [P in K]: T[P] 
    }> ? K : never)]: T[K];
}

type RequiredKeys<T> = keyof FilterRequired<T>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]