let phase = 0;
let earthPhase = false;

let earthX, earthY;
let earthDia = 300;

let creatureX, creatureY;
let creatureW, creatureH;

let angle = 0;
let ballX, ballY;
let shrinkFactor = 1;

let t = 0;

function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
  angleMode(DEGREES);

  earthX = width / 2;
  earthY = 160; //Initial position of the Earth

  creatureX = 400;
  creatureY = 450;
  creatureW = 0;
  creatureH = 0;

  ballX = width / 2;
  ballY = height - 50;
}

function draw() {
  ///// Phase 0 /////
  if (phase == 0) {
    // intro
    background(49, 13, 96);
    let numOfIterations = random(50, 150);
    stroke(random(255), random(255), random(255));
    for (let i = 0; i < numOfIterations; i++) {
      let x = random(width);
      let y = random(height);
      strokeWeight(random(1, 10));
      line(
        x + random(-20, 20),
        y + random(-20, 20),
        x + random(-20, 20),
        y + random(-20, 20)
      );
    }
    stroke(255);
    strokeWeight(5);
    fill(random(255));
    textSize(60);
    text("DiPortal-Fn3", 225, 200);
    textSize(30);
    text("Press to Begin", 300, 250);
    textSize(20);
    strokeWeight(2);
    text(
      "CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!",
      15,
      480
    );
    let freq = frameCount * 30;
    let sinValue = sin(freq);
    let circleDia = map(sinValue, -1, 1, 50, 80);
    let r = map(mouseX, 0, width, 255, 0);
    let g = map(mouseX, 0, width, 255, 0);
    let b = map(mouseX, 0, height, 0, 255);
    noStroke();
    fill(r, g, b);
    circle(mouseX, mouseY, circleDia);
  }

  ///// Phase 1 /////
  else if (phase == 1) {
    //Background
    for (let i = 0; i < 150; i++) {
      let num = random(0, 5);
      fill(random(20), random(50, 100), random(200, 150), random(50, 100));
      noStroke();
      for (let j = 0; j < num; j++) {
        let backX = random(width);
        let backY = random(height);
        triangle(
          backX + random(-5, 5),
          backY + random(-20, 20),
          backX + random(-20, 20),
          backY + random(-20, 20),
          backX + random(-20, 20),
          backY + random(-20, 20)
        );
      }
    }
    ////////////// DISPLAY /////////////////

    drawGround();
    drawCreature(earthX, earthY, 650);

    drawWhirlpool();
    if (earthPhase) {
      drawNoiseTexture(earthX, earthY, earthDia);
      drawFlame(earthX, earthY, earthDia);
      drawEarth(earthX, earthY, earthDia);
    }

    angle += 0.05;

    //  console.log(earthY);

    ///// CHECK /////
    //Sink the Earth gradually
    if (mouseIsPressed) {
      if (earthY < height + 100) {
        earthY += 1.1; //Speed
      }
      if (earthY > 475) {
        background(0); // one time background clearing!
        phase = 2;
        // reset
        earthPhase = false;
        earthY = 160;
        earthDia = 300;
      }
    }
  }

  ///// Phase 2 /////
  else if (phase == 2) {
    // draw Noise Background
    for (let x = 0; x < width; x += 10) {
      for (let y = 0; y < height; y += 10) {
        let noiseFactor = noise(x * 0.01, y * 0.01, t);
        let colorR = map(noiseFactor, 0, 1, 100, 255);
        let colorG = map(noiseFactor, 0, 1, 100, 50);
        let colorB = map(noiseFactor, 0, 1, 50, 0);
        fill(colorR, colorG, colorB, 10);
        rect(x, y, 10, 10);
      }
    }
    t += 0.02;
    translate(width / 2, height / 2);
    rotate(angle);

    let r = 255;
    let g = map(sin(frameCount * 2.0), -1, 1, 0, 200);
    let b = 0;
    let a = map(sin(frameCount * 1.3), -1, 1, 150, 200);

    fill(r, g, b, a);
    circle(10, 0, earthDia);
    angle += 5;
    if (mouseIsPressed) {
    circle(0, 100, 150);
    }
  }
}

function drawGround() {
  fill(6, 16, 100);
  noStroke();
  beginShape();
  vertex(0, height);
  vertex(100, height - 120);
  vertex(width - 100, height - 120);
  vertex(width, height);
  endShape(CLOSE);
}

function drawWhirlpool() {
  push();
  translate(400, 450);

  scale(5.1, 0.9);

  for (let i = 0; i < 50; i++) {
    rotate(frameCount * 0.5 + i);
    let whirlRadius = map(i, 0, 50, 60, 10);
    fill(0, map(i, 0, 50, 50, 100));
    ellipse(whirlRadius, 0, whirlRadius / 5, whirlRadius / 5);
  }
  pop();
}

function drawCreature(earthX, earthY, dia) {
  fill(0);
  creatureW = map(earthY, 290, height, 0, 650, true);
  creatureH = map(earthY, 290, height, 0, 120, true);
  noStroke();
  for (let i = 0; i < 5; i++) {
    let newDia = map(i, 0, 4, dia, 5);
    let y = map(i, 0, 4, 0, 10);
    fill(80, 130);
    ellipse(creatureX, creatureY, newDia, newDia * 0.2);
    fill(0);
    ellipse(creatureX, creatureY, creatureW, creatureH);
  }
}

function drawEarth(x, y, dia) {
  earthDia = map(earthY, 290, height - 30, 300, 0, true);
  push();
  translate(x, y);
  noStroke();
  fill(255, random(0, 200), 0, random(150, 255));
  circle(0, 0, dia); //Earth
  circle(random(-30, 30), random(-30, 30), dia / 1.5);
  // circle(random(0,40),random(0,5),dia / 1.5); //Inside
  pop();
}

function drawFlame(x, y, dia) {
  let rad = dia / 2;
  push();
  translate(x, y);
  rotate(random(360));
  let flameX, flameY;
  for (let i = 0; i < 360; i += 10) {
    if (earthY <= height - 30) {
      if (earthY >= 290) {
        flameX = sin(i) * rad;
        flameY = cos(i) * rad;
      } else {
        flameX = sin(i) * 150;
        flameY = cos(i) * 150;
      }
      fill(255, random(0, 200), 0, random(100, 255));
      ellipse(flameX, flameY, random(10, 30), random(30, 50));
    }
  }
  pop();
}

function drawNoiseTexture(x, y, dia) {
  push();
  translate(x, y);
  for (let x = -earthDia / 2; x < earthDia / 2; x += 5) {
    for (let y = -earthDia / 2; y < earthDia / 2; y += 5) {
      let d = dist(x, y, 0, 0);
      if (d < earthDia / 2) {
        let noiseVal = noise(x * 0.03, y * 0.03);
        ellipse(x, y, 5, 5);
      }
    }
  }
  pop();
}

function mousePressed() {
  if (phase == 0) {
    phase = 1;
  } else if (phase == 1) {
    earthPhase = true;
  }
}

function keyPressed() {
  if (key == "3") {
    phase = 0;
  } else if (key == "1") {
    phase = 1;
  } else if (key == "2") {
    phase = 2;
  } else if (key == " ") {
    phase = phase + 1;
    if (phase == 3) {
      phase = 0;
    }
  }
}
