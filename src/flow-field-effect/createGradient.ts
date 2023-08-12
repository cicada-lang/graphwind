export function createGradient(
  ctx: CanvasRenderingContext2D,
  options: { width: number; height: number },
): CanvasGradient {
  const gradient = ctx.createLinearGradient(0, 0, options.width, options.height)

  gradient.addColorStop(0.1, "#ff5c33")
  gradient.addColorStop(0.2, "#ff66b3")
  gradient.addColorStop(0.4, "#ccccff")
  gradient.addColorStop(0.6, "#b3ffff")
  gradient.addColorStop(0.8, "#80ff80")
  gradient.addColorStop(0.9, "#ffff33")

  return gradient
}
