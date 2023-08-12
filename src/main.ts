import { FlowFieldEffect } from "./FlowFieldEffect.js"

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth - 1
  canvas.height = window.innerHeight - 1

  const mouse = {
    x: 0,
    y: 0,
  }

  let flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height, mouse)
  flowField.animate()

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height, mouse)
    flowField.animate()
  })
}
