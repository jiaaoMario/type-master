/*
 * @Description: Run-length encoding
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/14188-hard-run-length-encoding/README.md
 * @Author: mario.ma
 * @Date: 2022-10-26 22:30:14
 * @tags: ['utils']
 */

// Given a string sequence of a letters f.e. AAABCCXXXXXXY. Return run-length encoded string 3AB2C6XY. Also make a decoder for that string.

/* _____________ Your Code Here _____________ */

type En = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N'
          | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'L' | 'M' | 'N';

type Trans<T extends string, S extends string = '', Cache extends unknown[] = []> = T extends `${infer R}${infer U}`
                                                                                        ? Trans<U, R, [...Cache, unknown]>
                                                                                        : `${Cache['length']}${S}`;

type isSame<S extends string, R extends string> = R extends `${infer J}${infer _U}` 
                                                    ? J extends S ? true : false
                                                    : R extends S ? true : false
namespace RLE {
  export type Encode<S extends string, Pre extends string = '', Result extends string = ''> = S extends `${infer R}${infer U}${infer K}`
                                                                                                ? R extends U 
                                                                                                    ? RLE.Encode<K, `${R}${U}`, Result>
                                                                                                    : isSame<R, Pre> extends true 
                                                                                                                        ? RLE.Encode<`${U}${K}`, R, `${Result}${Trans<`${Pre}${R}`>}`>
                                                                                                                        : RLE.Encode<`${U}${K}`, R, `${Result}${R}`>
                                                                                                : isSame<S, Pre> extends true 
                                                                                                                    ? `${Result}${Trans<`${Pre}${S}`>}`
                                                                                                                    : `${Result}${S}`
  export type Decode<S extends string> = any
}

type A = RLE.Encode<'AAABCCXXXXXXY'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>,
]