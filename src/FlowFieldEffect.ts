export class FlowFieldEffect {
  constructor(
    public ctx: CanvasRenderingContext2D,
    public width: number,
    public height: number,
  ) {
    console.log(`[FlowFieldEffect] I am created.`)
  }

  draw(x: number, y: number): void {
    this.ctx.beginPath()
  }
}
