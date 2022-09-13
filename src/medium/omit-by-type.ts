/*
 * @Description: OmitByType
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
 * @Author: mario.ma
 * @Date: 2022-09-13 12:38:57
 * @tags: ['object']
 */

// From T, pick a set of properties whose type are not assignable to U.

/* _____________ Your Code Here _____________ */

type OmitByType<T, U> = {
    [K in keyof T as (T[K] extends U ? never : K)]: T[K];
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]
