import colors from "tailwindcss/colors"
import { Entity } from "./entity/Entity"
import { Formula } from "./formula/Formula"

export function exampleFormulas(): Map<Entity, Formula> {
  const formulas: Map<Entity, Formula> = new Map()

  formulas.set("1", {
    name: "sin",
    f: (x) => Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  formulas.set("2", {
    name: "x ** 2",
    f: (x) => x ** 2,
    precision: 0.01,
    color: colors.rose[400],
  })

  formulas.set("3", {
    name: "x + sin(x)",
    f: (x) => x + Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  formulas.set("4", {
    name: "x * sin(x)",
    f: (x) => x * Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  return formulas
}
