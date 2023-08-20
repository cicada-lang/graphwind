import { Mouse } from "./Mouse"
import { Camera } from "./camera/Camera"
import { Formula } from "./formula/Formula"

export type State = {
  canvas: HTMLCanvasElement
  camera: Camera
  mouse: Mouse
  formulas: Map<string, Formula>
}
