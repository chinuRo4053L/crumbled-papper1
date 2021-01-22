class Box{
    constructor(x,y){
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=0;
        this.x=x ;
        this.y=y;
        this.bottomside=Bodies.rectangle( this.x, this.y, this.width, this.thickness,{isStatic: true})
this.leftwall=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic: true})
Matter.Body.setAngle(this.leftwall,this.angle)
this.rightwall=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic: true})
Matter.Body.setAngle(this.rightwall,(-1)*this.angle)
World.add(world,this.bottomside)
World.add(world,this.leftwall)
World.add(world,this.rightwall)
}
display(){
var posbottom = this.bottomside.position;
var posleft = this.leftwall.position
var posright = this.rightwall.position
push();
translate(posleft.x,posleft.y);
angleMode(RADIANS)
rotate(this.angle);
rectMode(CENTER);
fill("white")
rect( 0, 0, this.thicknes, this.height);
pop();

push();
translate(posright.x,posright.y);
angleMode(RADIANS)
rotate((-1)*this.angle);
rectMode(CENTER);
fill("white")
rect( 0, 0, this.thicknes, this.height);
pop();

push();
translate(posbottom.x,posbottom.y);
angleMode(RADIANS)
rectMode(CENTER);
fill("white")
rect( 0, 0, this.width, this.thickness);
pop();
}
}