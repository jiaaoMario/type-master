/*
 * @Description: ClassPublicKeys
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02828-hard-classpublickeys/README.md
 * @Author: mario.ma
 * @Date: 2022-10-20 12:46:41
 * @tags: ['utils']
 */

// Implement the generic ClassPublicKeys<T> which returns all public keys of a class.

/* _____________ Your Code Here _____________ */

type ClassPublicKeys<T> = keyof T;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>,
]