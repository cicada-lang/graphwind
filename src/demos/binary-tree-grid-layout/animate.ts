import colors from "tailwindcss/colors"
import { createTree } from "../../tree/createTree.js"
import { State } from "./State.js"
import { treeLayout } from "./treeLayout.js"

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.width, state.height)

  for (let x = 0; x < state.width; x += state.unit) {
    for (let y = 0; y < state.height; y += state.unit) {
      ctx.strokeStyle = colors.stone[500]
      ctx.lineWidth = 0.3
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

    ctx.strokeStyle = "black"
    ctx.lineWidth = 1

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
    const boxWidth = 40
    const boxHeight = 30

    ctx.strokeStyle = colors.sky[600]
    ctx.lineWidth = 2

    ctx.beginPath()
    ctx.clearRect(
      offset[0] + x * state.unit - boxWidth / 2,
      offset[1] + y * state.unit - boxHeight / 2,
      boxWidth,
      boxHeight,
    )
    ctx.roundRect(
      offset[0] + x * state.unit - boxWidth / 2,
      offset[1] + y * state.unit - boxHeight / 2,
      boxWidth,
      boxHeight,
      4,
    )
    ctx.stroke()

    ctx.font = "20px sans-serif"
    ctx.textBaseline = "middle"
    ctx.textAlign = "center"
    ctx.fillText(name, offset[0] + x * state.unit, offset[1] + y * state.unit)
  }

  requestAnimationFrame(() => animate(ctx, state))
}
