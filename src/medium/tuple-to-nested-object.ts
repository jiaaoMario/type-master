/*
 * @Description: Tuple-to-Nested-Object
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md
 * @Author: mario.ma
 * @Date: 2022-09-14 00:14:12
 * @tags: ["object"]
 */

// Given a tuple type T that only contains string type, and a type U, build an object recursively.

/* _____________ Your Code Here _____________ */

type TupleToNestedObject<T extends PropertyKey[], U extends any> = T extends [infer R extends PropertyKey, ...infer J extends PropertyKey[]] ? Record<R, TupleToNestedObject<J, U>> : U;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]