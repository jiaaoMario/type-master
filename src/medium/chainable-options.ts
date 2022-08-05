/*
 * @Description: Chainable Options
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md
 * @Author: mario.ma
 * @Date: 2022-08-05 12:55:34
 * @tags: ["Application"]
 */

// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). 
// In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

/* _____________ Your Code Here _____________ */
type Chainable<T = {}> = {
  option: <K extends string, P extends any>(key: K extends keyof T 
      ? P extends T[K]
      ? never : K
      : K
    , value: P) => Chainable<Omit<T, K> & Record<K, P>>;
  get: () => T;
}

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}