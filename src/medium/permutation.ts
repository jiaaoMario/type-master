/*
 * @Description: Permutation
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
 * @Author: mario.ma
 * @Date: 2022-08-15 19:19:07
 * @tags: ["union"]
 */

// Implement permutation type that transforms union types into the array that includes permutations of unions.

/* _____________ Your Code Here _____________ */

type Member = 'A';
type UnionToArray<T> = T extends any ? [T] : never; 
type Step1 = UnionToArray<Member>;  // ['A'] | ['B'] | ['C']

type Dec<T, U = T> = T extends any ? [T, Dec<Exclude<U, T>>] : never;
type Step2 = Dec<Step1>;  // [["A"], [["B"], [["C"], never]] | [["C"], [["B"], never]]] | [["B"], [["A"], [["C"], never]] | [["C"], [["A"], never]]] | [["C"], [["A"], [["B"], never]] | [[...], [["A"], never]]]

type Expand<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Expand<Exclude<U, T>>] : never;
type Step3 = Expand<Step2>;


type Permutation<T> = Expand<T>

type Test = Permutation<never>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>,
]