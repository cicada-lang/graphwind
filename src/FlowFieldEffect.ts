export class FlowFieldEffect {
  who = "FlowFieldEffect"

  angle: number = 0

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
    this.angle += 0.1

    this.ctx.clearRect(0, 0, this.width, this.height)

    this.draw(
      this.width / 2 + Math.sin(this.angle) * 100,
      this.height / 2 + Math.cos(this.angle) * 100,
    )

    requestAnimationFrame(this.animate.bind(this))
  }
}
