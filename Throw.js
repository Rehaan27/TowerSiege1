class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
        
        fly() {
         this.throw.bodyA = null
         text("Press space to get a second chance.", 100,100);
        }
        
        attach(body){
            this.throw.bodyA = body;
        }
    display(){
        if(this.throw.bodyA){
            
       var pointA = this.throw.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}