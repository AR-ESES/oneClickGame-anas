let MENU = 0
let img1;
let img2;



function preload() {
  img1 = loadImage('marvel.png');
  img2 = loadImage('marvel1.png');


}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  print(mouseX, mouseY)
  image(img1, 0, 0, 800, 600);
  fill(178,34,34);
  rect(50, 50,200, 40);
  fill(178,34,34);
  rect(50, 200, 200, 40);
  fill(178,34,34);
  rect(50, 350, 200, 40);
  fill(178,34,34);
  rect(50, 500, 200, 40);
  textSize(35)
  fill(255);
  text('Jogar', 105, 230)
  text('Instruções', 70, 80);
  text('Créditos', 85, 382);
  text('Sair', 119, 530);
  
   // JOGAR
  if (MENU == 2) {
     image(img2, 0, 0, 800, 600);
  
    
    
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  }
  
// INSTRUÇÕES
  if (MENU == 1) {
    image(img2, 0, 0, 800, 600);
    fill(0)
    textSize(20)
    text('Botão direito do rato para voltar ao MENU', 420, 30)
    textSize(30)
    text('1. Salta os obstáculos e evita chocar contra eles.', 50, 150)
    text('2. Para saltares deves clicar na tecla "space" ou ', 50, 200)
    text('ou podes saltar através do controlo de voz.', 80, 240)
    text('3. O objetivo é obter o maior resultado possível.', 50, 290)
    text('4. O jogo termina quando chocares contra o obstáculo.', 50, 340)

    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } 
  // CRÉDITOS
  if (MENU == 3) {
     image(img2, 0, 0, 800, 600);
    fill(0)
    textSize(20)
    text('Botão direito do rato para voltar ao MENU', 420, 30)
    fill(0)
    textSize(30)
    text('1. The Coding Train - Chrome Dinosaur Game.', 50, 150)
    text('2. The Coding Train - Speech Recognition', 50, 200)
    text('with p5.Speech.', 80, 240)
    text('3. Gustavo Moniz - Menu do jogo (p5js).', 50, 290)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // SAIR
  if (MENU == 4) {
    image(img2, 0, 0, 800, 600);
    fill(178,34,34);
    textSize(55)
    text('VOLTA BREVEMENTE!', 130,290)
    
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // EXIT 
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
      if (mouseY < 425 && mouseY > 350) {
        MENU = 3
      }
      if (mouseY  < 575 && mouseY > 500) {
        MENU = 4
      }
    }
  }
}