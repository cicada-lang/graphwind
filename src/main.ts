import { FlowFieldEffect } from "./FlowFieldEffect.js"

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const mouse = {
    x: 0,
    y: 0,
  }

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  let flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height, mouse)
  flowField.animate()

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField.width = canvas.width
    flowField.height = canvas.height
  })
}
