/*
 * @Description: Fibonacci Sequence
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md
 * @Author: mario.ma
 * @Date: 2022-09-18 01:33:41
 * @tags: ['math']
 */

// Implement a generic Fibonacci<T> takes an number T and returns it's corresponding Fibonacci number.
// The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

/* _____________ Your Code Here _____________ */

type Fibonacci<T extends number, Cache extends null[] = [null], Previous extends null[] = [], Next extends null[] = [null]> = Cache['length'] extends T ? Next['length'] : 
                                                                                                                             Fibonacci<T, [null, ...Cache], Next, [...Previous, ...Next]>;           

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]