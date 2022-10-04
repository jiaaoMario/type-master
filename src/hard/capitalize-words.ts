/*
 * @Description: Capitalize Words
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00112-hard-capitalizewords/README.md
 * @Author: mario.ma
 * @Date: 2022-10-04 17:38:27
 * @tags: ['template-literal', 'need-review']
 */

// Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

/* _____________ Your Code Here _____________ */

type Alphabet = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P'
  | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

type CapitalizeWords<
  S extends string,
  Prev extends string = '',
  Result extends string = ''
> = S extends `${infer F}${infer R}`
  ? Uppercase<Prev> extends Alphabet
    ? CapitalizeWords<R, F, `${Result}${F}`>
    : CapitalizeWords<R, F, `${Result}${Uppercase<F>}`>
  : Result


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]