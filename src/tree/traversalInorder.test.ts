import { expect, test } from "vitest"
import { createTree } from "./createTree.js"
import { traversalInorder } from "./traversalInorder.js"

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

test("traversalInorder", () => {
  expect(Array.from(traversalInorder(tree)).map((node) => node.name)).toEqual([
    "d",
    "b",
    "e",
    "a",
    "h",
    "f",
    "i",
    "c",
    "j",
    "g",
  ])
})
