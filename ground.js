class Ground{
    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
        this.x=x ;
        this.y=y;
        this.body=Bodies.rectangle( x, y, width, height,{isStatic: true})
        World.add(world,this.body)
    }
    display(){
       var posground=this.body.position
       
       push();
translate(posground.x,posground.y);

rectMode(CENTER);
fill("white")
rect( 0, 0, this.width, this.height);
pop();

    }
}