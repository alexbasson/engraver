import {Page} from './app/page'
import './style.css'

const CANVAS_HEIGHT = 2000

const main = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  canvas.width = document.getElementById('canvas-container').offsetWidth
  canvas.height = CANVAS_HEIGHT

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
