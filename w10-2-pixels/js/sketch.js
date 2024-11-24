let cam;


function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(240);


  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
}


function draw() {
  background(240);


  let gridSize = 10;
  cam.loadPixels();
  for (let y = 0; y < cam.height; y += gridSize) {
    for (let x = 0; x < cam.width; x += gridSize) {
      let index = (x + y * width) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];


      noStroke();
      fill(r, g, b);
      ellipse(x + gridSize / 2, y + gridSize / 2, gridSize, gridSize);
    }
  }


  //image(cam, 0, 0);
}








// let img;
// let brushSize = 30;


// function preload() {
//   img = loadImage("assets/tree.jpg");
// }


// function setup() {
//   let canvas = createCanvas(600, 523);
//   canvas.parent("p5-canvas-container");
//   background(240);
// }


// function draw() {
//   //background(240);
//   //image(img, 0, 0);


//   for (let i = 0; i < 50; i++) {
//     let x = floor(random(width));
//     let y = floor(random(height));
//     let dia = random(5, 30);
//     let selectedColor = img.get(x, y);
//     fill(selectedColor);
//     noStroke();
//     circle(x, y, dia);
//   }
// }



// let img;
// let brushSize = 30;


// function preload() {
//   img = loadImage("assets/sprite.png");
// }


// function setup() {
//   let canvas = createCanvas(500, 400);
//   canvas.parent("p5-canvas-container");
//   background(0);
// }


// function draw() {
//   //background(0, 10);

//   blendMode(ADD);


//   tint(10, 120, 180, 50);
//   imageMode(CENTER);
//   image(img, mouseX, mouseY, brushSize, brushSize);
// }


// let img;


// function preload() {
//   img = loadImage("assets/colorful.jpg");
// }


// function setup() {
//   let canvas = createCanvas(500, 281);
//   canvas.parent("p5-canvas-container");
//   background(220);

// }


// function draw() {
//   background(220);

//   // tint(255, 0, 255);   //dye color
//   image(img, 0, 0);
//   // filter(GRAY);
//   // filter(INVERT);
//   // filter(BLUR, 3);
//   // filter(THRESHOLD, 0.2); // black and white

//   // imageMode(CENTER);
//   // image(img, mouseX, mouseY, 100, 80);
// }
