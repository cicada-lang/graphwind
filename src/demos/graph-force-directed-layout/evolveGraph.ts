import { Graph, Node } from "../../graph/Graph"
import { graphNodeNeighborsOrFail } from "../../graph/graphNodeNeighborsOrFail"
import { graphNodes } from "../../graph/graphNodes"
import { GraphLayout } from "./GraphLayout"

export function evolveGraph(
  graph: Graph,
  layout: GraphLayout,
  options: {
    step: number
  },
): void {
  const { step } = options

  const coolingFactor = 0.999

  const forces = totalForces(graph, layout)

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue
    const force = forces.get(node)
    if (force === undefined) continue

    position[0] += force[0] * coolingFactor ** step
    position[1] += force[1] * coolingFactor ** step
  }
}

export function totalForces(
  graph: Graph,
  layout: GraphLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue

    const neighbors = graphNodeNeighborsOrFail(graph, node)
    for (const neighbor of neighbors) {
      if (neighbor !== node) {
        const neighborPosition = layout.nodePositions.get(neighbor)
        if (neighborPosition === undefined) continue

        const force = totalForce(position, neighborPosition)
        forces.set(node, force)
      }
    }
  }

  return forces
}

export function totalForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const e = electronicForce(first, second)
  const s = springForces(first, second)

  return [e[0] + s[0], e[1] + s[1]]
}

export function electronicForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 200

  const deltaX = second[0] - first[0]
  const deltaY = second[1] - first[1]
  const distanceSqared = deltaX ** 2 + deltaY ** 2

  const forceX = -(C / distanceSqared) * deltaX
  const forceY = -(C / distanceSqared) * deltaY

  if (isNaN(forceX) || isNaN(forceY)) {
    return [0, 0]
  }

  return [forceX, forceY]
}

export function springForces(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 1 / 200
  const springLength = 50

  const deltaX = second[0] - first[0]
  const deltaY = second[1] - first[1]
  const distanceSqared = deltaX ** 2 + deltaY ** 2
  const distance = Math.sqrt(distanceSqared)

  const factor = Math.log(Math.abs(distance / springLength))

  const forceX = C * factor * deltaX
  const forceY = C * factor * deltaY

  if (isNaN(forceX) || isNaN(forceY)) {
    return [0, 0]
  }

  return [forceX, forceY]
}
