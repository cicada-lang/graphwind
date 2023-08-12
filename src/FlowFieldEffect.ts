export class FlowFieldEffect {
  who = "FlowFieldEffect"

  // Faster FPS will be slow to 60 FPS.
  // Slower FPS will be run as fast as possible.
  lastTime = 0
  interval = 1000 / 60
  timer = 0

  cellSize = 10
  gradient: CanvasGradient
  radius = 0
  radiusVelocity = 0.03

  constructor(
    public ctx: CanvasRenderingContext2D,
    public width: number,
    public height: number,
    public mouse: { x: number; y: number },
  ) {
    ctx.strokeStyle = "black"
    ctx.lineWidth = 0.5

    mouse.x = width / 2
    mouse.y = height / 2

    this.gradient = this.createGradient()
    this.ctx.strokeStyle = this.gradient

    console.log(`[${this.who}] I am created.`)
  }

  createGradient(): CanvasGradient {
    const gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.width,
      this.height,
    )

    gradient.addColorStop(0.1, "#ff5c33")
    gradient.addColorStop(0.2, "#ff66b3")
    gradient.addColorStop(0.4, "#ccccff")
    gradient.addColorStop(0.6, "#b3ffff")
    gradient.addColorStop(0.8, "#80ff80")
    gradient.addColorStop(0.9, "#ffff33")

    return gradient
  }

  drawLineToMouse(x: number, y: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(this.mouse.x, this.mouse.y)
    this.ctx.stroke()
  }

  drawLine(angle: number, x: number, y: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(x + Math.cos(angle) * 30, y + Math.sin(angle) * 30)
    this.ctx.stroke()
  }

  animate(currentTime?: number): void {
    currentTime = currentTime || 0
    const deltaTime = currentTime - this.lastTime
    this.lastTime = currentTime

    if (this.timer > this.interval) {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.radius += this.radiusVelocity

      for (let x = this.cellSize; x < this.width; x += this.cellSize) {
        for (let y = this.cellSize; y < this.height; y += this.cellSize) {
          const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius
          this.drawLine(angle, x, y)
        }
      }

      this.timer = 0
    } else {
      this.timer += deltaTime
    }

    requestAnimationFrame(this.animate.bind(this))
  }
}
