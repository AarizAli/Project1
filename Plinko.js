class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'isStatic' : true
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.r = 10;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}