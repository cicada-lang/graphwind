export type Node = {
  name: string
  parent: Node
  children: Array<Node>
}

export type Root = {
  name: string
  children: Array<Node>
}
