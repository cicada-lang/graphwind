import { FlowFieldEffect } from "./FlowFieldEffect.js"

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  let flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
  flowField.animate()

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.width = canvas.width
    flowField.height = canvas.height
  })
}
