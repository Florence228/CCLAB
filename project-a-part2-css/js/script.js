let phase = 0;
let earthX, earthY;
let creatureX, creatureY;
let creatureW, creatureH;
let angle = 0;
let earthDia = 300;
let orbitX, orbitY;

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
}

function draw() {
  ////// Change Phase //////
  if (keyIsPressed) {
    if (key == "3") {
     phase = 0;
    } else if (key == "1") {
      phase = 1;
    } else if (key == "2") {
      phase = 2;
    }
  }
  
  ///// Phase 0 /////
  if (phase == 0) {
    // intro
    background(49, 13, 96);
    stroke(255);
    strokeWeight(5);
    textSize(40);
    text("Press 1 to Begin", 250, 100);
    strokeWeight(4);
    textSize(30);
    text("After entering the page, press 'b' to generate our planet", 40, 180)
    text("Then, press the mouse to see what happens",90,240)
    textSize(20)
    strokeWeight(2);          text("CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!CAUTION!",15, 480)
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

      //Rotation
      angle += 1;
    }
    ///// CHECK /////
    //Sink the Earth gradually
    if (mouseIsPressed) {
      if (earthY < height + 100) {
        earthY += 1.2; //Speed
      }
    }

    ////////////// DISPLAY /////////////////

    drawGround();
    if (key == "b"){
       drawEarth(earthX, earthY, earthX, earthY);
       drawOrbit(earthX, earthY);
    }
    drawCreature(earthX, earthY);
    
    //  console.log(earthY);
  }

  ///// Phase 2 /////
  else if (phase == 2) {
    // draw 2d paper
    background(255, 255, 0);
    fill(8, 108, 98);
    circle(width / 2, height / 2, earthDia);
  }
}

function drawCreature() {
  fill(0);
  creatureW = map(earthY, 290, height, 0, 650, true);
  creatureH = map(earthY, 290, height, 0, 80, true);
  ellipse(creatureX, creatureY, creatureW, creatureH);
}

function drawGround() {
  fill(6, 16, 90);
  noStroke();
  beginShape();
  vertex(0, height);
  vertex(100, height - 120);
  vertex(width - 100, height - 120);
  vertex(width, height);
  endShape(CLOSE);
}

function drawEarth(x, y, x1, y1,r1,r2) {
  push();
  translate(x, y);
  noStroke();
  fill(8, 108, 98);
  ellipse(0, 0, earthDia); //Earth
  earthDia = map(earthY, 290, height - 30, 300, 0, true);
  pop();
  
  push();
  translate(x1, y1);
  rotate(angle);
  let flameX,flameY;
  for (let i = 0; i < 360; i += 10) {
    if(earthY<=height-30){
    if (earthY >= 290){
    flameX = sin(i) * map(earthY, 290, height-30, 150,0);
    flameY = cos(i) * map(earthY, 290, height-30, 150,0);
    
  }else{
    flameX = sin(i) * 150;
    flameY = cos(i) * 150;
  }
    fill(255, random(0, 200), 0, random(100, 255));
    ellipse(flameX, flameY, random(10, 30), random(30, 50));
}}
  pop();
}

function drawOrbit(x, y) {
  push();
  translate(x, y);
  for (let k = 0; k < 12; k++) {
    let theta = (TWO_PI / 12) * k + angle;
    orbitX = cos(theta) * 250;
    orbitY = sin(theta) * 250;
    fill(72, 91, 62);
    circle(orbitX, orbitY, 40);
  }
  angle += 0.02;
  pop();
}
