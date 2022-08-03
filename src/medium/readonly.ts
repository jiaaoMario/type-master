/*
 * @Description: ReadOnly
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
 * @Author: mario.ma
 * @Date: 2022-08-03 13:09:45
 * @tags: ["built-in"]
 */
// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

/* _____________ Your Code Here _____________ */

type OmitSelf<T, K> = K extends T ? never : K;

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [key in K]: T[key];
} & {
    [R in OmitSelf<K, keyof T>]: T[R];
}

type Test = OmitSelf<keyof Todo1, 'title' | 'description'>;
type Test2 = MyReadonly2<Todo1>;
/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}