/*
 * @Description: Assign
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/09160-hard-assign/README.md
 * @Author: mario.ma
 * @Date: 2022-10-15 02:21:37
 * @tags: ['object', 'array']
 */

// You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the Object.assign API)

/* _____________ Your Code Here _____________ */

type SelfMerge<T extends Record<string, any>, R extends Record<string, any>> = {
    [K in (keyof R | keyof T)]: K extends keyof R ? R[K] 
                                    : K extends keyof T 
                                        ? T[K]
                                        : never; 
};

type Assign<T extends Record<string, unknown>, U extends any[], Result extends Record<string, any> = T> = U extends [infer R, ...infer J]
                                                                                    ? R extends Record<string,any> 
                                                                                        ? Assign<T, J, SelfMerge<Result, R>>
                                                                                        : Assign<T, J, Result>
                                                                                    : Result;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// case1
type Case1Target = {}

type Case1Origin1 = {
  a: 'a'
}

type Case1Origin2 = {
  b: 'b'
}

type Case1Origin3 = {
  c: 'c'
}

type Case1Answer = {
  a: 'a'
  b: 'b'
  c: 'c'
}

// case2
type Case2Target = {
  a: [1, 2, 3]
}

type Case2Origin1 = {
  a: {
    a1: 'a1'
  }
}

type Case2Origin2 = {
  b: [2, 3, 3]
}

type Case2Answer = {
  a: {
    a1: 'a1'
  }
  b: [2, 3, 3]
}

// case3

type Case3Target = {
  a: 1
  b: ['b']
}

type Case3Origin1 = {
  a: 2
  b: {
    b: 'b'
  }
  c: 'c1'
}

type Case3Origin2 = {
  a: 3
  c: 'c2'
  d: true
}

type Case3Answer = {
  a: 3
  b: {
    b: 'b'
  }
  c: 'c2'
  d: true
}

// case 4
type Case4Target = {
  a: 1
  b: ['b']
}

type Case4Answer = {
  a: 1
  b: ['b']
}

type cases = [
  Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
  Expect<Equal<Assign<Case2Target, [Case2Origin1, Case2Origin2]>, Case2Answer>>,
  Expect<Equal<Assign<Case3Target, [Case3Origin1, Case3Origin2]>, Case3Answer>>,
  Expect<Equal<Assign<Case4Target, ['', 0]>, Case4Answer>>,
]