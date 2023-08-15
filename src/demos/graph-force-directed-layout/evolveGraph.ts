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

  const springForces = springField(graph, layout)
  const electronicForces = electronicField(graph, layout)

  for (const node of graphNodes(graph)) {
    const position = layout.nodePositions.get(node)
    if (position === undefined) continue
    const springForce = springForces.get(node)
    if (springForce === undefined) continue

    position[0] += springForce[0] * coolingFactor ** step
    position[1] += springForce[1] * coolingFactor ** step

    const electronicForce = electronicForces.get(node)
    if (electronicForce === undefined) continue

    position[0] += electronicForce[0] * coolingFactor ** step
    position[1] += electronicForce[1] * coolingFactor ** step
  }
}

export function electronicField(
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

export function electronicForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 1000

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

export function springField(
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

export function springForce(
  first: [number, number],
  second: [number, number],
): [number, number] {
  const C = 1 / 200
  const springLength = 100

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
