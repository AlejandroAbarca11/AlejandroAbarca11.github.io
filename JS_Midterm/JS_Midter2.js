// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

 
class Ball{
constructor(x,y,velX,color,size) {
    this.x=x;
    this.y=y;
    this.velX=velX;
    this.color=color;
    this.size=size;
    }
    
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

      }
    update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
        this.x += this.velX;
    
    }
    
}
const color = `rgb(0,255,0)`;
      const balls = [];
      
        const size = 10;
        const ball = new Ball(200,400,1,color,size,);

    balls.push(ball);
  const index = 0;


  
  function loop() {
    ctx.fillStyle = "rgb(50 0 10 / 25%)";
    ctx.fillRect(0, 250, width, 300);
 
      ball.draw();
      ball.update();  
    requestAnimationFrame(loop);
  }
    
    
loop();