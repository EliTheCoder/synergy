let cube = {};

function setup() {
  var cnv = createCanvas(1000, 600);
  cnv.parent("border");
  cube = {
    height: 50,
    width: 50,
    x: 0,
    y: 0,
    acceleration: {
      x: 0,
      y: 0
    }
  };
}

const bluecolor = "#002aff";

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 87:
      cube.acceleration.y += -1;
      break;
    case 65:
      cube.acceleration.x += -1;
      break;
    case 83:
      cube.acceleration.y += 1;
      break;
    case 68:
      cube.acceleration.x += 1;
      break;
  }
});
document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 87:
      cube.acceleration.y = 0;
      break;
    case 65:
      cube.acceleration.x = 0;
      break;
    case 83:
      cube.acceleration.y = 0;
      break;
    case 68:
      cube.acceleration.x = 0;
      break;
  }
});

function draw() {
  background(225);
  cube.x += cube.acceleration.x;
  cube.y += cube.acceleration.y;
  // if (cube.y <= -1) {
  //   cube.acceleration.y = 0;
  // }
  push();
  fill(bluecolor);
  noStroke();
  rect(cube.x, cube.y * -1 + height - cube.height, cube.width, cube.height);
  pop();
}
