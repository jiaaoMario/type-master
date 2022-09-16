/*
 * @Description: Flip
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
 * @Author: mario.ma
 * @Date: 2022-09-17 01:12:25
 * @tags: ['object']
 */

// Implement the type of just-flip-object.

/* _____________ Your Code Here _____________ */

type Flip<T extends Record<any, any> = {}> = {
    [K in keyof T as T[K] extends boolean ? `${T[K]}` : T[K]]: K;
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]
