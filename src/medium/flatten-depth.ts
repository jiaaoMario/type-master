/*
 * @Description: FlattenDepth
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md
 * @Author: mario.ma
 * @Date: 2022-09-15 12:35:47
 * @tags: ["array"]
 */

// Recursively flatten array up to depth times.

/* _____________ Your Code Here _____________ */

type FlattenDepth<T extends any[] = [], Depth extends number = 1, Helper extends any[] = []> = Helper['length'] extends Depth 
                                                                                               ? T : T extends [infer R, ...infer U] 
                                                                                               ? R extends any[]
                                                                                               ? [...FlattenDepth<R, Depth, [...Helper, 1]>, ...FlattenDepth<U, Depth, Helper>]
                                                                                               : [R, ...FlattenDepth<U, Depth, Helper>]
                                                                                               : T;



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]