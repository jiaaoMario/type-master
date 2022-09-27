/*
 * @Description: Subsequence
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.md
 * @Author: mario.ma
 * @Date: 2022-09-27 12:01:13
 * @tags: ['union']
 */

// Given an array of unique elements, return all possible subsequences.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

/* _____________ Your Code Here _____________ */

type Subsequence<T extends any[], Result extends any[] = []> = T extends [infer R, ...infer U]
                                                    ? Result | Subsequence<U, Result> | Subsequence<U, [...Result, R]>
                                                    : Result;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]