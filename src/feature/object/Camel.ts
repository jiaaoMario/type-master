/*
 * @Description: Camel
 * @Author: mario.ma
 * @Date: 2022-09-18 00:39:18
 */

/* _____________ Your Code Here _____________ */

type TransCamelKey<T extends string, D extends string = ''> = T extends `${infer R}${infer P}${infer S}` 
                                                        ? R extends '_' ? TransCamelKey<`${Uppercase<P>}${S}`, D> : TransCamelKey<`${P}${S}`, `${D}${R}`>
                                                        : T extends `${infer R}${infer P}` ? R extends '_' ? `${D}${Uppercase<P>}` : `${D}${T}` : D; 

type CamelPropertyKey<T extends Record<PropertyKey, any> = {}> = {
    [K in keyof T as (K extends string ? `${TransCamelKey<K>}` : K)]: T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Basic = {
    typeName: 'camel',
    version: 1,
    error_property: true
}

type ExpectBasic = {
    typeName: 'camel',
    version: 1,
    errorProperty: true
}

type cases = [
    Expect<Equal<CamelPropertyKey<Basic>, ExpectBasic>>,
    Expect<Equal<CamelPropertyKey<{}>, {}>>
]