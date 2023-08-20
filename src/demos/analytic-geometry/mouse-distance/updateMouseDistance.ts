import { State } from "../State"
import { Id } from "../id/Id"
import { MouseDistance } from "./MouseDistance"

export function updateMouseDistance(
  state: State,
  id: Id,
  mouseDistance: MouseDistance,
) {
  const found = state.mouseDistances.get(id)
  if (found === undefined) {
    state.mouseDistances.set(id, mouseDistance)
  } else {
    if (found.distance > mouseDistance.distance) {
      state.mouseDistances.set(id, mouseDistance)
    }
  }
}
