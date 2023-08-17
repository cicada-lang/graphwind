import { Entity } from "../entity/Entity"
import { Stage } from "./Stage"

export function stateAddEntity(stage: Stage, entity: Entity): void {
  stage.entities.set(entity.id, entity)
}
