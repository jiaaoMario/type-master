/*
 * @Description: Typed Get
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00270-hard-typed-get/README.md
 * @Author: mario.ma
 * @Date: 2022-10-10 12:44:01
 * @tags: ["utils", "template-literal"]
 */

// The get function in lodash is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming Template Literal Types feature, properly typing get becomes possible. Can you implement it?

/* _____________ Your Code Here _____________ */

type Split<K extends string = '', Result extends string[] = []> = K extends '' 
                                                                    ? Result
                                                                    : K extends `${infer P}.${infer R}`
                                                                        ? Split<R, [...Result, P]>
                                                                        : [...Result, K];

type PickData<T extends Record<string, any>, Keys extends string[] = []> = Keys extends [infer R, ...infer U]
                                                                            ? R extends keyof T
                                                                                ? U extends []
                                                                                    ? T[R]
                                                                                    : U extends string[]
                                                                                        ? PickData<T[R], U>
                                                                                        : never
                                                                                : never
                                                                            : never

type Get<T extends Record<string, any>, K extends string> = PickData<T, Split<K>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  hello: 'world'
}