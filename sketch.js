let steven;
let sImg;
let vImg;
let fImg;
let viuvas = [];
let soundClassifier;
var tela =  0;
//menu
var xRect = 200;
var yRect = 150;
var opcaoMenu = 1;
//imagens
let img;
let myFont;
let imgCred;
let imgInst;

function preload() {
  img = loadImage ('harry.jpg');
  imgCred = loadImage ('harry2.jpg');
  imgInst = loadImage ('harry3.jpg');
  myFont = loadFont ('Rainbow Paper.otf')
}

function draw (){
  if (tela == 0) {
    menu();
}
 if (tela == 1) {
    instrucoes();
}
 if (tela == 1) {
    creditos();
 }
}

function menu () {
  background(img);
  rect (xRect, yRect, 290, 45, 15);

  textFont (myFont);
  textSize (39);
  text ('Flappy Bird da Marvel', 85, 75);

  textSize(35);
  text('Jogar', 260, 180);
  text('Instruções', 210, 280);
  text('Créditos', 235, 380);
}

function instrucoes(){
  background(imgInst);
}

function creditos(){
  background(imgCred);
}

function keypressed() {

  if(key=="ArrowUp" && yRect>180){
    yRect+=100;
    opcaoMenu--;
  }

  if(key=="ArrowDown" && yRect<330){
    yRect+=100;
    opcaoMenu++;
  }

  if(key=="Enter"){
    tela = opcaoMenu;
  }

   if(key=="Escape"){
    tela = 0;
  }
}
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
    fundo.move();
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
