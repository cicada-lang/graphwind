import { Node, NodeConnection } from "./Node.js"

export function createNode(
  name: string,
  connections?: Array<NodeConnection>,
): Node {
  return {
    name,
    connections: connections || [],
  }
}
