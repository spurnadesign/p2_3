let boques=["👅","👄","💋"];
//let p1.p2;
let p=[];
function setup() {
  createCanvas(displayWidth, displayWidth);
  for(let i=0; i<300; i++){
    p[i]= new Pardal(width, random(height),ceil(random(-1,2)));
  }
 // p1= new Pardal(width,100, ceil(random(0,3)));
}

function draw() {
  background("#bbecec");
  for(let i=0; i<p.length; i++){
    p[i].show();
    p[i].move();
  }
 // p1. show();
 // p1. move();
}

class Pardal{
  constructor(x,y,rb){
    this.x=x;
    this.y=y;
    this.rab=rb;
  }

  show(){
    strokeWeight(2);
    translate (this.x,10)
    //scale(0.5);
    push();
    fill("#fe64fc");
    triangle(0,200,100,200,100,150);
    ellipseMode(CORNER);
    fill("#feff01");
    ellipse(100,140,150,75);
    textSize(40)
    text("👀",140,160);
    text(boques[this.rab],140,200);
    pop();
  }
  move(){
   this.x=this.x-1;
   if(this.x<0){
      this.x=width;
      }
  }
}