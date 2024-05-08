//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(111,mouseX,20);
  stroke(50,200,5);
  strokeWeight(2);
  fill(255,255,127,100);
  ellipse(mouseX,mouseY,50,30);
  fill(99,10,250);
  strokeWeight(0);
  ellipse(random(width),random(height),50,50);
  fill(99,250,10,77);
  strokeWeight(5);
  triangle(random(width),random(height),50,50);
  
  
}