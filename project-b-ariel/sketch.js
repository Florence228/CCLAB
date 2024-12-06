let imgs = [];
let imgFilenames = [
  "img/sky.png",
  "img/tree.png",
  "img/flower1.png",
  "img/flower2.png",
  "img/leaf1.png",
  "img/leaf2.png",
  "img/leaf3.png",
  "img/butterfly1.png",
  "img/butterfly2.png",
];
let imgCount = 0;

function preload() {
  for (let i = 0; i < imgFilenames.length; i++) {
    let img = loadImage(imgFilenames[i]);
    // each images will be stored in the array
    imgs.push(img);
  }
}


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("canvaContainer");
}

function draw() {
  background(255);

  /*
  for (let i = 0; i < imgCount; i++) {
    image(imgs[i], 0, 50);
  }
  */

  imageMode(CENTER);
  image(imgs[0], 270, 150); // sky
  image(imgs[1], 610, 260); // tree
  image(imgs[2], 360, 400);//flower1
  image(imgs[3], 360, 400);//flower2
  image(imgs[4], 326, 332);//leaf1
  image(imgs[5], 440, 390);//leaf2
  image(imgs[6], mouseX, mouseY);//leaf3
  image(imgs[7], 440, 390);//butterfly1
  image(imgs[8], 440, 390);//butterfly2


  console.log(mouseX, mouseY);

  // add other images and decide the locations
}

function mousePressed() {
  imgCount++;
  console.log(imgCount);
  // limit the imgCount based on the total number of images
  if (imgCount > imgs.length) {
    imgCount = imgs.length;
  }
}



// function mouseClicked() {
//   translate(mouseX, mouseY);
//   scale(0.7);
//   imageMode(CENTER);
//   image(imgTree, 0, 0);
// }




// push();
// translate(mouseX, mouseY);
// scale(0.1); // 10%
// imageMode(CENTER);
// image(imgTree, 0, 0);
// pop();

