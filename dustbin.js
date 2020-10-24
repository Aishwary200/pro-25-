class Dustbin {
  constructor(x, y, width, height) {
    var option = {
        isStatic:true
    }
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, option); 
    this.leftWallBody=Bodies.rectangle(this.x, this.y, this.wallThickness, this.height, option);
    this.rightWallBody=Bodies.rectangle(this.x, this.y, this.wallThickness, this.height, option)
    this.width = width;
    this.height = height;
    this.wallThickness=20;
    this.x=x;
    this.y=y
    this.image=loadImage("dustbin.png")
    World.add(world, this.bottomBody);
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody);
  }
  display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position; 
    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER) 
    //strokeWeight(4);
     angleMode(RADIANS) 
     fill(255) 
     rotate(this.angle)
     //rect(0,0,this.wallThickness, this.dustbinHeight);
    pop() 
    push()
    translate(posRight.x, posRight.y); 
    rectMode(CENTER) 
    //strokeWeight(4); 
    angleMode(RADIANS) 
    fill(255) 
    rotate(-1*this.angle) 
    //rect(0,0,this.wallThickness, this.dustbinHeight); 
    pop() 
    push() 
    translate(posBottom.x, posBottom.y+10); 
    rectMode(CENTER) 
    //strokeWeight(4); 
    angleMode(RADIANS) 
    fill(255) 
    imageMode(CENTER); 
    image(this.image, 0,this.width, this.height) 
    //rect(0,0,this.dustbinWidth, this.wallThickness); 
    pop()
    
    
    
  }
}
