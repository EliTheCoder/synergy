function setup() {
  var cnv = createCanvas(1000,600);
  cnv.parent("border");
}

var bluecolor = "#002aff";

function draw() {
  translate(width/2,height/2);
  push();
  fill(bluecolor);
  noStroke();
  rect(0,0,50,50);
  pop();
}
