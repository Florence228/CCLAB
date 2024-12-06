

let imgTree;

function preload() {
    imgTree = loadImage("img/tree.png");
}


function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("canvaContainer");


}



function draw() {
    background(255);

    image(imgTree, 0, 0);


}



