let steven;
let sImg;
let vImg;
let fImg;
let viuvas = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  sImg = loadImage('steven.png');
  vImg = loadImage('viuva.png');
  fImg = loadImage('fundo.png');
}

function mousePressed() {
  viuvas.push(new Viuva());
}



function setup() {
  createCanvas(800, 450);
  steven = new Steven();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    steven.jump();
  }
}

function spacePressed() {
  if (space == ' ') {
    steven.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    viuvas.push(new Viuva());
  }

  background(fImg);
  for (let v of viuvas) {
    v.move();
    v.show();
    if (steven.hits(v)) {
      console.log('game over');
      noLoop();
    }
  }

  steven.show();
  steven.move();
}