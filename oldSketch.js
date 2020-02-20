let baseH;

let iterations = 20;


let circLen;

let circStart;

let circX;

let circSize;

let circSpacing;
//

function circSetup() {
  //circ vars

  circLen = floor(random(4, 10));
  circStart = floor(random(16));

  circSize = random(2, 4);
  circSpacing = random(1, 2);
}

function setup() {
  circSetup();
  createCanvas(16, 16);

  noStroke();

  noLoop();

  colorMode(HSB, 1)



  rH = random(0, 1);

  colorRoll();



}

function colorRoll() {
  rS = random(.4, .7);
  rB = random(.85, 1);
}

function draw() {


  // background(220);
  // fill(255, 0, 0);
  // rect(0, 0, 16, 8);

  // fill(0, 255, 0);
  // rect(0, 8, 16, 8);

  //save('favicon.png');

  for (let i = 0; i < iterations; i++) {

    colorRoll();

    fill(color(rH, rS, rB));

    switch (floor(random(1, 3))) {
      case 1:

        rect(random(16), random(16), floor(random(3, 6)), random(3, 6));

        break;

      case 2:

        print('case2');



        for (let i = 0; i < circLen; i++) {

          circX += circSpacing;
          ellipse(circX, circStart, circSize, circSize);

        }
        //ellipse()

        break;

      case 3:

        break;

      case 4:

        break;

      default:
        break;
    }

  }

}