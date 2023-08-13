import { Edge } from "./Edge.js"

export type NodeConnection = {
  edge: Edge
  node: Node
}

export type Node = {
  name: string
  connections: Array<NodeConnection>
}
