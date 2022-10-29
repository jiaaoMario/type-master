/*
 * @Description: Two Sum
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/08804-hard-two-sum/README.md
 * @Author: mario.ma
 * @Date: 2022-10-29 02:58:54
 * @tags: ['array', 'math']
 */

// Given an array of integers nums and an integer target, return true if two numbers such that they add up to target.

/* _____________ Your Code Here _____________ */
type NumToTuple<T extends number, Result extends unknown[] = []> = Result['length'] extends T
                                                                        ? Result
                                                                        : NumToTuple<T, [...Result, unknown]>;

type Sum<T extends number, R extends number> = [...NumToTuple<T>, ...NumToTuple<R>]['length'];

type GetSumList<L extends number[], Num extends number, Result extends number[] = []> = L extends [infer R, ...infer U extends number[]]
                                                                    ? R extends number ? GetSumList<U, Num, [...Result, Sum<R, Num> & number]> : never
                                                                    : Result

type SumList<L extends number[], Result extends number[] = []> = L extends [infer R extends number, ...infer U extends number[]]
                                                                ? SumList<U, [...Result, ...GetSumList<U, R>]>
                                                                : Result;
                                                                
type TwoSum<T extends number[], U extends number> = U extends SumList<T>[number] ? true : false;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
]