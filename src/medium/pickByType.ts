/*
 * @Description: PickByType
 * @href: 'https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md'
 * @Author: mario.ma
 * @Date: 2022-09-08 17:39:08
 * @tags: ['object']
 */

// From T, pick a set of properties whose type are assignable to U.

/* _____________ Your Code Here _____________ */

type PickByType<T extends Record<string, any>, U extends any> = {
    [K in keyof T as (T[K] extends U ? K : never)]: T[K];
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
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]