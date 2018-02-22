export class App {
  constructor(private readonly ctx: CanvasRenderingContext2D) {}

  render() {
    this.ctx.fillStyle = 'rgb(100, 0, 0)'
    this.ctx.fillRect(0, 150, 800, 300)
  }
}
