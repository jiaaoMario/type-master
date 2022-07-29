/*
 * @Author: mario.ma
 * @Date: 2022-07-29 13:12:11
 */

// For this challenge, you will need to change the following code to make the tests pass (no type check errors).
/* _____________ Your Code Here _____________ */

type HelloWorld = string;


/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils';

type cases = [
    Expect<NotAny<HelloWorld>>,
    Expect<Equal<HelloWorld, string>>,
];
