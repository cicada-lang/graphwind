import colors from "tailwindcss/colors"
import { State } from "./State"
import { createMotion } from "./motion/createMotion"

export function createExampleMotions(state: State): void {
  createMotion(state, {
    name: "circle",
    x: (t) => Math.sin(t),
    y: (t) => Math.cos(t),
    range: [0, Math.PI * 2],
    precision: 0.01,
    color: colors.orange[400],
  })
}
