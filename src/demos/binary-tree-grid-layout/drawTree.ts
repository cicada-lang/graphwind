import colors from "tailwindcss/colors"
import { Node } from "../../tree/Node.ts"
import { State } from "./State.ts"
import { treeLayout } from "./treeLayout.ts"

export function drawTree(
  ctx: CanvasRenderingContext2D,
  state: State,
  tree: Node,
  options: {
    offset: [number, number]
  },
): void {
  const { offset } = options

  const layout = treeLayout(tree)

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
}
