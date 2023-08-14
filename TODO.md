# tree

# binary-tree-inorder-grid-layout

setup demo binary-tree-inorder-grid-layout

State

cellSize

layeredLayout(tree): Map<string, {x: number, y: number}>

# graph-force-directed-layout

simple spring

# tree-layered-layout

# tree-horizontal-vertical-layout

# tree-radial-layout

# graph

createGraphFromIncidenceRelation

# flow-field-effect

[bug] why update `ctx.strokeStyle` during window `resize` will make the color brighter?

light mode use tailwind color

refactor flow-field-effect

# build

should use `.ts` file extension and use esbuild

esbuild app.jsx --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16

npx esbuild src/demos/flow-field-effect/main.ts --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16 --outfile=build/flow-field-effect.js
