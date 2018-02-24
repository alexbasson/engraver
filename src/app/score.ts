import {HEIGHT, WIDTH} from '../constants'

export class Score {
  constructor(private readonly ctx: CanvasRenderingContext2D) {}

  render() {
    this.ctx.fillStyle = 'rgb(100, 0, 0)'
    this.ctx.fillRect(0, 0, WIDTH, HEIGHT)
  }
}
