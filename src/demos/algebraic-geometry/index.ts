import { animate } from "./animate.ts"
import { createState } from "./createState.ts"
import { trackMouse } from "./trackMouse.ts"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  const state = createState(canvas)

  state.formulas.set("1", {
    f: Math.sin,
  })

  state.formulas.set("2", {
    f: (x) => x ** 2,
  })

  state.formulas.set("3", {
    f: (x) => x ** 2 + x ** 3,
  })

  trackMouse(state.mouse)
  animate(ctx, state)

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}
