class u {
    constructor(x, y, r) {
        var options = {
            isStatic : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x, y, r, options);
        this.r=r;
        World.add(world, this.body);
      }
    }
