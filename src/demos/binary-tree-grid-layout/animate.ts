import { createTree } from "../../tree/createTree.js"
import { State } from "./State.js"
import { treeLayout } from "./treeLayout.js"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  for (let x = 0; x < state.width; x += state.unit) {
    for (let y = 0; y < state.height; y += state.unit) {
      ctx.strokeStyle = "hsl(240, 90%, 50%)"
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + state.unit, y)
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + state.unit)
      ctx.stroke()
    }
  }

  const tree = createTree({
    id: "a",
    children: [
      { id: "b", children: [{ id: "d" }, { id: "e" }] },
      {
        id: "c",
        children: [
          { id: "f", children: [{ id: "h" }, { id: "i" }] },
          { id: "g", children: [{ id: "j" }] },
        ],
      },
    ],
  })

  const layout = treeLayout(tree)

  const offset = [state.unit * 3, state.unit * 3]

  for (const edge of layout.edges) {
    const first = layout.nodes.get(edge.first.id)
    if (first === undefined) continue
    const second = layout.nodes.get(edge.second.id)
    if (second === undefined) continue

    ctx.strokeStyle = "hsl(240, 90%, 0%)"
    ctx.lineWidth = 1.5

    ctx.beginPath()
    ctx.moveTo(
      offset[0] + first.x * state.unit,
      offset[1] + first.y * state.unit,
    )
    ctx.lineTo(
      offset[0] + second.x * state.unit,
      offset[1] + second.y * state.unit,
    )
    ctx.stroke()
  }

  for (const [name, { x, y }] of layout.nodes) {
    ctx.strokeStyle = "hsl(240, 90%, 50%)"
    ctx.lineWidth = 2

    ctx.beginPath()
    ctx.clearRect(
      offset[0] + x * state.unit - 30 / 2,
      offset[1] + y * state.unit - 20 / 2,
      30,
      20,
    )
    ctx.roundRect(
      offset[0] + x * state.unit - 30 / 2,
      offset[1] + y * state.unit - 20 / 2,
      30,
      20,
      5,
    )
    ctx.stroke()
  }

  requestAnimationFrame(() => animate(ctx, state))
}
