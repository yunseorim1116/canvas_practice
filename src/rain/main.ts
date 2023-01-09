const canvas= document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;

canvas.width = innerHeight;
canvas.height = innerHeight;

let total; //빗방울의 갯수
let rains:any = []; //빗방울 객체를 만들 배열 추가

const randomBetween = (min:number, max:number)=>{
  return Math.random() * (max-min +1) + min;
}

export class Rain {

  constructor(private x: number,private y: number,private velocity:any) {
    //빗방울 생성자
    //x좌표,y좌표,속도
      this.x = x;
      this.y = y;
      this.velocity = velocity;
  }

  drawRain() { //canvas 빗방울 그리는 함수
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
  total = 50;
  rains = [];

  for(let i=0; i < total; i++){
    const x = randomBetween(0,innerWidth);
    const y = randomBetween(0,innerHeight);

    const velocity = {
      x:randomBetween(-1,1),
      y:randomBetween(13,18)
    }

    rains.push(new Rain(x,y,velocity))
  }
}

const render =()=> {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  rains.forEach((el:any) => el.animate());
  window.requestAnimationFrame(render)
}

init()
render()



export default canvas;