let img;
let mode = 0;
let imageStep = 0;

let nextButton = document.getElementById('end-page-link');
let nextButton1 = document.getElementById('dead-page-link');
nextButton.style.display = "none";
nextButton1.style.display = "none";

function preload() {
  img1 = loadImage('assets/summer-phase1.jpg');
  img2 = loadImage('assets/summer-phase2.jpg');
  img3 = loadImage('assets/summer-phase3.jpg');
  img4 = loadImage('assets/summer-phase4.jpg');
  img5 = loadImage('assets/summer-phase5.jpg');
  img6 = loadImage('assets/summer-phase6.jpg');
  img7 = loadImage('assets/tree1.jpeg');
  img8 = loadImage('assets/water.jpg');
  img9 = loadImage('assets/sunshine.jpg');
  img10 = loadImage('assets/fertilizer.jpg');
  img11 = loadImage('assets/steponit.jpg');
  img12 = loadImage('assets/deadtree.jpg');
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  drawBackground();
}

function draw() {
  drawBackground();

  imageMode(CORNER);
  if (imageStep === 1) {
    img1.resize(50, 50);
    image(img1, 350, 250);
  } else if (imageStep === 2) {
    img2.resize(50, 75);
    image(img2, 350, 205);
  } else if (imageStep === 3) {
    img3.resize(65, 90);
    image(img3, 350, 170);
  } else if (imageStep === 4) {
    img4.resize(70, 100);
    image(img4, 350, 165);
  } else if (imageStep === 5) {
    img5.resize(150, 200);
    image(img5, 300, 70);
  } else if (imageStep === 6) {
    img6.resize(240, 230);
    image(img6, 280, 25);
  } else if (imageStep === 7) {
    img7.resize(260, 260);
    image(img7, 270, 0);
    nextButton.style.display = "block";
  } else if (imageStep == 8) {
    img12.resize(300, 130);
    image(img12, 240, 190);
    nextButton1.style.display = "block";
  }

  imageMode(CENTER);
  if (mode == 1) {
    imageStep = 1;
    console.log(imageStep);
  }

  if (mode == 2) {
    image(img8, mouseX, mouseY, 150, 150);

    if (imageStep == 1 &&
      mouseX > 250 &&
      mouseX < 450
      && mouseY > 200
      && mouseY < 300) {
      imageStep = 2;
    }
    if (imageStep == 4 &&
      mouseX > 250 &&
      mouseX < 450
      && mouseY > 0
      && mouseY < 150) {
      imageStep = 5;
    }
  }

  if (mode == 3) {
    image(img9, mouseX, mouseY, 150, 150);

    if (imageStep == 2 &&
      mouseX > 250 &&
      mouseX < 450
      && mouseY > 200
      && mouseY < 300) {
      imageStep = 3;
    }
    if (imageStep == 5 &&
      mouseX > 200 &&
      mouseX < 400
      && mouseY > 0
      && mouseY < 100) {
      imageStep = 6;
    }
  }

  if (mode == 4) {
    image(img10, mouseX, mouseY, 100, 100);
    if (imageStep == 3 &&
      mouseX > 250 &&
      mouseX < 450
      && mouseY > 200
      && mouseY < 300) {
      imageStep = 4;
    }
    if (imageStep == 6 &&
      mouseX > 200 &&
      mouseX < 400
      && mouseY > -100
      && mouseY < 100) {
      imageStep = 7;
    }
  }
  if (mode == 5) {
    image(img11, mouseX, mouseY, 150, 150);
    if (mouseX > 250 &&
      mouseX < 450
      && mouseY > 200
      && mouseY < 300) {

      imageStep = 8;
    }
  }
}

function mousePressed() {
  //proceedStep();
}

function proceedStep() {
  imageStep++;
  if (imageStep > 7) {
    imageStep = 0; // Reset the sequence
  }
}

function drawBackground() {
  background(0, 191, 255);
  noStroke();
  fill(139, 69, 19);
  rect(0, 250, 800, 250);
}

function applySeed() {
  // push some objects
  mode = 1;
}

function applyWater() {
  // push some objects
  mode = 2;
}

function applySunshine() {
  // push some objects
  mode = 3;
}

function applyFertilizer() {
  // push some objects
  mode = 4;
}

function applyStep() {
  // push some objects
  mode = 5;
}