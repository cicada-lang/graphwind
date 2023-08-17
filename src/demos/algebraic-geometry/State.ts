import { Mouse } from "./Mouse.ts"
import { Formula } from "./components/Formula.ts"
import { Entity } from "./entity"

export type State = {
  canvas: HTMLCanvasElement
  mouse: Mouse
  entities: Map<string, Entity>
  formulas: Map<string, Formula>
}
