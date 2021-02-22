class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB

      
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,205,29);
        image(this.sling2,160,30);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x-10, pointB.y); 
            line(pointA.x, pointA.y, pointB.x+30, pointB.y); 
            image(this.sling3,pointA.x-30,pointA.y-10,15,30
        }
        }
    }