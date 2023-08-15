import { Graph } from "../../graph/Graph"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"
import { graphElectronicForces } from "./graphElectronicForces"
import { graphSpringForces } from "./graphSpringForces"

export function evolveGraph(
  graph: Graph,
  layout: GraphLayout,
  options: {
    step: number
  },
): void {
  const { step } = options

  const coolingFactor = 0.999

  const springForces = graphSpringForces(graph, layout)
  const electronicForces = graphElectronicForces(graph, layout)

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    const springForce = springForces.get(node)
    if (springForce) {
      position[0] += springForce[0] * coolingFactor ** step
      position[1] += springForce[1] * coolingFactor ** step
    }

    const electronicForce = electronicForces.get(node)
    if (electronicForce) {
      position[0] += electronicForce[0] * coolingFactor ** step
      position[1] += electronicForce[1] * coolingFactor ** step
    }
  }
}
