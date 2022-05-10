class Predio {
  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(pImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}