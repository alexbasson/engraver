const main = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, canvas.height/4, canvas.width, canvas.height/2);
}
main()
