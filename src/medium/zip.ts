/*
 * @Description: Zip
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md
 * @Author: mario.ma
 * @Date: 2022-09-20 22:04:07
 * @tags: ['tuple']
 */

// In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

/* _____________ Your Code Here _____________ */

type Zip<T extends any[] = [], R extends any[] = [], Helper extends any[] = []> = T extends [infer PreT, ...infer SufT] 
                                                                                    ? R extends [infer PreR, ...infer SufR]
                                                                                        ? Zip<SufT, SufR, [...Helper, [PreT, PreR]]>
                                                                                        : Helper
                                                                                    : Helper;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]