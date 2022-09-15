/*
 * @Description: BEM style string
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md
 * @Author: mario.ma
 * @Date: 2022-09-15 14:18:25
 * @tags: ["template-literal", "union", "tuple"]
 */

// The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.
// For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.
// Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).

/* _____________ Your Code Here _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]