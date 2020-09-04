let walls = []; // Array of boundaries
let border = 20; // Wall border
let mBorder = 12; // Additional mouse border
let parArr = []; // Particle array

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.style('border-radius', '25px');

  walls[0] = new Boundary(100, 100, 150, 250); /* Triangle */
  walls[1] = new Boundary(100, 100, 200, 100);
  walls[2] = new Boundary(150, 250, 200, 100);

  walls[3] = new Boundary(250, 200, 350, 300); /* Trapezoid */
  walls[4] = new Boundary(250, 200, 250, 350);
  walls[5] = new Boundary(250, 350, 300, 350);
  walls[6] = new Boundary(300, 350, 350, 300);
  
  walls[7] = new Boundary(500,400, 500, 500); /* Triangle */
  walls[8] = new Boundary(500,500, 400, 500);
  walls[9] = new Boundary(400,500, 500, 400);

  walls[10] = new Boundary(100,500, 200, 500); /* Square */
  walls[11] = new Boundary(100,400, 200, 400);
  walls[12] = new Boundary(200,400, 200, 500);
  walls[13] = new Boundary(100,400, 100, 500);

  walls[14] = new Boundary(350, 100, 400, 150); /* Triangle */
  walls[15] = new Boundary(350, 100, 450, 100);
  walls[16] = new Boundary(450, 100, 400, 150);

  walls.push(new Boundary(border, border, width - border, border));
  walls.push(new Boundary(width - border, border, width - border, height - border));
  walls.push(new Boundary(width - border, height - border, border, height - border));
  walls.push(new Boundary(border, height - border, border, border));

  for(let i = 0; i < 8; i++) {
    parArr.push(new Particle(walls));
  }
  windowResized();
}

function windowResized() {
  this._renderer.position(50 >> 1,
    this.height >> 1);
}


function draw() {
  // Black background
  background(0);
  // Limit mouse movement
  mouseBorder();
  // Show boundaries
  for (let wall of walls) {
    wall.show();
  }
  // Show mouse
  fill(0,255,0);
  ellipse(mouseX, mouseY, 4, 4);
  // Update values of particles
  parArr[0].update(mouseX, mouseY + 15, walls);
  parArr[1].update(mouseX, mouseY - 15, walls);
  parArr[2].update(mouseX+15, mouseY, walls);
  parArr[3].update(mouseX-15, mouseY, walls);
  parArr[4].update(mouseX-11, mouseY-11, walls);
  parArr[5].update(mouseX-11, mouseY+11, walls);
  parArr[6].update(mouseX+11, mouseY+11, walls);
  parArr[7].update(mouseX+11, mouseY-11, walls);
  // Cast particles onto walls
  for(let par of parArr) {
    par.cast(walls);
  }
  // Show particles
  for(let par of parArr) {
    par.show();
  }
}

function mouseBorder() {
  if(mouseX < border+mBorder) mouseX = border+mBorder;
  if(mouseY < border+mBorder) mouseY = border+mBorder;
  if(mouseY > height - border - mBorder) mouseY = height-border - mBorder;
  if(mouseX > width - border - mBorder) mouseX = width - border - mBorder;
}