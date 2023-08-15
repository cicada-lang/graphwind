import { Graph, Node } from "../../graph/Graph"
import { graphNodeNeighborsOrFail } from "../../graph/graphNodeNeighborsOrFail"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { springForce } from "./springForce"

export function graphSpringForces(
  graph: Graph,
  layout: GraphLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    for (const neighbor of graphNodeNeighborsOrFail(graph, node)) {
      if (neighbor !== node) {
        const neighborPosition = layout.nodePositions.get(neighbor)
        if (neighborPosition === undefined) continue

        const force = springForce(position, neighborPosition)
        forces.set(node, force)
      }
    }
  }

  return forces
}
