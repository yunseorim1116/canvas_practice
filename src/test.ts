export class rain {
    x : number;
    y : number;
    speed : number;
    randomNumber : number;

    constructor() {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    addXRange() {
        this.x++
    }

    drawRain() {
        ctx.beginPath();
        ctx.lineTo(x+50,y2+30)
        ctx.lineTo(x+50,y2+50)
        ctx.stroke();
    }

    createRandom(){
        randomNumber = Math.floor(Math.random() * 100);
    }
}

const Rain = new rain();
const Rain2 = new rain()
const Rain3 = new rain()
Rain.addXRange()