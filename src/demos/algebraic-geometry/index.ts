import { animate } from "./animate.ts"
import { createState } from "./createState.ts"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const state = createState(canvas, ctx, {
    mouse: {
      x: 0,
      y: 0,
      isDown: false,
    },
  })

  state.formulas.set("1", {
    f: Math.sin,
  })

  state.formulas.set("2", {
    f: (x) => x ** 2,
  })

  state.formulas.set("3", {
    f: (x) => x ** 2 + x ** 3,
  })

  animate(ctx, state)

  window.addEventListener("mousedown", (event) => {
    state.mouse.isDown = true
  })

  window.addEventListener("mouseup", (event) => {
    state.mouse.isDown = false
  })

  window.addEventListener("mousemove", (event) => {
    state.mouse.x = event.x
    state.mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}
