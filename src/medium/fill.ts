/*
 * @Description: Fill
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.md
 * @Author: mario.ma
 * @Date: 2022-09-22 00:24:02
 * @tags: ['tuple', 'need-review']
 */

// Fill, a common JavaScript function, now let us implement it with types. Fill<T, N, Start?, End?>, as you can see,Fill accepts four types of parameters, 
// of which T and N are required parameters, and Start and End are optional parameters. 
// The requirements for these parameters are: T must be a tuple, N can be any type of value, Start and End must be integers greater than or equal to 0.
// In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

/* _____________ Your Code Here _____________ */

type NumberToArr<N extends number, Result extends unknown[] = []> = Result['length'] extends N ? Result : NumberToArr<N, [unknown, ...Result]>;

type GreaterOrEqual<T extends number, R extends number> = NumberToArr<T> extends [...NumberToArr<R>, ...any] ? true : false;

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Temp extends unknown[] = []
> = T extends [infer R, ...infer U]
      ? [GreaterOrEqual<Temp['length'], Start> extends true 
        ? GreaterOrEqual<Temp['length'], End> extends true 
          ? R 
          : N 
        : R, ...Fill<U, N, Start, End, [unknown, ...Temp]>] 
      : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]
