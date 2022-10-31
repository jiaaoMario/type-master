/*
 * @Description: Binary to Decimal
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/06141-hard-binary-to-decimal/README.md
 * @Author: mario.ma
 * @Date: 2022-10-31 12:38:27
 * @tags: ['math', 'need-review']
 */

// Implement BinaryToDecimal<S> which takes an exact string type S consisting 0 and 1 and returns an exact number type corresponding with S when S is regarded as a binary. You can assume that the length of S is equal to or less than 8 and S is not empty.

/* _____________ Your Code Here _____________ */

type ToTuple<T extends number, Result extends unknown[] = []> = Result['length'] extends T
                                                                    ? Result
                                                                    : ToTuple<T, [...Result, unknown]>;

type Copy<T extends unknown[] = []> = [...T, ...T];


type BinaryToDecimal<S extends string, Result extends unknown[] = []> = S extends `${infer R extends number}${infer U}`
                                            ? BinaryToDecimal<U, [...Copy<Result>, ...ToTuple<R>]>
                                            : Result['length'];


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]