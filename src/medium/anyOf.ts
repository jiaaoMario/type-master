/*
 * @Description: AnyOf
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
 * @Author: mario.ma
 * @Date: 2022-08-29 12:42:27
 * @tags: [array]
 */

// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

/* _____________ Your Code Here _____________ */

type FalsyType = false | 0 | '' | [] | Record<PropertyKey, never>;

type AnyOf<T extends readonly any[]> = T[number] extends FalsyType ? false : true;



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]