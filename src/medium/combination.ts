/*
 * @Description: Combination
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.md
 * @Author: mario.ma
 * @Date: 2022-09-26 10:57:19
 * @tags: ['array', 'application', 'string', 'need-review']
 */
// Given an array of strings, do Permutation & Combination. It's also useful for the prop types like video controlsList


/* _____________ Your Code Here _____________ */

type Combination<_T extends string[], All extends string = _T[number], Current = All> = Current extends string 
                                                                                    ? Current | `${Current} ${Combination<[], Exclude<All, Current>>}`
                                                                                    : never;

type Test = Combination<['foo', 'bar', 'baz']>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]