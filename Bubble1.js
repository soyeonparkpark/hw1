var bubbles = [];
var widthX = window.innerWidth*0.8;
var heightY = window.innerHeight*0.8;

function setup() {
  createCanvas(heightY, heightY);
  frameRate(100);
  for (var i = 0; i < 100; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(100, 100),
      w: random(100, 110)
    };
    
    bubbles.push(bubble);
  }
  console.log(bubbles);

}

function draw() {
  background(215);

  for (var i = 0; i < bubbles.length; i++) {

    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 100); 
      }
      fill(53, 142, 68, 90);
    } else {
      fill(255, 167, 10, 500);
    }
    
    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-3, 3);
    bubble.radius += random(-1, 1);
  }
}
