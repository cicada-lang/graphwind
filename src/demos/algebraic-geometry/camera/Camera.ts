export type Camera = {
  position: [number, number]

  unit: number

  // We can not control the width and height of the canvas,
  // thus we specify the diagonal.
  diagonal: number
}
