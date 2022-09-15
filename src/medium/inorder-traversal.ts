/*
 * @Description: inorder-Traversal
 * @href: https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md
 * @Author: mario.ma
 * @Date: 2022-09-16 00:33:31
 * @tags: ['object']
 */

// Implement the type version of binary tree inorder traversal.

/* _____________ Your Code Here _____________ */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? [...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []), T['val'], ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : [])] : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]