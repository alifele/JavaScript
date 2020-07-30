
let particle1;
let particle2;
let particle3;
let particle4;

let particles = []
let n_particles = 150;





function setup(){
  createCanvas(600,600);
  initParticles();

  //particle1 = new Particle(width/2,height/2);
  //particle2 = new Particle(width/2,height/2);
  //particle3 = new Particle(width/2,height/2);
  //particle4 = new Particle(width/2,height/2);

  background(51);
  frameRate(30);
}



function draw(){


  particles[0].move();
  particles[0].drawIt();
  particles.forEach(elem=>{
    elem.move();
    elem.drawIt();
  })

  //particle1.move();
  //particle1.drawIt();
  //particle2.move();
  //particle2.drawIt();
  //particle3.move();
  //particle3.drawIt();
  //particle4.move();
  //particle4.drawIt();

}















function initParticles(){
  let w;
  let h;
  for (var i=0; i<n_particles; i++){
    w = width/2;
    h = height/2;
    console.log(w,h)
    particles.push(new Particle(w,h))
  }
}


class Particle{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.x_ = this.x;
    this.y_ = this.y;
    this.color = [random(255),random(255),random(255)]
  }

  move(){
    let vx = random(-5,5);
    let vy = random(-5,5);
    this.x_ = this.x;
    this.y_ = this.y;
    this.x += vx;
    this.y += vy;
  }

  drawIt(){
    //rectMode(CENTER);
    fill(random(255),random(255),random(255));
    //circle(this.x, this.y,5);
    //line(this.x_, this.y_, this.x+10, this.y+10);

    stroke(this.color[0], this.color[1], this.color[2]);
    line(this.x_, this.y_, this.x, this.y);
    //circle(this.x_, this.y_, 10);
    //fill(130,230,110);
    //circle(this.x_, this.y_,  1);
    //console.log(this.x_, this.x);
    //rect(this.x ,this.y, 10,10);
  }


}
