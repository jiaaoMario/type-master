/*
 * @Description: Sort
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00741-extreme-sort/README.md
 * @Author: mario.ma
 * @Date: 2022-11-06 02:06:14
 * @tags: ['infer', 'array']
 */
// In this challenge, you are required to sort natural number arrays in either ascend order or descent order.

/* _____________ Your Code Here _____________ */
type TransNumToArr<T extends number, Result extends unknown[] = []> = Result['length'] extends T    
                                                                                        ? Result
                                                                                        : TransNumToArr<T, [...Result, unknown]>;

type RemoveOnes<T extends unknown[]> = T extends [infer R, ...infer U] ? U['length'] : 1;

type IsEqualOrLess<T extends number, R extends number, TArr extends unknown[] = TransNumToArr<T>, RArr extends unknown[] = TransNumToArr<R>> = TArr['length'] extends RArr['length']
                                                                                                                                                                  ? true
                                                                                                                                                                  : TArr['length'] extends 0
                                                                                                                                                                                    ? true
                                                                                                                                                                                    : RArr['length'] extends 0
                                                                                                                                                                                                        ? false
                                                                                                                                                                                                        : IsEqualOrLess<RemoveOnes<TArr>, RemoveOnes<RArr>>;

type Insert<T extends number, Arr extends number[], descent extends boolean = false, Result extends number[] = []> = Arr extends [infer P extends number, ...infer N extends number[]] 
                                                                                            ? descent extends true
                                                                                                        ? IsEqualOrLess<T, P> extends true ? Insert<T, N, descent, [...Result, P]> : [...Result, T, ...Arr]
                                                                                                        : IsEqualOrLess<T, P> extends true ? [...Result, T, ...Arr] : Insert<T, N, descent, [...Result, P]>
                                                                                            : [...Result, T];                                                                                                                                                                                                        


type Sort<T extends number[] = [], descent extends boolean = false, Result extends number[] = []> = T extends [infer R extends number, ...infer U extends number[]] ? Sort<U, descent, Insert<R, Result, descent>> : Result;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Sort<[]>, []>>,
  Expect<Equal<Sort<[1]>, [1]>>,
  Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
  Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,
  Expect<Equal<Sort<[], true>, []>>,
  Expect<Equal<Sort<[1], true>, [1]>>,
  Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
  Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>>,
]