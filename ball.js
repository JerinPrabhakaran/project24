class Ball{
    constructor(x ,y ,radius){
     var options={
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 0.2

     }
     this.body = Bodies.circle(x ,y ,radius/2 ,options);
     this.radius = radius;
     World.add(world,this.body);


    }

    display(){
var pos = this.body.position
var angle = this.body.angle;
push();
translate(pos.x ,pos.y);
rotate(angle)
ellipseMode(CENTER);
fill("violet")
ellipse(0 ,0 ,this.radius);
pop();


    }
}
