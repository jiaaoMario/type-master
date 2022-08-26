/*
 * @Description: Diff
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md
 * @Author: mario.ma
 * @Date: 2022-08-25 18:06:56
 * @tags: ['Object']
 */
// Get an Object that is the difference between O & O1

/* _____________ Your Code Here _____________ */

type Diff<O extends {} = {} , O1 extends {} = {}> = {
    [K in (keyof O | keyof O1) as (K extends keyof O ? K extends keyof O1 ? never : K : K)]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never;
}

type DiffOther<O extends {} = {} , O1 extends {} = {}> = Omit<O & O1, keyof O & keyof O1>;

type Test = DiffOther<Foo, Bar>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
  Expect<Equal<DiffOther<Foo, Bar>, { gender: number }>>,
  Expect<Equal<DiffOther<Bar, Foo>, { gender: number }>>,
  Expect<Equal<DiffOther<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<DiffOther<Coo, Foo>, { age: string; gender: number }>>,
]