 let particles = [];

 function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(0, 20);

  if (frameCount % 5 == 0) {
    let p = new Particle(random(width), random(height), random(5, 30), random(1, 5));
    particles.push(p);
  }
  
  for (let p of particles) {
    p.display();
   }

  // Random Stars
  noStroke();
  fill(random(255), random(255), random(255));
  star(random(width), random(height), random(5, 30));
}

class Particle {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(frameCount * this.speed);
    fill(this.r, this.g, this.b);
    ellipse(0, 0, this.size, this.size / 10);
    ellipse(0, 0, this.size / 10, this.size);
    circle(0, 0, this.size / 2);
    pop();
  }
}

function star(x, y, radius) {
  beginShape();
  for (let i = 0; i < TWO_PI; i += PI) {
    let xPosition = x + cos(i) * radius;
    let yPosition = y + sin(i) * radius;
  vertex(xPosition, yPosition);
  }
  endShape(CLOSE);
}