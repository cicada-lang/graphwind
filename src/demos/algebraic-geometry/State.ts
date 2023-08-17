import { Mouse } from "./Mouse.ts"
import { Entity } from "./entity"

export type State = {
  width: number
  height: number
  mouse: Mouse
  unit: number
  entities: Map<string, Entity>
}
