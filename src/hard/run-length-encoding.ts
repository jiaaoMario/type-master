/*
 * @Description: Run-length encoding
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/14188-hard-run-length-encoding/README.md
 * @Author: mario.ma
 * @Date: 2022-10-26 22:30:14
 * @tags: ['utils']
 */

// Given a string sequence of a letters f.e. AAABCCXXXXXXY. Return run-length encoded string 3AB2C6XY. Also make a decoder for that string.

/* _____________ Your Code Here _____________ */

type Num = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';

type TransToArr<N extends Num, Result extends unknown[] = []> = `${Result['length']}` extends N ? Result : TransToArr<N, [...Result, unknown]>;

type Repeat<N extends unknown[], S extends string, Result extends string = ''> = N extends [infer _R, ...infer U]
                                                                                    ? Repeat<U, S, `${Result}${S}`>
                                                                                    : Result

type Trans<T extends string, S extends string = '', Cache extends unknown[] = []> = T extends `${infer R}${infer U}`
                                                                                        ? Trans<U, R, [...Cache, unknown]>
                                                                                        : `${Cache['length'] extends 1 ? '' : Cache['length']}${S}`;

type isSame<S extends string, R extends string> = R extends '' ? true : R extends `${infer J}${infer _U}` 
                                                    ? J extends S ? true : false
                                                    : R extends S ? true : false
namespace RLE {
  export type Encode<S extends string, Pre extends string = '', Result extends string = ''> = S extends `${infer R}${infer U}${infer K}`
                                                                                                ? Pre extends '' 
                                                                                                        ? RLE.Encode<`${U}${K}`, R, Result>
                                                                                                        : isSame<R, Pre> extends true
                                                                                                                    ? RLE.Encode<`${U}${K}`, `${Pre}${R}`, Result>
                                                                                                                    : RLE.Encode<`${U}${K}`, R, `${Result}${Trans<Pre>}`>
                                                                                                : isSame<S, Pre> extends true ? `${Result}${Trans<`${Pre}${S}`>}`
                                                                                                                                  : `${Result}${Trans<`${Pre}`>}${S}` 
  export type Decode<S extends string, PreNum extends Num | '' = '', Result extends string = ''> = S extends `${infer R}${infer K}`
                                                                                                    ? R extends Num
                                                                                                        ? Decode<K, R, Result>
                                                                                                        : PreNum extends ''
                                                                                                                    ? Decode<K, '', `${Result}${R}`>
                                                                                                                    : PreNum extends Num
                                                                                                                                ? Decode<K, '', `${Result}${Repeat<TransToArr<PreNum>, R>}`>
                                                                                                                                : never
                                                                                                    : Result
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY7Z'>, 'AAABCCXXXXXXYZZZZZZZ'>>,
]