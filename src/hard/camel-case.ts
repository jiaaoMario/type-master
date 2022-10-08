/*
 * @Description: CamelCase
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md
 * @Author: mario.ma
 * @Date: 2022-10-08 12:36:33
 * @tags: ['template-literal']
 */

// Implement CamelCase<T> which converts snake_case string to camelCase.

/* _____________ Your Code Here _____________ */

type CamelCase<S extends string, Result extends string = ''> = Lowercase<S> extends `${infer R}${infer U}`
                                                                    ? U extends `_${infer K}${infer Q}`
                                                                        ? CamelCase<Q, `${Result}${R}${Uppercase<K>}`>
                                                                        : CamelCase<U, `${Result}${R}`>
                                                                    : Result;
                                                        
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]