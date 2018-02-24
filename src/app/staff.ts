import {Color} from '../color'
import {Point, Rectangle} from './geometry'

export class Staff {
  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly rect: Rectangle
  ) {}

  render() {
    for (let i = 0; i < 5; i++) {
      const origin = {
        x: this.rect.origin.x,
        y: this.rect.origin.y + i * (this.rect.size.height / 4)
      }
      this.horizontalLine(origin, this.rect.size.width)
    }
  }

  private horizontalLine(origin: Point, length: number) {
    this.ctx.fillStyle = Color.Black
    this.ctx.fillRect(origin.x, origin.y, length, 1)
  }
}
