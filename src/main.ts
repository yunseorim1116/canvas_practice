const canvas= document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;

let total;
let rains = [];

const randomBetween = (min:number, max:number)=>{
  return Math.random() * (max-min +1) + min;
}

export class Rain {

  constructor(private x: number,private y: number,private velocity:any) {
      this.x = x;
      this.y = y;
      this.velocity = velocity;
  }

  drawRain() {
      const { x,y,velocity } = this
      ctx.beginPath();
      ctx.moveTo(x,y)
      ctx.lineTo(x + velocity.x ,y + velocity.y)
      ctx.stroke();
  }

  animate(){
    if(this.y > innerHeight){
      this.x = randomBetween(0,innerWidth)
      this.y = -20
    }
    this.x += this.velocity.x
    this.y += this.velocity.y
    this.drawRain()
  }
}

const init = ()=> {
  canvas.width = innerHeight;
  canvas.height = innerHeight;

  total = 50;
  rains = [];

  for(let i=0; i < total; i++){
    const x = randomBetween(0,innerWidth);
    const y = randomBetween(0,innerHeight);

    const velocity ={
      x:randomBetween(-1,1),
      y:randomBetween(13,18)
    }

    rains.push(new Rain(x,y,velocity))
  }

}

const render =()=> {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  rains.forEach(el => el.animate());
  window.requestAnimationFrame(render)
}

init()
render()




export default canvas;