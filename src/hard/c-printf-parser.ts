/*
 * @Description: C-printf Parser
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/README.md
 * @Author: mario.ma
 * @Date: 2022-10-08 19:24:31
 * @tags: ['']
 */

// There is a function in C language: printf. This function allows us to print something with formatting. Like this:

// printf("The result is %d.", 42);
// This challenge requires you to parse the input string and extract the format placeholders like %d and %f. For example, if the input string is "The result is %d.", the parsed result is a tuple ['dec'].

/* _____________ Your Code Here _____________ */

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<T extends string, Result extends string[] = []> = T extends `${infer S}${infer J}`
                                                                            ? S extends '%'
                                                                                ? J extends `${infer Q}${infer K}`
                                                                                    ? Q extends keyof ControlsMap
                                                                                         ? ParsePrintFormat<K, [...Result, ControlsMap[Q]]>
                                                                                         : ParsePrintFormat<K, Result>
                                                                                    : Result
                                                                                : ParsePrintFormat<J, Result>
                                                                            : Result;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]