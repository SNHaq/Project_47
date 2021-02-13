class Ball{
    constructor(x,y,radius){
        this.visibility = 255;
       var options = {
            isStatic: true,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        
       
    }
}