/*
 * @Description: String to Union
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
 * @Author: mario.ma
 * @Date: 2022-08-23 13:01:18
 * @tags: ['union','string']
 */

// Implement the String to Union type. Type take string argument. The output should be a union of input letters

/* _____________ Your Code Here _____________ */

type StringToUnion<T extends string> = T extends `${infer U}${infer R}` ? U | StringToUnion<R> : never;

type A = StringToUnion<'hello'>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]