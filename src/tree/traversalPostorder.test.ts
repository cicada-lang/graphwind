import { expect, test } from "vitest"
import { createTree } from "./createTree.js"
import { traversalPostorder } from "./traversalPostorder.js"

const tree = createTree({
  name: "a",
  children: [
    { name: "b", children: [{ name: "d" }, { name: "e" }] },
    {
      name: "c",
      children: [
        { name: "f", children: [{ name: "h" }, { name: "i" }] },
        { name: "g", children: [{ name: "j" }] },
      ],
    },
  ],
})

test("traversalPostorder", () => {
  expect(Array.from(traversalPostorder(tree)).map((node) => node.name)).toEqual(
    ["d", "e", "b", "h", "i", "f", "j", "g", "c", "a"],
  )
})
