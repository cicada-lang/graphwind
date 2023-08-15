# binary-tree-grid-layout

use tailwind color

show preorder and postorder

# graph-force-directed-layout

# tree-layered-layout

# tree-horizontal-vertical-layout

# tree-radial-layout

# flow-field-effect

[bug] why update `ctx.strokeStyle` during window `resize` will make the color brighter?

light mode use tailwind color

refactor flow-field-effect

# build

use `.ts` file extension in `src/` and use esbuild

```
npx esbuild src/demos/flow-field-effect/main.ts --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16 --outfile=build/flow-field-effect.js
```
