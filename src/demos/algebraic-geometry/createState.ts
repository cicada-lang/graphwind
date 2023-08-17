import { Mouse } from "./Mouse.ts"
import { State } from "./State.ts"
import { Formula } from "./components/Formula.ts"

export function createState(
  ctx: CanvasRenderingContext2D,
  options: {
    width: number
    height: number
    mouse: Mouse
  },
): State {
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2

  options.mouse.x = options.width / 2
  options.mouse.y = options.height / 2

  const entities = new Map()
  const formulas: Map<string, Formula> = new Map()

  formulas.set("1", {
    f: Math.sin
  })

  formulas.set("2", {
    f: (x) => x ** 2,
  })


  formulas.set("3", {
    f: (x) => x ** 2 + x ** 3,
  })
  
  return {
    ...options,
    unit: 40,
    entities,
    formulas,
  }
}
