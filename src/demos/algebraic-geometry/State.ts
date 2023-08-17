import { Mouse } from "./Mouse.ts"
import { Camera } from "./camera/Camera.ts"
import { Formula } from "./components/Formula.ts"
import { Entity } from "./entity"

export type State = {
  canvas: HTMLCanvasElement
  camera: Camera
  mouse: Mouse
  entities: Map<string, Entity>
  formulas: Map<string, Formula>
}
