/*
 * @Description: Optional Keys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00090-hard-optional-keys/README.md
 * @Author: mario.ma
 * @Date: 2022-10-03 22:42:17
 * @tags: ['utils']
 */

// Implement the advanced util type OptionalKeys<T>, which picks all the optional keys into a union.

/* _____________ Your Code Here _____________ */

type SelfRequired<T> = {
    [K in keyof T]-?: T[K];
};

type GetOptional<T> = {
    [K in keyof T as (
        {
            [P in K]: T[P];
        } extends SelfRequired<{
            [P in K]: T[P];
        }> ? never : K
    )]: T[K];
};

type OptionalKeys<T> = keyof GetOptional<T>;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]