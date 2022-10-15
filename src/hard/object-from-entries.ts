/*
 * @Description: ObjectFromEntries
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02949-hard-objectfromentries/README.md
 * @Author: mario.ma
 * @Date: 2022-10-16 01:35:13
 * @tags: ['object', "need-review"]
 */

// Implement the type version of Object.fromEntries

/* _____________ Your Code Here _____________ */
type TurnObject<T> = T extends [infer K, infer U]
                        ? { [k in K extends string ? K : never]: U }
                        : never;

type PickKeys<T> = (T extends any 
                        ? (arg: T) => void 
                        : never) extends (arg: infer U) => void 
                                    ? U
                                    : never

type ObjectFromEntries<T> = {
    [K in keyof PickKeys<TurnObject<T>>]: PickKeys<TurnObject<T>>[K]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]