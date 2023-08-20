import { Camera } from "./Camera"

export function adjustCamera(
  ctx: CanvasRenderingContext2D,
  camera: Camera,
): [number, number] {
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
  ctx.scale(camera.scale, -camera.scale)
  ctx.translate(-camera.position[0], -camera.position[1])
  return [ctx.canvas.width / camera.scale, ctx.canvas.height / camera.scale]
}
