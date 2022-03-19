function setup() {
  createCanvas (windowWidth, windowHeight);
}

let spacing = 900;
let img;

function preload() {
  img = loadImage('p5repeat.jpg')
}

function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  if (spacing > 10) {
    spacing += event.delta;

  }
  return false;

}

function draw() {
  //spacing = 100
  print(spacing)
  background (220);
  
  numberx = floor((windowWidth/2)/spacing)+10
  numbery = floor ((windowHeight/2)/spacing)+10
  
  for (let j=0; j < numberx; j++) {
    for (let i=0; i < numbery; i++) {
      image(img,windowWidth/2+(spacing*j), windowHeight/2+(spacing*i), spacing, spacing)
    }
  }
  
  for (let j=numberx; j > 0; j--) {
    for (let i=0; i < numbery; i++) {
      image(img,windowWidth/2-(spacing*j), windowHeight/2+(spacing*i), spacing, spacing)
    }
  }
  
  for (let j=numberx; j > 0; j--) {
    for (let i=numbery; i > 0; i--) {
      image(img,windowWidth/2-(spacing*j), windowHeight/2-(spacing*i), spacing, spacing)
    }
  }
  
    for (let j=0; j < numberx; j++) {
    for (let i=numbery; i > 0; i--) {
      image(img,windowWidth/2+(spacing*j), windowHeight/2-(spacing*i), spacing, spacing)
    }
  }

}