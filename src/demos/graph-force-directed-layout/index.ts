import { Mouse } from "./Mouse.ts"
import { animate } from "./animate.ts"
import { createState } from "./createState.ts"
import { exampleGraph } from "./exampleGraph.ts"
import { graphLayoutRandom } from "./graphLayoutRandom.ts"

export function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const mouse: Mouse = {
    x: 0,
    y: 0,
    isDown: false,
  }

  const state = createState(ctx, {
    width: canvas.width,
    height: canvas.height,
    mouse,
  })

  const graph = exampleGraph()

  const layout = graphLayoutRandom(graph, {
    limit: {
      width: state.width,
      height: state.height,
    },
  })

  animate(ctx, state, graph, layout)

  window.addEventListener("mousedown", (event) => {
    mouse.isDown = true
  })

  window.addEventListener("mouseup", (event) => {
    mouse.isDown = false
  })

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  window.addEventListener("resize", () => {
    state.width = window.innerWidth
    state.height = window.innerHeight
  })
}
