/*
 * @Description: Split
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/02822-hard-split/README.md
 * @Author: mario.ma
 * @Date: 2022-10-14 00:28:30
 * @tags: ["string", "split", "array", "tuple"]
 */

// The well known split() method splits a string into an array of substrings by looking for a separator, and returns the new array. 
// The goal of this challenge is to split a string, by using a separator, but in the type system!

/* _____________ Your Code Here _____________ */

type Split<S extends string, SEP extends string, Result extends string[] = []> = SEP extends ''
                                                                                        ? S extends `${infer R}${infer U}`
                                                                                            ? Split<U, SEP, [...Result, R]>
                                                                                            : Result
                                                                                        : SEP extends S
                                                                                                ? S[]
                                                                                                : S extends `${infer R}${SEP}${infer U}`
                                                                                                    ? Split<U, SEP, [...Result, R]>
                                                                                                    : [...Result, S];

type tes = Split<'', 'z'>
type tes2 = Split<string, 'whatever'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]
