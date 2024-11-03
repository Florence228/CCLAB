/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new DancingDog(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();

  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
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
    // add properties for your dancer here:
    //..
    //..
    //..
  }
    update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    dance() {
      this.xMove = sin(frameCount * this.xSpeed) * 20;
    }
    
    bounce() {
      this.yMove = cos(frameCount * this.ySpeed) * 20;
    }
  
    arm() {
      this.armAngle = sin(frameCount * this.armSpeed) * PI / 16 ;
      this.armAngleTwo = cos(frameCount * this.armSpeed) * PI / 16 ;
    }
   }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
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

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
   }

  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }


/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/