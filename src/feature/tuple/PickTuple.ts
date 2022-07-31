/*
 * @Description: 
 * @Author: mario.ma
 * @Date: 2022-08-01 01:01:06
 */

import type { Equal, Expect } from '@type-challenges/utils'
type PickFromArray<T extends any[], U> = U extends T ? unknown  extends U ? never : K : T;
type Demo = PickFromArray<['a','b','c'], 'a' | 'b'>;

type Case = [
    Expect<Equal<PickFromArray<['a','b','c'], 'a' | 'b'>, 'c'>>,
]