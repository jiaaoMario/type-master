/*
 * @Description: MapTypes
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md
 * @Author: mario.ma
 * @Date: 2022-09-24 00:10:24
 * @tags: ['map', 'object', 'utils', "need-review"]
 */

// Implement MapTypes<T, R> which will transform types in object T to different types defined by type R which has the following structure

/* _____________ Your Code Here _____________ */

type MapTypes<T extends Record<string, any>, R extends Record<'mapFrom' | 'mapTo', any>> = {
    [K in keyof T]: T[K] extends R['mapFrom'] ? R extends {} ? R['mapFrom'] extends T[K]
    ? R['mapTo']
    : never : R['mapTo'] : T[K];
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>, { stringToArray: [] }>>,
  Expect<Equal<MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>, { stringToNumber: number }>>,
  Expect<Equal<MapTypes<{ stringToNumber: string; skipParsingMe: boolean }, { mapFrom: string; mapTo: number }>, { stringToNumber: number; skipParsingMe: boolean }>>,
  Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }>, { date: null | Date }>>,
  Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>, { date: null | Date }>>,
  Expect<Equal<MapTypes<{ fields: Record<string, boolean> }, { mapFrom: Record<string, boolean>; mapTo: string[] }>, { fields: string[] }>>,
  Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
  Expect<Equal<MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>, { name: boolean; date: string }>>,
]