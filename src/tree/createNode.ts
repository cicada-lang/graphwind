import { Node } from "./Node.js"

export function createNode(
  name: string,
  parent?: Node,
  children?: Array<Node>,
): Node {
  return {
    name,
    parent,
    children: children || [],
  }
}
