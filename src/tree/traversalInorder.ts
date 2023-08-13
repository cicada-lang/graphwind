import { Node } from "./Node.js"

// node, first, second

export function* traversalInorder(node: Node): Generator<Node> {
  yield node

  for (const child of node.children) {
    for (const node of traversalInorder(child)) {
      yield node
    }
  }
}
