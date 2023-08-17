import { Camera } from "./camera"

export function createCamera(): Camera {
  return {
    position: [0, 0],
    unit: 30,
    diagonal: 500,
  }
}
