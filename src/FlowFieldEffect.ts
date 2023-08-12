export class FlowFieldEffect {
  who = "FlowFieldEffect"

  // Faster FPS will be slow to 60 FPS.
  // Slower FPS will be run as fast as possible.
  lastTime = 0
  interval = 1000 / 60
  timer = 0

  cellSize = 15

  constructor(
    public ctx: CanvasRenderingContext2D,
    public width: number,
    public height: number,
    public mouse: { x: number; y: number },
  ) {
    ctx.strokeStyle = "black"
    ctx.lineWidth = 3
    mouse.x = width / 2
    mouse.y = height / 2
    console.log(`[${this.who}] I am created.`)
  }

  drawLineToMouse(x: number, y: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(this.mouse.x, this.mouse.y)
    this.ctx.stroke()
  }

  drawLine(x: number, y: number): void {
    this.drawLineToMouse(x, y)
  }

  animate(currentTime?: number): void {
    currentTime = currentTime || 0
    const deltaTime = currentTime - this.lastTime
    this.lastTime = currentTime

    if (this.timer > this.interval) {
      this.ctx.clearRect(0, 0, this.width, this.height)

      for (let x = this.cellSize; x < this.width; x += this.cellSize) {
        for (let y = this.cellSize; y < this.height; y += this.cellSize) {
          this.drawLine(x, y)
        }
      }

      this.timer = 0
    } else {
      this.timer += deltaTime
    }

    requestAnimationFrame(this.animate.bind(this))
  }
}
