export class FlowFieldEffect {
  who = "FlowFieldEffect"

  x = 0
  y = 0

  constructor(
    public ctx: CanvasRenderingContext2D,
    public width: number,
    public height: number,
  ) {
    console.log(`[${this.who}] I am created.`)
  }

  draw(x: number, y: number): void {
    const length = 200

    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(x + length, y + length)
    this.ctx.stroke()
  }

  animate(): void {
    this.draw(this.x, this.y)

    this.x += 2
    this.y += 0.5

    requestAnimationFrame(this.animate.bind(this))
  }
}
