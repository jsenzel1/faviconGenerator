let baseH;

let iterations;

function setup() {
  createCanvas(16, 16);
  
  noStroke();
  
  noLoop();
  
  colorMode(HSB,1)
  
  
  
  rH = random(0,1);
  
  rS = random(.4,.7);
  rB = random(.85,1);
  
}

function draw() {
  
  
  background(220);
  fill(255,0,0);
  rect(0,0,16,8);
  
   fill(0,255,0);
  rect(0,8,16,8);
  
  //save('favicon.png');
  
}