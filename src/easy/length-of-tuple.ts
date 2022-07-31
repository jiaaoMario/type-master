/*
 * @Description: Length of Tuple
 * @location: https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md#length-of-tuple--
 * @Author: mario.ma
 * @Date: 2022-07-31 23:53:23
 * @tags: ["tuple"]
 */

// For given a tuple, you need create a generic `Length`, pick the length of the tuple

/* _____________ Your Code Here _____________ */

type Length<T> = T extends readonly any[] ? T['length'] : never;

type LengthOther<T> = T extends {
    length: infer L
} ? L : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const
const spaceXWithNumber = ['FALCON 9', 212, 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  Expect<Equal<Length<typeof spaceXWithNumber>, 5>>,
  Length<5>,
  Length<'hello world'>,

  Expect<Equal<LengthOther<typeof tesla>, 4>>,
  Expect<Equal<LengthOther<typeof spaceX>, 5>>,
  Expect<Equal<LengthOther<typeof spaceXWithNumber>, 5>>,
  LengthOther<5>,
  LengthOther<'hello world'>,
]