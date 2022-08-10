/*
 * @Description: Type Lookup
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
 * @Author: mario.ma
 * @Date: 2022-08-10 13:38:10
 * @tags: ["union"]
 */
// Sometimes, you may want to lookup for a type in a union to by their attributes.

// In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

/* _____________ Your Code Here _____________ */

type LookUp<U, T> = U extends {
    type: T
} ? U : never;

type LookUpOther<U extends {
    type: any;
}, T> = U extends U ? T extends U['type'] ? U : never : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type Test = keyof Animal;

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
  Expect<Equal<LookUpOther<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUpOther<Animal, 'cat'>, Cat>>,
]