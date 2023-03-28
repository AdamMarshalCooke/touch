function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(220);
  
  fill(255,0,0);
  
  for (var i = 0; i < touches.length; i++) {
      ellipse(touches[i].x, touches[i].y, 100, 50);
  }
  
}