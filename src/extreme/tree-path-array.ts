/*
 * @Description: Tree path array
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/15260-hard-tree-path-array/README.md
 * @Author: mario.ma
 * @Date: 2022-11-08 19:03:46
 * @tags: ['']
 */

// Create a type Path that represents validates a possible path of a tree under the form of an array.

/* _____________ Your Code Here _____________ */

type Path<T extends Record<PropertyKey, unknown>, Result extends any[] = [], K extends keyof T = keyof T> =  K extends keyof T
                                                                                            ? [...Result, K] | (T[K] extends Record<PropertyKey, unknown> 
                                                                                                                        ? Path<T[K], [...Result, K]> 
                                                                                                                        : never)
                                                                                            : never;


/* _____________ Test Cases _____________ */
import type { ExpectExtends, ExpectFalse, ExpectTrue } from '@type-challenges/utils'

declare const example: {
  foo: {
    bar: {
      a: string
    }
    baz: {
      b: number
      c: number
    }
  }
}

type cases = [
  ExpectTrue<ExpectExtends<Path<typeof example['foo']['bar']>, ['a']>>,
  ExpectTrue<ExpectExtends<Path<typeof example['foo']['baz']>, ['b'] | ['c'] >>,
  ExpectTrue<ExpectExtends<Path<typeof example['foo']>, ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']>>,
  ExpectFalse<ExpectExtends<Path<typeof example['foo']['bar']>, ['z']>>,
]