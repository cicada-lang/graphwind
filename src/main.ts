import { FlowFieldEffect } from "./FlowFieldEffect"

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)

  ctx.fillStyle = "red"
  ctx.fillRect(30, 30, 50, 50)
}
