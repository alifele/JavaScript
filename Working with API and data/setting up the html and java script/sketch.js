let i = 0;
function setup(){
  createCanvas(500,500);
  frameRate(60);
}
function draw() {
  background(0);
  i+=1;
  fill(i%255,i%255,255);
  rect(i%width,30,100,100);

}
