/*
 * @Description: Construct Tuple
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md
 * @Author: mario.ma
 * @Date: 2022-09-25 00:35:02
 * @tags: ['tuple']
 */

// Construct a tuple with a given length.

/* _____________ Your Code Here _____________ */

type ConstructTuple<L extends number, Result extends unknown[] = []> = Result['length'] extends L ? Result : ConstructTuple<L, [unknown, ...Result]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]
