//Implementation of inorder traversal of given tree type.

// Tree node type
type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

type InOrderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [
      ...InOrderTraversal<T["left"]>,
      T["value"],
      ...InOrderTraversal<T["right"]>
    ]
  : [];

const tree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
} as const;
type InOrder = InOrderTraversal<typeof tree>;
