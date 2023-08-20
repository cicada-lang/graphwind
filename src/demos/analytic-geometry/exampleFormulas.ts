import colors from "tailwindcss/colors"
import { Id } from "./id/Id"
import { Formula } from "./formula/Formula"

export function exampleFormulas(): Map<Id, Formula> {
  const formulas: Map<Id, Formula> = new Map()

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
