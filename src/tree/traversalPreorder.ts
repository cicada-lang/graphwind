import { Node } from "./Node.js"

// node, first, second

export function* traversalPreorder(node: Node): Generator<Node> {
  yield node

  for (const child of node.children) {
    for (const node of traversalPreorder(child)) {
      yield node
    }
  }
}
