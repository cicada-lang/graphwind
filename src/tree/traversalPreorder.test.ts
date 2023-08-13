import { createTree } from "./createTree.js"
import { traversalPreorder } from "./traversalPreorder.js"

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

console.log(Array.from(traversalPreorder(tree)).map((node) => node.name))
