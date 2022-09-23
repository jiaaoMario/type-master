/*
 * @Description: LastIndexOf
 * @Author: mario.ma
 * @Date: 2022-09-23 19:34:46
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md
 */

// Implement the type version of Array.lastIndexOf, LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T

/* _____________ Your Code Here _____________ */

type SelfEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? true : false;

type LastIndexOf<T extends any[] = [], U = any, Index extends unknown[] = [], Result extends number = -1> = T extends [infer R, ...infer K]
                                                                    ? SelfEqual<R, U> extends true 
                                                                                        ? LastIndexOf<K, U, [unknown, ...Index], Index['length']> 
                                                                                        : LastIndexOf<K, U, [unknown, ...Index], Result>
                                                                    : Result;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]