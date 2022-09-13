/*
 * @Description: ObjectEntries
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
 * @Author: mario.ma
 * @Date: 2022-09-13 12:43:06
 * @tags: ['object']
 */

// Implement the type version of Object.entries

/* _____________ Your Code Here _____________ */

type TransNeverToUndefined<T> = [T] extends [never] ? undefined : T;

type ObjectEntries<T extends Record<string, any>, K extends keyof T = keyof T> = K extends K ? [K, TransNeverToUndefined<Required<T>[K]>] : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]
