import {STAFF_HEIGHT, STAFF_SPACING} from '../constants'
import {Staff} from './staff'
import {Rectangle} from './geometry'

const MARGIN = 20

export class Page {
  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly rect: Rectangle
  ) {}

  private staffHeight = STAFF_HEIGHT + STAFF_SPACING
  private staves: Staff[] = []

  render() {
    this.generateStaves()
    this.staves.forEach(staff => staff.render())
  }

  private generateStaves() {
    const size = this.rect.size
    const numberOfStaves = Math.floor(size.height / this.staffHeight)
    const marginY = MARGIN + (size.height - numberOfStaves * this.staffHeight) / 2
    for (let index = 0; index < numberOfStaves; index++) {
      const staffRect = {
        origin: {
          x: this.rect.origin.x + MARGIN,
          y: this.rect.origin.y + marginY + index * this.staffHeight
        },
        size: {
          width: size.width - 2 * MARGIN,
          height: STAFF_HEIGHT
        }
      }
      this.staves.push(new Staff(this.ctx, staffRect))
    }
  }
}
