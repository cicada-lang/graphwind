import { Entity } from "./entity/Entity"
import { Formula } from "./formula/Formula"

export function addExampleFormulas(formulas: Map<Entity, Formula>) {
  formulas.set("1", {
    name: "sin",
    f: (x) => Math.sin(x),
    precision: 0.01,
    color: "hsla(140, 100%, 50%, 100%)",
  })

  formulas.set("2", {
    name: "x ** 2",
    f: (x) => x ** 2,
    precision: 0.01,
    color: "hsla(160, 100%, 50%, 100%)",
  })

  formulas.set("3", {
    name: "x + sin(x)",
    f: (x) => x + Math.sin(x),
    precision: 0.01,
    color: "hsla(180, 100%, 50%, 100%)",
  })

  formulas.set("4", {
    name: "x * sin(x)",
    f: (x) => x * Math.sin(x),
    precision: 0.01,
    color: "hsla(200, 100%, 50%, 100%)",
  })
}
