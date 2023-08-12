export type State = {
  width: number
  height: number

  mouse: {
    x: number
    y: number
  }

  // Faster FPS will be slow to 60 FPS.
  // Slower FPS will be run as fast as possible.
  lastTime: number
  interval: number
  timer: number

  cellSize: number

  // About the curve of the field.
  radius: number
  radiusVelocity: number
  radiusLimit: number

  zoom: number
}
