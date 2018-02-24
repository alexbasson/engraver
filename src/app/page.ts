import {STAFF_HEIGHT, STAFF_SPACING} from '../constants'
import {Staff} from './staff'
import {Size} from './geometry'

const MARGIN = 20

export class Page {
  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly size: Size
  ) {}

  private staffHeight = STAFF_HEIGHT + STAFF_SPACING
  private staves: Staff[] = []

  render() {
    this.generateStaves()
    this.staves.forEach(staff => staff.render())
  }

  private generateStaves() {
    const numberOfStaves = Math.floor(this.size.height / this.staffHeight)
    const marginY = MARGIN + (this.size.height - numberOfStaves * this.staffHeight) / 2
    for (let index = 0; index < numberOfStaves; index++) {
      const rectangle = {
        origin: {
          x: MARGIN,
          y: marginY + index * this.staffHeight
        },
        size: {
          width: this.size.width - 2 * MARGIN,
          height: STAFF_HEIGHT
        }
      }
      this.staves.push(new Staff(this.ctx, rectangle))
    }
  }
}
