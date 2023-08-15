import { Node } from "../../tree/Node.ts"
import { depth } from "../../tree/depth.ts"
import { traversalInorder } from "../../tree/traversalInorder.ts"
import { traversalPostorder } from "../../tree/traversalPostorder.ts"
import { traversalPreorder } from "../../tree/traversalPreorder.ts"
import { treeEdges } from "../../tree/treeEdges.ts"
import { generatorEntries } from "../../utils/generatorEntries.ts"

export type NodeLayout = {
  x: number
  y: number
}

export type TreeLayout = {
  nodes: Map<string, NodeLayout>
  edges: Array<{ first: Node; second: Node }>
}

export type TraversalMode = "inorder" | "preorder" | "postorder"

function traversal(tree: Node, mode: TraversalMode) {
  switch (mode) {
    case "inorder": {
      return traversalInorder(tree)
    }

    case "preorder": {
      return traversalPreorder(tree)
    }

    case "postorder": {
      return traversalPostorder(tree)
    }
  }
}

export function layoutTree(
  tree: Node,
  options: {
    mode: TraversalMode
  },
): TreeLayout {
  const { mode } = options

  const nodes = new Map()

  for (const [index, node] of generatorEntries(traversal(tree, mode))) {
    nodes.set(node.id, {
      x: index,
      y: depth(node),
    })
  }

  return {
    nodes,
    edges: treeEdges(tree),
  }
}
