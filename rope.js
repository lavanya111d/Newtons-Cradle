class Rope
{
    constructor(bodyA,pointB)
    {
        var options = {
        bodyA: bodyA,
        pointB:pointB,
        stiffness: 1,
        length:1000
    }
    this.pointB = pointB;
    this.rope1 = Matter.Constraint.create(options);
    World.add(world, this.rope1);
}   
   display()
   {
    if (this.rope1.bodyA){
    var pointA = this.rope1.bodyA.position;
    var pointB = this.pointB;

    push();
    stroke("black");
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
   }
}
}