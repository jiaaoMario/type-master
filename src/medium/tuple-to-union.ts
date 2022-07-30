/*
 * @Description: tuple-to-union
 * @location: https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
 * @Author: mario.ma
 * @Date: 2022-07-31 02:41:56
 */

// QA: Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends Array<unknown>> = T[number];

type OtherSolutionOfTupleToUnion<T extends Array<unknown>> = T extends Array<infer K> ? K : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
  Expect<Equal<OtherSolutionOfTupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<OtherSolutionOfTupleToUnion<[123]>, 123>>,
]