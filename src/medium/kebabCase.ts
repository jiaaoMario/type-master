/*
 * @Description: KebabCase
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
 * @Author: mario.ma
 * @Date: 2022-08-25 12:47:32
 * @tags: [template-literal]
 */

// FooBarBaz -> foo-bar-baz

/* _____________ Your Code Here _____________ */

type TransHelper<S extends string> = S extends Lowercase<S> ? S : `-${Lowercase<S>}`;

type Transform<S extends string> = S extends `${infer R}${infer U}` ? `${TransHelper<R>}${Transform<U>}` : S;

type Remove<S extends string> = S extends '-' ? '-' : S extends `-${infer R}` ? R : S;

type KebabCase<S extends string> = Remove<Transform<S>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]