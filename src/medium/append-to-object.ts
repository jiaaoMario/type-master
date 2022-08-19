/*
 * @Description: Append to object
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md
 * @Author: mario.ma
 * @Date: 2022-08-19 12:45:22
 * @tags: [object-keys]
 */

// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

/* _____________ Your Code Here _____________ */

type AppendToObject<T, U extends string, V extends any> = {
    [K in [U, keyof T][number]]: K extends keyof T ? T[K] : V;
}


type A = AppendToObject<test1, 'home', boolean>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]