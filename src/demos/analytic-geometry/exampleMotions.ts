import colors from "tailwindcss/colors"
import { Id } from "./entity/Id"
import { Motion } from "./formula/Motion"

export function exampleMotions(): Map<Id, Motion> {
  const motions: Map<Id, Motion> = new Map()

  motions.set("1", {
    name: "sin",
    f: (x) => Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  motions.set("2", {
    name: "x ** 2",
    f: (x) => x ** 2,
    precision: 0.01,
    color: colors.rose[400],
  })

  motions.set("3", {
    name: "x + sin(x)",
    f: (x) => x + Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  motions.set("4", {
    name: "x * sin(x)",
    f: (x) => x * Math.sin(x),
    precision: 0.01,
    color: colors.rose[400],
  })

  return motions
}
