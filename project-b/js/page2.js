function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(50, 80));
}