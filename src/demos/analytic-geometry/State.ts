import { Camera } from "./camera/Camera"
import { Formula } from "./formula/Formula"
import { Id } from "./id/Id"
import { Motion } from "./motion/Motion"
import { Mouse } from "./mouse/Mouse"

export type State = {
  canvas: HTMLCanvasElement
  camera: Camera
  mouse: Mouse
  idCounter: number
  formulas: Map<Id, Formula>
  motions: Map<Id, Motion>
}
