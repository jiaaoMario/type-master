/*
 * @Description: Simple Vue
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md
 * @Author: mario.ma
 * @Date: 2022-09-28 16:03:36
 * @tags: ['this','application', 'vue']
 */

// Implement a simpiled version of a Vue-like typing support.
// By providing a function name SimpleVue (similar to Vue.extend or defineComponent), it should properly infer the this type inside computed and methods.
// In this challenge, we assume that SimpleVue take an Object with data, computed and methods fields as it's only argument,
// data is a simple function that returns an object that exposes the context this, but you won't be accessible to other computed values or methods.
// computed is an Object of functions that take the context as this, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.
// methods is an Object of functions that take the context as this as well. Methods can access the fields exposed by data, computed as well as other methods. The different between computed is that methods exposed as functions as-is.
// The type of SimpleVue's return value can be arbitrary.

/* _____________ Your Code Here _____________ */

type Options<Data, Computed, Methods> = {
    data?: () => Data;
    computed?: Computed & ThisType<{
        [K in keyof Computed]: Computed[K] extends (...args: any) => infer R ? R : never;
    }>;
    methods?: Methods & ThisType<Data & Methods & {
        [K in keyof Computed]: Computed[K] extends (...args: any) => infer R ? R : never;
    }>
}

declare function SimpleVue<Data, Computed, Methods>(options: Options<Data, Computed, Methods>): any


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})