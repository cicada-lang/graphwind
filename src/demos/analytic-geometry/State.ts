import { Camera } from "./camera/Camera"
import { Id } from "./entity/Id"
import { Formula } from "./formula/Formula"
import { Mouse } from "./mouse/Mouse"

export type State = {
  canvas: HTMLCanvasElement
  camera: Camera
  mouse: Mouse
  formulas: Map<Id, Formula>
}
