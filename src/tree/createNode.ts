import { Node } from "./Node.ts"

export function createNode(
  id: string,
  parent?: Node,
  children?: Array<Node>,
): Node {
  return {
    id,
    parent,
    children: children || [],
  }
}
