import {Page} from './app/page'

const CANVAS_HEIGHT = 2000
const CANVAS_WIDTH = 1400

const main = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  canvas.height = CANVAS_HEIGHT
  canvas.width = CANVAS_WIDTH

  const ctx = canvas.getContext('2d')

  const pageRect = {
    origin: {
      x: 0,
      y: 0
    },
    size: {
      width: canvas.width,
      height: canvas.height
    }
  }
  const page = new Page(ctx, pageRect)
  page.render()
}
main()
