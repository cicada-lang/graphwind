import { Formula } from "./components/Formula"

export function addExampleFormulas(formulas: Map<string, Formula>) {
  formulas.set("1", {
    f: Math.sin,
  })

  formulas.set("2", {
    f: (x) => x ** 2,
  })

  formulas.set("3", {
    f: (x) => x ** 2 + x ** 3,
  })
}
