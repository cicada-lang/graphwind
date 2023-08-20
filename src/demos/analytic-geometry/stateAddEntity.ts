import { Entity } from "./entity"
import { State } from "./State"

export function stateAddEntity(state: State, entity: Entity): void {
  state.entities.set(entity.id, entity)
}
