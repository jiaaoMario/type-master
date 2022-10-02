/*
 * @Description: Get Optional
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00059-hard-get-optional/README.md
 * @Author: mario.ma
 * @Date: 2022-10-03 01:20:55
 * @tags: ['utils', 'infer']
 */

// Implement the advanced util type GetOptional<T>, which remains all the optional fields

/* _____________ Your Code Here _____________ */
type GetOptional<T> = {
    [K in keyof T as (
        {
            [P in K]?: T[P]
        } extends {
            [U in K]: T[U]
        } ? K : never
    ) ]: T[K]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]