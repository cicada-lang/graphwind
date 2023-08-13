import { Edge } from "./Edge.js"
import { Node } from "./Node.js"

export function createEdge(first: Node, second: Node): Edge {
  return { first, second }
}
