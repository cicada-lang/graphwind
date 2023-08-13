import { Node } from "./Node.js"

export function depth(node: Node): number {
  let depth = 0
  while (node.parent) {
    depth++
    node = node.parent
  }

  return depth
}
