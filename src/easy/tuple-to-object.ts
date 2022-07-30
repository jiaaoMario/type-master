/*
 * @Description: tuple-to-object 
 * @location: https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 * @Author: mario.ma
 * @Date: 2022-07-31 02:07:02
 */

// QA: Give an array, transform into an object type and the key/value must in the given array.

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

type error = TupleToObject<[[1, 2], {}]>