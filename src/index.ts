import {Score} from './app/score'
import {HEIGHT, WIDTH} from './constants'

const main = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  canvas.height = HEIGHT
  canvas.width = WIDTH

  const ctx = canvas.getContext('2d')

  const staff = new App(ctx)
  staff.render()
}
main()
