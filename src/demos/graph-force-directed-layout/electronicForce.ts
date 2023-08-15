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
