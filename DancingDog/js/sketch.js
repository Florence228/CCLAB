class DancingDog {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 40;
    this.xMove = 0;
    this.xSpeed = 0.05;
    this.yMove = 0;
    this.ySpeed = 0.1;
    this.armAngle = 0;
    this.armSpeed = 0.1;
  }
 
  dance(){
    this.xMove = sin(frameCount * this.xSpeed) * 20;
  }
  
  bounce(){
    this.yMove = cos(frameCount * this.ySpeed) * 20;
  }

  arm(){
    this.armAngle = sin(frameCount * this.armSpeed) * PI / 16 ;
    this.armAngleTwo = cos(frameCount * this.armSpeed) * PI / 16 ;
  }
  
  display() {
    //Arm
    push();
    translate(this.x + this.xMove - this.size / 2, this.y + this.yMove + 10);
    rotate(this.armAngle);
    fill(192, 217, 166);
    rect(25, -15, 30, 8);
    fill(29, 84, 78);
    circle(55, -12, 13)
    rotate(this.armAngleTwo);
    fill(192, 217, 166);
    rect(-20, -15, 30, 8);
    fill(29, 84, 78);
    circle(-20, -12, 13);
    pop();
    
    //Body
    fill(192, 217, 166);
    ellipse(this.x + this.xMove, this.y + this.yMove, this.size, this.size * 0.6);
    fill(29, 84, 78);
    ellipse(this.x + this.xMove, this.y + this.yMove, this.size / 1.7, this.size * 0.6);

    //Head
    fill(192, 217, 166);
    ellipse(this.x + this.xMove, this.y - this.size / 2 + this.yMove, this.size * 0.6, this.size * 0.6);

    //Ears
    fill(29, 84, 78);
    ellipse(this.x + this.xMove - 11, this.y - this.size / 2 - 7 + this.yMove, 10, 20);
    ellipse(this.x + this.xMove + 11, this.y - this.size / 2 - 7 + this.yMove, 10, 20);

    //Eyes
    fill(255);
    circle(this.x + this.xMove - 5, this.y - this.size / 2 - 5 + this.yMove, 7);
    circle(this.x + this.xMove + 5, this.y - this.size / 2 - 5 + this.yMove, 7);
    fill(0);
    circle(this.x + this.xMove - 5, this.y - this.size / 2 - 5 + this.yMove, 2);
    circle(this.x + this.xMove + 5, this.y - this.size / 2 - 5 + this.yMove, 2);

    //Mouth
    noFill();
    stroke(0);
    arc(this.x + this.xMove, this.y - this.size / 2 + 5 + this.yMove, 10, 5, 0, PI);
    noStroke();
    }
}

let dancingDog;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");
  dancingDog = new DancingDog(width / 2, height / 2);
}


function draw() {
  background(0);
  dancingDog.dance();
  dancingDog.bounce();
  dancingDog.arm();
  dancingDog.display();
}