let steven;
let sImg;
let pImg;
let fImg;
let predios = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  sImg = loadImage('steven.png');
  pImg = loadImage('predio.png');
  fImg = loadImage('fundo.png');
}

function mousePressed() {
  predios.push(new Predio());
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
  if (key == ' ') {
    steven.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    predios.push(new Predio());
  }
  
  background(bImg);
  for (let t of predios) {
    p.move();
    p.show();
    if (steven.hits(t)) {
      console.log('game over');
      noLoop();
    }
  }

  steven.show();
  steven.move();
}