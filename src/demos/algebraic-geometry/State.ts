import { Mouse } from "./Mouse.ts"
import { Formula } from "./components/Formula.ts"
import { Entity } from "./entity"

export type State = {
  width: number
  height: number
  mouse: Mouse
  unit: number
  entities: Map<string, Entity>
  formulas: Map<string, Formula>
}
