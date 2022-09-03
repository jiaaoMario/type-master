/*
 * @Description: Percentage Parser
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md
 * @Author: mario.ma
 * @Date: 2022-09-03 23:53:20
 * @tags: ['utils']
 */

// Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.

// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.

/* _____________ Your Code Here _____________ */

type Preview = '+' | '-' | '*'

type PercentageParser<A extends string, P extends string = '', M extends string = '', S extends string = ''> 
    = A extends `${infer K}${infer U}` ? K extends Preview ? PercentageParser<U, K, M, S> : K extends '%' ? PercentageParser<U, P, M, K> : PercentageParser<U, P, `${M}${K}`, S> : [P, M, S];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]

