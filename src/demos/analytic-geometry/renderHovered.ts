import colors from "tailwindcss/colors"
import { numberOmitAfterFloatPoint } from "../../utils/numberOmitAfterFloatPoint"
import { State } from "./State"
import { adjustCamera } from "./camera/adjustCamera"
import { drawText } from "./drawText"

export function renderHovered(state: State): void {
  if (state.hovered === undefined) {
    return
  }

  state.ctx.save()

  adjustCamera(state.ctx, state.camera)

  state.ctx.beginPath()

  const x = state.hovered.position[0]
  const y = state.hovered.position[1]

  const xText = `x: ${numberOmitAfterFloatPoint(x, 0.001)}`
  const yText = `y: ${numberOmitAfterFloatPoint(y, 0.001)}`

  const xTextMetrics = state.ctx.measureText(xText)
  const yTextMetrics = state.ctx.measureText(yText)

  const boxWidth =
    (Math.max(xTextMetrics.width, yTextMetrics.width) / state.camera.scale) * 3

  const boxHeight = 1.7

  state.ctx.beginPath()
  state.ctx.strokeStyle = colors.rose[400]
  state.ctx.lineWidth = 1 / 10
  state.ctx.strokeRect(x, y, boxWidth, boxHeight)

  state.ctx.fillStyle = "white"
  state.ctx.fillRect(x, y, boxWidth, boxHeight)

  state.ctx.fillStyle = "black"
  drawText(state, xText, [x + 0.1, y + 0.2], { fontScale: 2 })
  drawText(state, yText, [x + 0.1, y + 1], { fontScale: 2 })

  state.ctx.fillStyle = colors.rose[400]
  state.ctx.arc(x, y, 0.2, 0, Math.PI * 2)
  state.ctx.fill()

  state.ctx.restore()
}
