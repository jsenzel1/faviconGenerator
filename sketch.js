let yPos = 0;
let howMany = 4;
let ySpacing;

let x = 0;
let y = 0;


function setup() {

  howMany = floor(random(3, 6));

  ySpacing = 16 / howMany;

  createCanvas(16, 16);

  noStroke();

  //noLoop();

  colorMode(HSB, 1)



  rH = random(0, 1);

  colorRoll();

  rectMode(CORNER);



}

function keyPressed() {
  save('favicon.png');
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

  // for (let i = 0; i < howMany; i++) {


  //   fill(color(rH, rS, rB));


  //   colorRoll();



  //   rect(0, yPos, 16, ySpacing);

  //   yPos += ySpacing;


  // }

  for (let i = 0; i < 8; i++) {

    x += 2;

    y = 0;

    for (let j = 0; j < 8; j++) {


      if (random() < .7) {
        fill(color(rH, rS, rB));


        rect(x - 2, y, 2, 2);

        colorRoll();
      }

      // if (random() > .8) {

      //   fill(color(rH, rS, rB));

      //   let rSize = random(3, 5);
      //   rect(x - 2, y, rSize, rSize);

      //   colorRoll();

      // }

      y += 2;



    }

  }

}