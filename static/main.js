function setup() {
  var cnv = createCanvas(1000, 600);
  cnv.parent("border");
}

const bluecolor = "#002aff";

let cube = {
  height: 50,
  width: 50,
  vector: createVector(0, 0)
};

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 87:
      cube.vector.p5.accelerationY += 2;
  }
});

function draw() {
  // translate(width / 2, height / 2);
  push();
  fill(bluecolor);
  noStroke();
  rect(cube.x, cube.y + height - cube.height, cube.width, cube.height);
  pop();
}
