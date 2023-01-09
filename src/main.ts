const canvas= document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;
canvas.width = innerHeight;
canvas.height = innerHeight;

ctx.fillRect(150,150,100,100)
// ctx.clearRect(45,45,60,60)

export default canvas;