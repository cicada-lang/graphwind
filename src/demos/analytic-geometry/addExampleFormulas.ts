import { Formula } from "./components/Formula"

export function addExampleFormulas(formulas: Map<string, Formula>) {
  formulas.set("1", {
    f: Math.sin,
    precision: 0.01,
  })

  formulas.set("2", {
    f: (x) => x ** 2,
    precision: 0.01,
  })

  formulas.set("3", {
    f: (x) => x ** 1 + Math.sin(x),
    precision: 0.01,
  })

  formulas.set("4", {
    f: (x) => x * Math.sin(x),
    precision: 0.01,
  })
}
