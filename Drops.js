class drop {
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x, y, r, options);
        this.r=r;
        World.add(world, this.body);
      }

      update(){
          if(this.body.position.y>570){
             Matter.Body.setPosition(this.body, {x:random(0,400), y:1})
             Body.setVelocity(this.body, {x: 0, y: 5});
          }
      }

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, 5,5);
        pop();
      }
};