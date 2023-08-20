import { Vector } from "."

export function vectorDistance(x: Vector, y: Vector): number {
  if (x.length !== y.length) {
    throw new Error(
      [
        `[vectorAdd] Vector length mismatch.`,
        ``,
        `  x.length: ${x.length}`,
        `  y.length: ${y.length}`,
      ].join("\n"),
    )
  }

  let distanceSquared = 0
  for (let i = 0; i < x.length; i++) {
    distanceSquared += x[i] ** 2 + y[i] ** 2
  }

  return Math.sqrt(distanceSquared)
}
