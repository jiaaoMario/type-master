/*
 * @Description: Get Required
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.md
 * @Author: mario.ma
 * @Date: 2022-10-02 01:02:46
 * @tags: ['utils', 'infer', 'need-review']
 */

// Implement the advanced util type GetRequired<T>, which remains all the required fields

/* _____________ Your Code Here _____________ */

type SelfRequired<T> = {
    [K in keyof T]-?: T[K];
};

type GetRequired<T> = {
    [K in keyof T as ({
        [P in K]: T[P]
    } extends SelfRequired<{
        [U in K]: T[U]
    }> ? K : never)]: T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]