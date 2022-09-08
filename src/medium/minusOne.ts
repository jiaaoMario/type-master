/*
 * @Description: MinusOne
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md
 * @Author: mario.ma
 * @Date: 2022-09-05 12:56:50
 * @tags: ["math", "need-review"]
 */

// Given a number (always positive) as a type. Your type should return the number decreased by one.

/* _____________ Your Code Here _____________ */

type Helper<T extends 1[] = []> = {
  '0':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T],
  '1':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,],
  '2':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1],
  '3':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1],
  '4':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1],
  '5':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1,1],
  '6':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1,1,1],
  '7':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1,1,1,1],
  '8':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1,1,1,1,1],
  '9':[...T,...T,...T,...T,...T,...T,...T,...T,...T,...T,1,1,1,1,1,1,1,1,1]
}

type CountTo<T extends string | number, C extends 1[]> = `${T}` extends `${infer R}${infer U}` ? CountTo<U, Helper<C>[keyof Helper & R]> : C;


type MinusOne<T extends number> = CountTo<T, []> extends [1,...infer R] ? R['length'] : never;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]