import {App} from './app/app'

const main = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  const staff = new App(ctx)
  staff.render()
}
main()
