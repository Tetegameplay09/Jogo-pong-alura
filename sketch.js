function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);     
}
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(0, 0, 50);
}
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    yBolinha = xBolinha + 1;
}


let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    yBolinha += velocidadeXBolinha;
    xBolinha += velocidadeYBolinha;
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    //yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width) {
        velocidadeXBolinha *= -1;
    }
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    //yBolinha += velocidadeYBolinha;
    
   if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
    }
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    //xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -2;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}let vBolinha = 200;
let mBolinha = 200;
let xiametro = 15;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
}let yxBolinha = 300;
let xyBolinha = 200;
let xdiametro = 15;

let yvelocidadeXBolinha = 6;
let xvelocidadeYBolinha = 6;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    //yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width) {
        velocidadeXBolinha *= -1;
    }
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    //yBolinha += velocidadeYBolinha;
    
   if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
    }
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    //xBolinha += velocidadeXBolinha;
    
    if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    //xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width || xBolinha < 10) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 20) {
        velocidadeYBolinha *= -1;
    }
}

let leftPaddle;
let rightPaddle;
let ball;
let leftScore = 0;
let rightScore = 0;

function setup() {
  createCanvas(800, 400);
  leftPaddle = new Paddle(20, height / 2 - 40);
  rightPaddle = new Paddle(width - 30, height / 2 - 40);
  ball = new Ball();
}

function draw() {
  background(0);
  
  // Display scores
  textSize(32);
  fill(255);
  text(leftScore, width / 4, 50);
  text(rightScore, 3 * width / 4, 50);
  
  // Draw paddles
  leftPaddle.show();
  rightPaddle.show();
  
  // Move paddles
  leftPaddle.update();
  rightPaddle.update();
  
  // Draw ball
  ball.show();
  ball.update();
  
  // Check for collisions
  ball.checkPaddleCollision(leftPaddle);
  ball.checkPaddleCollision(rightPaddle);
  
  // Update scores
  if (ball.offScreenLeft()) {
    rightScore++;
    ball.reset();
  } else if (ball.offScreenRight()) {
    leftScore++;
    ball.reset();
  }
}

class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 80;
    this.ySpeed = 0;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    if (keyIsDown(UP_ARROW)) {
      this.ySpeed = -5;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.ySpeed = 5;
    } else {
      this.ySpeed = 0;
    }
    this.y += this.ySpeed;
    this.y = constrain(this.y, 0, height - this.h);
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 5;
    this.r = 10;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.y < this.r || this.y > height - this.r) {
      this.ySpeed *= -1;
    }
  }

  checkPaddleCollision(paddle) {
    if (
      this.x - this.r < paddle.x + paddle.w &&
      this.x + this.r > paddle.x &&
      this.y - this.r < paddle.y + paddle.h &&
      this.y + this.r > paddle.y
    ) {
      this.xSpeed *= -1;
    }
  }

  offScreenLeft() {
    return this.x - this.r < 0;
  }

  offScreenRight() {
    return this.x + this.r > width;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
  }
}






