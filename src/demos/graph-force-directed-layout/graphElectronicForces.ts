import { Graph, Node } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { electronicForce } from "./electronicForce"

export function graphElectronicForces(
  graph: Graph,
  layout: GraphLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    for (const other of graphNodes(graph)) {
      if (other !== node) {
        const otherPosition = layout.nodePositions.get(other)
        if (otherPosition === undefined) continue

        const force = electronicForce(position, otherPosition)
        forces.set(node, force)
      }
    }
  }

  return forces
}
