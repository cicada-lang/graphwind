import { Camera } from "./camera/Camera"
import { Entity } from "./entity/Entity"
import { Formula } from "./formula/Formula"
import { Mouse } from "./mouse/Mouse"

export type State = {
  canvas: HTMLCanvasElement
  camera: Camera
  mouse: Mouse
  formulas: Map<Entity, Formula>
}
