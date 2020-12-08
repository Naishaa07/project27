class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
    }

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var a1x=pointA.x
        var a1y=pointA.y
        var a2x=pointB.x+this.offsetX
        var a2y=pointB.y+this.offsetY

        line(a1x, a1y, a2x, a2y);
    

        }
        
    
    
}
