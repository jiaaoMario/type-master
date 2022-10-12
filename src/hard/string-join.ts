/*
 * @Description: String Join
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00847-hard-string-join/README.md
 * @Author: mario.ma
 * @Date: 2022-10-12 12:28:24
 * @tags: []
 */

// Create a type-safe string join utility which can be used like so:
// const hyphenJoiner = join('-')
// const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
// Or alternatively:
// join('#')('a', 'b', 'c') // = 'a#b#c'
// When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e:
// join('')('a', 'b', 'c') // = 'abc'
// When only one item is passed, we should get back the original item (without any delimiter added):
// join('-')('a') // = 'a'

type JoinString<Args extends string[] = [], D extends string = '', Result extends string = ''> = Args extends [infer R, ...infer U]
                                                                                                ? U extends string[]
                                                                                                    ? R extends string 
                                                                                                        ? JoinString<U, D, `${Result extends '' ? `${Result}` : `${Result}${D}`}${R}`>
                                                                                                        : JoinString<U, D, `${Result}`>
                                                                                                    : `${Result}`
                                                                                                : Result

declare function join<T extends string>(delimiter: T): <Arr extends string[]>(...parts: Arr) => JoinString<Arr, T>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// Edge cases
const noCharsOutput = join('-')()
const oneCharOutput = join('-')('a')
const noDelimiterOutput = join('')('a', 'b', 'c')

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c')
const hashOutput = join('#')('a', 'b', 'c')
const twoCharOutput = join('-')('a', 'b')
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')

type cases = [
  Expect<Equal<typeof noCharsOutput, ''>>,
  Expect<Equal<typeof oneCharOutput, 'a'>>,
  Expect<Equal<typeof noDelimiterOutput, 'abc'>>,
  Expect<Equal<typeof twoCharOutput, 'a-b'>>,
  Expect<Equal<typeof hyphenOutput, 'a-b-c'>>,
  Expect<Equal<typeof hashOutput, 'a#b#c'>>,
  Expect<Equal<typeof longOutput, 'a-b-c-d-e-f-g-h'>>,
]