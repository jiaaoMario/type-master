/*
 * @Description: Chunk
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md
 * @Author: mario.ma
 * @Date: 2022-09-21 12:47:09
 * @tags: ['tuple']
 */

// Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

/* _____________ Your Code Here _____________ */

type GetLen<T extends number, Result extends any[] = []> = Result['length'] extends T ? Result['length'] : GetLen<T, [any, ...Result]>;

type Chunk<T extends any[], N extends number, Temp extends any[] = [], Result extends any[] = []> = T extends [infer R, ...infer U] 
                                                                            ? Temp['length'] extends GetLen<N>
                                                                                            ? Chunk<T, N, [], [...Result, Temp]>
                                                                                            : Chunk<U, N, [...Temp, R], Result>
                                                                            : Temp extends [infer _J, ...infer _K] ? [...Result, Temp] : Result;
                                                                            
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]