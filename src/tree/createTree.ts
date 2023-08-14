import { Node } from "./Node.js"
import { createNode } from "./createNode.js"

type NodeExp = {
  id: string
  children?: Array<NodeExp>
}

export function createTree(nodeExp: NodeExp): Node {
  const node = createNode(nodeExp.id)
  for (const childExp of nodeExp.children || []) {
    const childNode = createTree(childExp)
    node.children.push(childNode)
    childNode.parent = node
  }

  return node
}
