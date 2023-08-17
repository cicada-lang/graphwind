import { State } from "./State"
import { Camera } from "./camera"

export function renderCoordinate(
  ctx: CanvasRenderingContext2D,
  state: State,
  camera: Camera,
): void {
  ctx.save()
  ctx.translate(state.canvas.width / 2, state.canvas.height / 2)
  ctx.scale(1, -1)
  ctx.translate(
    -camera.position[0] * camera.unit,
    -camera.position[1] * camera.unit,
  )
  ctx.strokeStyle = "hsla(240, 100%, 50%, 50%)"
  ctx.lineWidth = 1

  const left = -state.canvas.width / 2 - camera.position[0] * camera.unit
  const right = state.canvas.width / 2 + camera.position[0] * camera.unit

  for (let x = left; x * camera.unit < right; x += 1) {
    ctx.beginPath()
    ctx.moveTo(x * camera.unit, 0)
    ctx.lineTo((x + 1) * camera.unit, 0)
    ctx.moveTo(x * camera.unit, 0)
    ctx.lineTo(x * camera.unit, 8)
    ctx.stroke()
  }

  const bottom = -state.canvas.width / 2 - camera.position[1] * camera.unit
  const up = state.canvas.width / 2 + camera.position[1] * camera.unit

  for (let y = bottom; y * camera.unit < up; y += 1) {
    ctx.beginPath()
    ctx.moveTo(0, y * camera.unit)
    ctx.lineTo(0, (y + 1) * camera.unit)
    ctx.moveTo(0, y * camera.unit)
    ctx.lineTo(8, y * camera.unit)
    ctx.stroke()
  }

  ctx.restore()
}
