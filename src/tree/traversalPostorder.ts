import { Node } from "./Node.js"

// first, second, ..., node

export function* traversalPostorder(target: Node): Generator<Node> {
  if (target.children.length === 0) {
    yield target
    return
  }

  for (const child of target.children) {
    for (const node of traversalPostorder(child)) {
      yield node
    }
  }

  yield target
}
