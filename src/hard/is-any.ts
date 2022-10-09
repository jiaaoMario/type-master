/*
 * @Description: IsAny
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.md
 * @Author: mario.ma
 * @Date: 2022-10-09 12:45:57
 * @tags: ['utils']
 */

// Sometimes it's useful to detect if you have a value with any type. This is especially helpful while working with third-party Typescript modules, which can export any values in the module API. It's also good to know about any when you're suppressing implicitAny checks.
// So, let's write a utility type IsAny<T>, which takes input type T. If T is any, return true, otherwise, return false.

/* _____________ Your Code Here _____________ */

type IsAny<T> = (<S>(S: S) => S extends T ? 1 : 2) extends (<R>(R: R) => R extends any ? 1 : 2) ? true : false; 


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]